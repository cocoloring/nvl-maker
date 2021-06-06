import type { BasicObject } from './BasicType'

export default class List<T> implements BasicObject<List<T>>, Iterable<T> {
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
        return this.data[position]
    }

    set(position: number, value: T): this {
        this.data[position] = value
        return this
    }

    add(item: T, position: number = this.data.length - 1): this {
        const lastPosition = this.data.length - 1

        if (position === 0) {
            this.data.unshift(item)
        } else if (position === lastPosition) {
            this.data.push(item)
        } else {
            this.data.splice(position, 0, item)
        }
        return this
    }

    addMany(items: Array<T>, position: number = this.data.length - 1): this {
        this.data.splice(position, 0, ...items)
        return this
    }

    remove(position: number = this.data.length - 1): this {
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
        this.data.splice(position, howMany)
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

    map<R>(mappingFn: (item: T, index: number, list: this) => R): List<R> {
        const newList = new List<R>()

        for (let i = 0; i < this.length; i++) {
            const item = this.get(i)
            if (item === undefined) continue
            newList.set(i, mappingFn(item, i, this))
        }

        return newList
    }
}
