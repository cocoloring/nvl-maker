import { FormatError } from '@nvl-maker/error'
import type { BasicObject, AdditionalNumericArithmetic } from './types/main'

export class Float
    implements BasicObject<Float>, AdditionalNumericArithmetic<Float> {
    static readonly E = new Float(Math.E)
    static readonly Pi = new Float(Math.PI)

    static fromNumber(n: number): Float {
        return new Float(+n)
    }

    static fromString(n: string): Float {
        const ref = +n
        if (isNaN(ref)) {
            throw new FormatError('BadString')
        } else {
            return new Float(ref)
        }
    }

    protected data: number

    constructor(initValue = 0) {
        this.data = initValue
    }

    get value(): number {
        return this.data
    }

    set value(value: number) {
        this.data = value
    }

    plus(n: Float): this {
        this.value += n.value
        return this
    }

    minus(n: Float): this {
        this.value -= n.value
        return this
    }

    times(n: Float): this {
        this.value *= n.value
        return this
    }

    divides(n: Float): this {
        this.value = n.value / this.value
        return this
    }

    dividedBy(n: Float): this {
        this.value /= n.value
        return this
    }

    reciprocal(): this {
        this.value = 1 / this.value
        return this
    }

    power(n: Float): this {
        this.value = this.value ** n.value
        return this
    }

    root(n: Float): this {
        this.value = this.value ** (1 / n.value)
        return this
    }

    square(): this {
        this.value *= this.value
        return this
    }

    cube(): this {
        this.value = this.value ** 3
        return this
    }

    squareRoot(): this {
        this.value = Math.sqrt(this.value)
        return this
    }

    cubeRoot(): this {
        this.value = this.value ** 1 / 3
        return this
    }

    log(n: Float = Float.E): this {
        this.value = Math.log(this.value)
        if (n !== Float.E) {
            this.value = this.value / Math.log(n.value)
        }
        return this
    }

    valueOf(): number {
        return this.value
    }

    toString(): string {
        return String(this.value)
    }

    clone(): Float {
        return new Float(this.value)
    }
}
