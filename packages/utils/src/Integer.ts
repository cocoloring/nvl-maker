import type { ElementaryArithmetic } from './BasicArithmetic.js'
import type { BasicObject } from './BasicType.js'
import FormatError from './FormatError.js'

export default class Integer
    implements BasicObject<Integer>, ElementaryArithmetic<Integer> {
    static fromNumber(n: number): Integer {
        return new Integer(+n)
    }

    static fromString(n: string): Integer {
        const ref = Math.floor(+n)
        if (isNaN(ref)) {
            throw new FormatError('BadString')
        } else {
            return new Integer(ref)
        }
    }

    protected data: number

    constructor(initValue = 0) {
        this.data = initValue
    }

    get value(): number {
        return Math.floor(this.data)
    }

    set value(value: number) {
        this.data = value
    }

    plus(n: Integer): this {
        this.value += n.value
        return this
    }

    minus(n: Integer): this {
        this.value -= n.value
        return this
    }

    times(n: Integer): this {
        this.value *= n.value
        return this
    }

    divides(n: Integer): this {
        this.value = n.value / this.value
        return this
    }

    dividedBy(n: Integer): this {
        this.value /= n.value
        return this
    }

    valueOf(): number {
        return this.value
    }

    toString(): string {
        return String(this.value)
    }

    clone(): Integer {
        return new Integer(this.value)
    }
}
