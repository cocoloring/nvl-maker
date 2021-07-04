import type { BasicObject, ListOperable } from './types/main'

function mod(value: number, max: number): number {
    if (value < 0) {
        value = value - 1
        value = value % max
        value = value + max + 1
        value = value % max
    } else {
        value = value % max
    }
    return value
}

export class List<T>
    implements BasicObject<List<T>>, Iterable<T>, ListOperable<T>
{
    static fromIterable<T>(iter: Iterable<T>): List<T> {
        const list = new List<T>()
        list.data = [...iter]
        return list
    }

    protected data: Array<T>

    constructor() {
        this.data = []
    }

    get length(): number {
        return this.data.length
    }

    get(position: number): T | undefined {
        return this.data[mod(position, this.data.length)]
    }

    set(position: number, value: T): this {
        this.data[mod(position, this.data.length)] = value
        return this
    }

    positionOf(value: T): number {
        return this.data.indexOf(value)
    }

    add(item: T, position: number = this.data.length): this {
        const lastPosition = this.data.length

        if (position === 0) {
            this.data.unshift(item)
        } else if (position === lastPosition) {
            this.data.push(item)
        } else {
            this.data.splice(position, 0, item)
        }
        return this
    }

    addMany(items: Array<T>, position: number = this.data.length): this {
        this.data.splice(position, 0, ...items)
        return this
    }

    remove(position: number = this.data.length - 1): this {
        // TODO: this is some issues with position
        const lastPosition = this.data.length - 1

        if (position === 0) {
            this.data.shift()
        } else if (position === lastPosition) {
            this.data.pop()
        } else {
            this.data.splice(position, 1)
        }
        return this
    }

    removeMany(howMany: number, position: number = this.data.length - 1): this {
        // TODO: this is some issues with position
        this.data.splice(position, howMany)
        return this
    }

    pop(position: number = this.data.length - 1): T | void {
        const lastPosition = this.data.length - 1
        if (position === 0) {
            return this.data.shift()
        } else if (position === lastPosition) {
            return this.data.pop()
        } else {
            return this.data.splice(position, 1)[0]
        }
    }

    popMany(howMany: number, position: number = this.data.length - 1): List<T> {
        const removedItems = List.fromIterable(
            this.data.splice(position, howMany),
        )
        return removedItems
    }

    shift(value = 1): this {
        if (value === 0) return this
        const index = -value % this.data.length
        const removed = this.data.splice(index)
        this.data = removed.concat(this.data)
        return this
    }

    [Symbol.iterator](): Iterator<T> {
        return this.data[Symbol.iterator]()
    }

    clone(): List<T> {
        return List.fromIterable(this.data)
    }

    toString(separator = ','): string {
        return this.data.map((item) => String(item)).join(separator)
    }

    valueOf(): number {
        return this.data.length
    }

    shuffle(randomGenerator: Generator<number>): this {
        // TODO: need a global default random Generator
        const data = this.data
        let i = data.length

        while (0 < i) {
            const rnd = randomGenerator.next().value
            const j = Math.floor(rnd * i)
            i--
            // swap
            const tmp = data[j]
            data[j] = data[i]
            data[i] = tmp
        }

        this.data = data
        return this
    }

    reverse(): this {
        this.data = this.data.reverse()
        return this
    }

    map<R>(mappingFn: (item: T, index: number, list: this) => R): List<R> {
        const newList = new List<R>()

        for (let i = 0; i < this.length; i++) {
            const item = this.get(i)
            if (item === undefined) continue
            newList.set(i, mappingFn(item, i, this))
        }

        return newList
    }

    each(loopFn: (item: T, index: number, list: this) => void): this {
        for (let i = 0; i < this.length; i++) {
            const item = this.get(i)
            if (item === undefined) continue
            loopFn(item, i, this)
        }
        return this
    }

    reduce<R>(
        initValue: R,
        reducer: (
            lastResult: R,
            currentItem: T,
            currentIndex: number,
            listSelf: this,
        ) => R,
    ): R {
        let res: R = initValue
        const data = this.data
        const len = data.length
        for (let idx = 0; idx < len; idx++) {
            const item = data[idx]
            res = reducer(res, item, idx, this)
        }
        return res
    }

    some(testFn: (item: T, index: number, listSelf: this) => boolean): boolean {
        const data = this.data
        const length = data.length
        for (let index = 0; index < length; index++) {
            const item = data[index]
            const testPassed = testFn(item, index, this)
            if (testPassed) {
                return true
            }
        }
        return false
    }

    every(
        testFn: (item: T, index: number, listSelf: this) => boolean,
    ): boolean {
        const data = this.data
        const length = data.length
        for (let index = 0; index < length; index++) {
            const item = data[index]
            const testPassed = testFn(item, index, this)
            if (!testPassed) {
                return false
            }
        }
        return true
    }

    splitEvery(howMany: number): List<List<T>> {
        const data = this.data
        const length = data.length

        if (length % howMany !== 0) {
            // TODO: should use FormatError
            throw new Error('cannot split perfectly!')
        }

        const res = new List<List<T>>()

        let subList: List<T> = new List<T>()
        res.add(subList) // add first

        for (let index = 0; index < length; index++) {
            if (index !== 0 && index % howMany === 0) {
                subList = new List<T>()
                res.add(subList)
            }
            subList.add(data[index])
        }

        return res
    }
}
