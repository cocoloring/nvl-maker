import * as React from 'react'
import { Canvas } from '@react-three/fiber'
import { Box } from './Box'

export enum Platform {
    Web, // on websites
    Desktop, // on desktop PCs or
    Phone, // on phones like iPhone or android phone
    Tablet, // on tablet PCs like iPad or all android tablets
}

export enum OS {
    Window, // window
    MacOS, // on macOS
    Android, // on Android phone or Android tablet
    IOS, // iOS system, like iPhone or iOS
}

export enum WindowMode {
    Windowed, // desktop only
    FullScreen, // desktop, phone, tablet only
    VerticalFullScreen, // phone, tablet
    AsElement, // web only
    AsFullScreenElement, // web only
}

export interface CoreConfig {
    platform?: Platform
    os?: OS
    windowMode?: WindowMode
}

export function CoreContainer(param?: CoreConfig): JSX.Element {
    const options: CoreConfig = { ...param } ?? {}
    options.platform ??= Platform.Web
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
        </Canvas>
    )
}
