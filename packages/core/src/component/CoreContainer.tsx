import * as React from 'react'
import { Canvas } from '@react-three/fiber'
import { Box } from './Box'

export enum Platform {
    Web,
    Electron,
    WebFullPage,
}

export interface CoreConfig {
    platform?: Platform
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
