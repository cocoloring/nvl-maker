import type { BasicObject } from '@nvl-maker/types'

export type MomentEnv = 'node' | 'node-legacy' | 'browser' | 'browser-legacy'

let currentEnv: MomentEnv
let now: () => bigint

if (typeof process === 'object' && process?.hrtime?.bigint) {
    currentEnv = 'node'
    now = process.hrtime.bigint
} else if (typeof process === 'object' && process?.hrtime) {
    currentEnv = 'node-legacy'
    now = function (): bigint {
        const [seconds, nanoseconds] = process.hrtime()
        return BigInt(seconds) * 1000000000n + BigInt(nanoseconds)
    }
} else if (typeof performance === 'object' && performance?.now) {
    currentEnv = 'browser'
    const dNow = Date.now()
    const pNow = performance.now()
    const startValue = BigInt(dNow) * 1000n - BigInt((pNow * 1000) | 0)
    now = function (): bigint {
        return startValue + BigInt((performance.now() * 1000) | 0)
    }
} else {
    currentEnv = 'browser-legacy'
    now = function (): bigint {
        return BigInt(Date.now()) * 1000n
    }
}

export default class Moment implements BasicObject<Moment> {
    static readonly Env: MomentEnv = currentEnv

    static now: () => bigint = now

    protected data: bigint

    get value(): bigint {
        return this.data
    }

    set value(value: bigint) {
        this.data = value
    }

    constructor(moment?: bigint) {
        this.data = moment ?? now()
    }

    // TODO: add calc method

    valueOf(): number {
        return Number(this.data / 1000n) / 1000
    }

    toString(): string {
        return this.data.toString()
    }

    clone(): Moment {
        return new Moment(this.data)
    }
}
