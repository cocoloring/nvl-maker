import * as utils from '@nvl-maker/utils'

import * as React from 'react'
import * as ReactDom from 'react-dom'
import { CoreContainer } from './component/CoreContainer'
import type { CoreConfig } from './component/CoreContainer'

export class Core {
    static utils = utils
    static component = CoreContainer

    protected dom?: HTMLDivElement
    protected _component: JSX.Element

    constructor(config?: CoreConfig) {
        this._component = <CoreContainer {...config} />
    }

    get component(): JSX.Element {
        return this._component
    }

    render(): this {
        if (this.dom) {
            ReactDom.render(this._component, this.dom)
        } else {
            throw new Error('Root Element must be set')
        }
        return this
    }

    start(): this {
        console.log('nvl maker is starting')
        return this
    }
}
