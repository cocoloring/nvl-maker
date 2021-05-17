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

export const ComparisonResult = {
    Same: true,
    Different: false,
}

export type ComparisonResult = typeof ComparisonResult[keyof typeof ComparisonResult]

export interface Comparable<T> {
    compare(value: T): ComparisonResult
}

export const Signum = {
    Negative: -1,
    Greater: 1,
    Same: 0,
    Position: 1,
    Less: -1,
} as const

export type Signum = typeof Signum[keyof typeof Signum]

export interface NumericComparable<T> {
    compare(value: T): Signum
}

export interface BitOperable<T> {
    not(): this
    or(value: T): this
    xor(value: T): this
    and(value: T): this
    leftShift(arithmetic?: boolean): this
    rightShift(arithmetic?: boolean): this
}
