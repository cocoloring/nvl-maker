export interface BitNotOperable {
    not(): this
}

export interface BitOrOperable<T> {
    or(value: T): this
}

export interface BitXorOperable<T> {
    xor(value: T): this
}

export interface BitAndOperable<T> {
    and(value: T): this
}

export interface BitShiftOperable {
    leftShift(arithmetic?: boolean): this
    rightShift(arithmetic?: boolean): this
}

export interface BitOperable<T>
    extends BitNotOperable,
        BitOrOperable<T>,
        BitXorOperable<T>,
        BitAndOperable<T>,
        BitShiftOperable {}
