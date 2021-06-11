import { FormatError } from '@nvl-maker/error'
import type { BasicObject } from '@nvl-maker/types'

export class Tuple<T> implements BasicObject<Tuple<T>>, Iterable<T> {
    static fromIterable<T>(iter: Iterable<T>): Tuple<T> {
        const tuple = new Tuple<T>(...iter)
        return tuple
    }

    protected data: Array<T>
    readonly length: number

    constructor(...items: T[]) {
        this.length = items.length
        this.data = [...items]
    }

    set(item: T, position: number): this {
        if (position > 0 && position < this.length) {
            this.data[position] = item
        } else {
            throw new FormatError('InvalidIndexRange')
        }
        return this
    }

    get(position: number): T {
        if (position > 0 && position < this.length) {
            return this.data[position]
        } else {
            throw new FormatError('InvalidIndexRange')
        }
    }

    [Symbol.iterator](): Iterator<T> {
        return this.data[Symbol.iterator]()
    }

    clone(): Tuple<T> {
        return new Tuple(...this.data)
    }

    toString(): string {
        return this.data.map((item) => String(item)).join(',')
    }

    valueOf(): number {
        return this.data.length
    }
}
