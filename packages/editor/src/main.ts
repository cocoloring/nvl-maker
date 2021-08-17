import { Core } from '@nvl-maker/core'

export class Editor {
    static core = Core

    start(): this {
        console.log('Editor starting')
        return this
    }
}
