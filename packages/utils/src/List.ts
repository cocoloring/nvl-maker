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

    toString(): string {
        return this.data.map((item) => String(item)).join(',')
    }

    valueOf(): number {
        return this.data.length
    }
}
