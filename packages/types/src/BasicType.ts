export type Primitive =
    | string
    | number
    | bigint
    | boolean
    | undefined
    | symbol
    | null

export interface BasicObject<T> {
    valueOf(): Primitive
    toString(): string
    clone(): T
}
