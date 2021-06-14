export type Index = number

export interface ListOperable<T> {
    get(position: number): T | void
    set(position: number, value: T): this

    [Symbol.iterator](): Iterator<T>

    positionOf(item: T): Index

    add(item: T, position: Index): this
    addMany(items: Array<T>, position?: number): this

    remove(position: Index): this
    removeMany(howMany: number, position?: Index): this

    pop(position: Index): T | void
    popMany(howMany: number, position?: Index): ListOperable<T>

    shift(value?: number): this

    shuffle(randomGenerator: Generator<number>): this

    map<R>(
        mappingFn: (item: T, index: number, list: this) => R,
    ): ListOperable<R>
}
