import * as React from 'react'
import { Canvas } from '@react-three/fiber'
import { Box } from './Box'
import { CoreConfig, WindowMode } from '../types/CoreConfig'
import { coreConfigInitialization } from '../configInit/core'

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
