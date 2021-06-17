import type { BasicObject } from '@nvl-maker/types'

import { Char } from './Char'
import { List } from './List'

export class Text extends List<Char> implements BasicObject<List<Char>> {
    constructor(str: string) {
        super()
        this.data = str.split('').map((v) => new Char(v.charCodeAt(0)))
    }

    get value(): Char[] {
        return this.data
    }

    valueOf(): number {
        return this.data.length
    }

    toString(): string {
        return super.toString('')
    }
}