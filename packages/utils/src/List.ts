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
