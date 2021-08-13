import { NvlMaker as core } from '@nvl-maker/core'

export class Editor {
    static core = core

    start(): this {
        console.log('Editor starting')
        return this
    }
}
