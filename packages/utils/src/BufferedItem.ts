import { FormatError } from '@nvl-maker/error'

export type BufferedItemInitFn<T> = (name: string) => T
export type BufferedItemUpdateFn<T> = (name: string, prevValue: T) => T

export type BufferedItemContainer<T> = {
    initFn: BufferedItemInitFn<T>
    value?: T
}

export type ObjectBasedMap<T> = {
    [name: string]: T
}

export default class BufferedItem<T = unknown> {
    protected static data: ObjectBasedMap<
        BufferedItem<unknown>
    > = Object.create(null)

    static set<T>(
        name: string,
        initFn: BufferedItemInitFn<T>,
        force = false,
    ): void {
        if (force || BufferedItem.data[name] === undefined) {
            BufferedItem.data[name] = new BufferedItem<T>(
                initFn,
            ) as BufferedItem<unknown>
        } else {
            throw new FormatError('BufferedItemRepeatSet')
        }
    }

    static get<T>(name: string, shouldUpdate = false): T {
        const container = BufferedItem.data[name] as BufferedItem<T>
        if (container) {
            if (container.value === undefined) {
                container.value = container.initFn(name)
                if (container.value === undefined) {
                    throw new FormatError('BufferedItemBadInitFn')
                }
            } else if (
                shouldUpdate &&
                typeof container.updateFn === 'function'
            ) {
                container.value = container.updateFn(name, container.value)
                if (container.value === undefined) {
                    // updateFn erased value, so must init again
                    return BufferedItem.get(name, shouldUpdate)
                }
            }
            return container.value
        } else {
            throw new FormatError('BufferedItemNotSet')
        }
    }

    static setUpdater<T>(
        name: string,
        updateFn: BufferedItemUpdateFn<T>,
    ): void {
        const container = BufferedItem.data[name] as BufferedItem<T>
        if (container) {
            container.updateFn = updateFn
        } else {
            throw new FormatError('BufferedItemNotSet')
        }
    }

    protected initFn: BufferedItemInitFn<T>
    protected updateFn?: BufferedItemUpdateFn<T>
    protected value?: T = undefined

    protected constructor(initFn: BufferedItemInitFn<T>) {
        this.initFn = initFn
    }
}
