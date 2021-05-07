export default class Number {
    private value = NaN

    constructor(value: number) {
        this.value = value
    }

    valueOf() {
        return this.value
    }

    toString() {
        return String(this.value)
    }
}
