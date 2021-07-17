import type { BasicObject } from './types/main'

export interface NamedItem<Name, Item> {
    name: Name
    item: Item
}

export class NamedList<Name, Item>
    implements
        BasicObject<NamedList<Name, Item>>,
        Iterable<NamedItem<Name, Item>>
{
    protected data = new Map<Name, Item>()

    constructor(iter?: Iterable<NamedItem<Name, Item>>) {
        if (iter) {
            for (const { name, item } of iter) {
                this.data.set(name, item)
            }
        }
    }

    [Symbol.iterator](): Iterator<NamedItem<Name, Item>> {
        function* iter(
            this: NamedList<Name, Item>,
        ): Iterator<NamedItem<Name, Item>> {
            for (const [name, item] of this.data.entries()) {
                yield {
                    name,
                    item,
                }
            }
        }
        return iter.bind(this)()
    }

    valueOf(): string {
        return '$$NamedList$$'
    }

    toString(): string {
        return '$$NamedList$$'
    }

    clone(): NamedList<Name, Item> {
        const nl = new NamedList<Name, Item>()
        nl.data = new Map<Name, Item>(this.data)
        return nl
    }
}
