import Float from './Float'

export default class Char {
    protected data: number

    constructor(initCharCode = 0x20) {
        this.data = this.formatData(initCharCode)
    }

    get value(): number {
        return this.data
    }

    set value(value: number) {
        this.data = this.formatData(value)
    }

    get length(): number {
        // how many bites
        return Math.floor(Math.log(this.data) / Math.log(0x100))
    }

    protected formatData(data: number): number {
        // TODO: should as a methods of Float
        return Math.floor(Math.max(0, data))
    }

    toFloat(): Float {
        return new Float(this.value)
    }

    valueOf(): number {
        return this.value
    }

    protected splitNumberAsArray(valueTotal: number, valueMax = 10): number[] {
        // TODO: as a methods of Integer
        const values: number[] = []
        let valueRemain = valueTotal
        while (valueRemain > 0) {
            values.unshift(valueRemain % valueMax)
            valueRemain = Math.floor(valueRemain / valueMax)
        }
        return values
    }

    toString(): string {
        return String.fromCharCode(
            ...this.splitNumberAsArray(this.value, 0x10000),
        )
    }

    clone(): Char {
        return new Char(this.value)
    }
}
