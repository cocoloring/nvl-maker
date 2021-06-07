export interface Addition<T> {
    plus(value: T): this
}

export interface Subtraction<T> {
    minus(value: T): this
}

export interface Multiplication<T> {
    times(value: T): this
}

export interface Division<T> {
    divides(value: T): this
    dividedBy(value: T): this
}

export interface ElementaryArithmetic<T>
    extends Addition<T>,
        Subtraction<T>,
        Multiplication<T>,
        Division<T> {}

export interface Reciprocal<T> {
    reciprocal(value: T): this
}

export interface Exponentiation<T> {
    power(value: T): this
}

export interface Logarithm<T> {
    log(value: T): this
}

export interface NumericArithmetic<T>
    extends ElementaryArithmetic<T>,
        Reciprocal<T>,
        Exponentiation<T>,
        Logarithm<T> {}

export interface AdditionalNumericArithmetic<T> extends NumericArithmetic<T> {
    square(): this
    cube(): this
    squareRoot(): this
    cubeRoot(): this
    root(value: T): this
}
export interface Comparable<T> {
    equals(value: T): boolean
}

export type Signum = -1 | 0 | 1

export interface NumericSigned {
    readonly sign: Signum
}
export interface NumericComparable<T> {
    compareTo(value: T): Signum
}

export interface BitOperable<T> {
    not(): this
    or(value: T): this
    xor(value: T): this
    and(value: T): this
    leftShift(arithmetic?: boolean): this
    rightShift(arithmetic?: boolean): this
}
