export default class Timer {
    static global = new Timer('global')

    name: string

    constructor(name = 'anonymous') {
        this.name = name
    }

    after(time: number, job: () => void): this {
        setTimeout(job, time)
        return this
    }

    // TODO: need more implements
}
