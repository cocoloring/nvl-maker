import type { BasicObject } from './types/main'

import { Char } from './Char'
import { List } from './List'

export class Text extends List<Char> implements BasicObject<List<Char>> {
    constructor(str: string) {
        super()
        // TODO: it cannot split emoji perfectly, need fix
        for (const char of str) {
            this.data.push(Char.fromString(char))
        }
    }

    valueOf(): number {
        return this.data.length
    }

    toString(): string {
        return this.data.map((char) => char.toString()).join()
    }
}
