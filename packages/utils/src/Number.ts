export default class Number {
    static E = new Number(Math.E)
    static Pi = new Number(Math.PI)

    protected data: number

    constructor(initValue: number = 0) {
        this.data = initValue
    }

    get value(): number {
        return this.data
    }

    set value(value: number) {
        this.data = value
    }

    plus(n: Number): this {
        this.value += n.value
        return this
    }

    minus(n: Number): this {
        this.value -= n.value
        return this
    }

    times(n: Number): this {
        this.value *= n.value
        return this
    }

    divides(n: Number): this {
        this.value = n.value / this.value
        return this
    }

    dividedBy(n: Number): this {
        this.value /= n.value
        return this
    }

    reciprocal(): this {
        this.value = 1 / this.value
        return this
    }

    power(n: Number): this {
        this.value = this.value ** n.value
        return this
    }

    root(n: Number): this {
        this.value = this.value ** 1 / n.value
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

    log(n: Number = Number.E): this {
        this.value = Math.log(this.value)
        if (n !== Number.E) {
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

    clone(): Number {
        return new Number(this.value)
    }
}
