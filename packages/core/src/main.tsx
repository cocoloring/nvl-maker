import * as utils from '@nvl-maker/utils'

import * as React from 'react'
import * as ReactDom from 'react-dom'
import { CoreContainer } from './component/CoreContainer'
import type { CoreConfig } from './types/CoreConfig'

export class Core {
    static utils = utils
    static component = CoreContainer
    static defaultRootElementId = '__NVL_MAKER_ROOT__'

    protected _dom?: HTMLElement
    protected _component: JSX.Element

    constructor(config?: CoreConfig) {
        this._component = <CoreContainer {...config} />
    }

    get component(): JSX.Element {
        return this._component
    }

    get renderAt(): HTMLElement | undefined {
        return this._dom
    }

    render(): this {
        if (this._dom) {
            ReactDom.render(this._component, this._dom)
        } else {
            throw new Error('Root Element must be set')
        }
        return this
    }

    isMounted(): boolean {
        return this._dom !== undefined
    }

    start(): this {
        console.log('nvl maker is starting')
        if (!this.isMounted()) {
            this._dom = document.body
            this._dom.style.margin = '0'
            this._dom.style.padding = '0'
            this._dom.id = Core.defaultRootElementId
        }
        this.render()
        return this
    }
}
