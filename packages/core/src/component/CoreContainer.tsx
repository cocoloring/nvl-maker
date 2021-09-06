import * as React from 'react'

export enum Platform {
    Web,
    Electron,
}

export interface CoreConfig {
    platform?: Platform
}

export function CoreContainer(param?: CoreConfig): JSX.Element {
    const options: CoreConfig = { ...param } ?? {}
    options.platform ??= Platform.Web
    return <div>Hello, NVL Maker</div>
}
