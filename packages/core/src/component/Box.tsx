import * as React from 'react'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import type { RootState } from '@react-three/fiber'
import type { Mesh } from 'three'

export interface BoxPros {
    position: [number, number, number]
}

export function Box(props: BoxPros): React.ReactElement {
    // This reference will give us direct access to the THREE.Mesh object
    const ref = useRef<Mesh>()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((_state: RootState, delta: number): void => {
        if (ref.current) {
            ref.current.rotation.x += 0.01 * delta
        }
    })

    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={ref}
            scale={active ? 1.5 : 1}
            onClick={(): void => setActive(!active)}
            onPointerOver={(): void => setHover(true)}
            onPointerOut={(): void => setHover(false)}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}
