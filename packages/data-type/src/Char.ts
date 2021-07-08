import type { BasicObject } from './types/main'
import { FormatError } from '@nvl-maker/error'

export class Char implements BasicObject<Char> {
    protected static readonly defaultCharCode = [0x20]

    protected isStringBufferShouldUpdate = true
    protected stringBuffer = ''

    protected data: Uint16Array

    constructor(...initCharCode: number[]) {
        // TODO: need cut the first character
        this.data = new Uint16Array(initCharCode)
        this.calcDataToString()
    }

    static fromString(str: string): Char {
        if (str.length <= 0) {
            throw new FormatError('BadString')
        }
        return new Char(...str.split('').map((str) => str.charCodeAt(0)))
    }

    static fromArray(array: Iterable<number>): Char {
        return new Char(...array)
    }

    set value(value: number[] | Uint16Array) {
        this.data = new Uint16Array(value)
        this.isStringBufferShouldUpdate = true
    }

    get value(): Uint16Array {
        return this.data
    }

    get length(): number {
        return this.data.length
    }

    protected calcDataToString(): void {
        this.stringBuffer = String.fromCodePoint(...this.data)
        this.isStringBufferShouldUpdate = false
    }

    valueOf(): string {
        return this.toString()
    }

    toString(): string {
        if (this.isStringBufferShouldUpdate) this.calcDataToString()
        return this.stringBuffer
    }

    clone(): Char {
        return new Char(...this.data)
    }
}
