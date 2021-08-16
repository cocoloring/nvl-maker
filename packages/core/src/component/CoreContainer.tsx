import * as React from 'react'

export enum Platform {
    Web,
    Electron,
}

export interface CoreConfig {
    platform?: Platform
}

export function CoreContainer(param?: CoreConfig): JSX.Element {
    param
    return <div>Hello, NVL Maker</div>
}
