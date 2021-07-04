import { FormatError } from '@nvl-maker/error'
import type { ElementaryArithmetic, BasicObject } from './types/main'

import { List } from './List'

export class Integer
    implements BasicObject<Integer>, ElementaryArithmetic<Integer>
{
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

    split(radix: Integer | number = 10): List<Integer> {
        if (typeof radix === 'number') {
            radix = new Integer(radix)
        }
        const valueTotal = this.data
        const valueMax = radix.data
        const values = new List<Integer>()
        let valueRemain = valueTotal
        while (valueRemain > 0) {
            values.add(new Integer(valueRemain % valueMax), 0)
            valueRemain = Math.floor(valueRemain / valueMax)
        }
        return values
    }
}
