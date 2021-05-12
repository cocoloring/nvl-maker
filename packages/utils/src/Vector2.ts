export type Vector2Array = [number, number]

export default class Vector2 {
    protected data: Vector2Array

    constructor(...condition: [number?, number?]) {
        for (let i = 0; i < condition.length; i++) {
            const element = condition[i]
            condition[i] = element ?? 0
        }

        this.data = condition as Vector2Array
    }

    get value(): Vector2Array {
        return [...this.data]
    }

    set value(value: Vector2Array) {
        this.data = [...value]
    }

    valueOf(): string {
        return this.data.join(',')
    }

    toString(): string {
        return this.data.join(',')
    }
}
