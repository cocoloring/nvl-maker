export type Primitive =
    | string
    | number
    | bigint
    | boolean
    | undefined
    | symbol
    | null

export interface BasicObject<T>
    extends JavaScriptStringConvertible,
        JavaScriptPrimitiveConvertible,
        Cloneable<T> {}

export interface Cloneable<T> {
    clone(): T
}

export interface JavaScriptPrimitiveConvertible {
    valueOf(): Primitive
}

export interface JavaScriptStringConvertible {
    toString(): string
}

export interface JavaScriptNumberConvertible {
    toNumber(): number
}
