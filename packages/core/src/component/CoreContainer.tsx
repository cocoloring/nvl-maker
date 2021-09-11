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
    windowSize?: [number, number]
}

type Complete<T> = {
    [P in keyof Required<T>]: Pick<T, P> extends Required<Pick<T, P>>
        ? T[P]
        : T[P] | undefined
}

export function coreConfigInitialization(
    options?: CoreConfig,
): Complete<CoreConfig> {
    const opts: CoreConfig = { ...options } ?? {}
    opts.os ??= OS.Window
    opts.windowSize ??= [0, 0]
    opts.windowSize[0] ??= 0
    opts.windowSize[1] ??= 0
    opts.platform ??= Platform.Web
    switch (opts.platform) {
        case Platform.Web: {
            opts.windowMode ??= WindowMode.AsFullScreenElement
            break
        }
        case Platform.Desktop: {
            opts.windowMode ??= WindowMode.FullScreen
            break
        }
        case Platform.Web: {
            opts.windowMode ??= WindowMode.AsFullScreenElement
            break
        }
        case Platform.Desktop: {
            opts.windowMode ??= WindowMode.FullScreen
            break
        }
        default: {
        }
    }
    return opts as unknown as Complete<CoreConfig>
}

export function CoreContainer(param?: CoreConfig): JSX.Element {
    const options = coreConfigInitialization(param)
    return (
        <div
            style={{
                ...(options.windowMode === WindowMode.AsFullScreenElement
                    ? { width: '100vw', height: '100vh' }
                    : undefined),
            }}
        >
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Box position={[-1.2, 0, 0]} />
                <Box position={[1.2, 0, 0]} />
            </Canvas>
        </div>
    )
}
