export interface BitOperable<T> {
    not(): this
    or(value: T): this
    xor(value: T): this
    and(value: T): this
    leftShift(arithmetic?: boolean): this
    rightShift(arithmetic?: boolean): this
}
