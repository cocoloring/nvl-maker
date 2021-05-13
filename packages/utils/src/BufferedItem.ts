import FormatError from './FormatError'

export type BufferedItemInitFn<T> = (name: string) => T

export type BufferedItemContainer<T> = {
    initFn: BufferedItemInitFn<T>
    value?: T
}

export type ObjectBasedMap<T> = {
    [name: string]: T
}

export default class BufferedItem {
    protected static data: ObjectBasedMap<
        BufferedItemContainer<unknown>
    > = Object.create(null)

    private constructor() {
        throw new FormatError('NoConstructor')
    }

    static set<T>(
        name: string,
        initFn: BufferedItemInitFn<T>,
        force = false,
    ): void {
        if (force || BufferedItem.data[name] === undefined) {
            BufferedItem.data[name] = {
                initFn,
                value: undefined,
            }
        } else {
            throw new FormatError('BufferedItemRepeatSet')
        }
    }

    static get<T>(name: string): T {
        const container = BufferedItem.data[name]
        if (container) {
            if (container.value === undefined) {
                container.value = container.initFn(name)
                return container.value as T
            } else {
                return container.value as T
            }
        } else {
            throw new FormatError('BufferedItemRepeatSet')
        }
    }
}
