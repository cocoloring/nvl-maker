import {
    countGraphemesFromString,
    splitGraphemesFromString,
} from './grapheme-helper'

export class GString {
    readonly #string: string
    readonly #length: number
    readonly #charArray: string[]
    constructor(string: unknown = '') {
        const str = String(string)
        this.#string = str
        this.#length = countGraphemesFromString(str)
        this.#charArray = splitGraphemesFromString(str)
    }

    get length(): number {
        return this.#length
    }

    valueOf(): string {
        return this.#string
    }

    split(separator = ',', limit = Infinity): string[] {
        const res: string[] = []
        if (limit <= 0) {
            return res
        }
        let i = 0
        for (const char of this.#charArray) {
            let sub: string | void = res[i]
            if (sub === undefined) {
                sub = ''
            }
            if (separator !== char) {
                res[i] = sub + char
            }
            if (separator === char || separator === '') {
                i++
            }
            console.log(this.#charArray)
        }
        return res
    }
}
