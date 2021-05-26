import * as canvas from 'canvas'
import BufferedItem from './BufferedItem.js'
import Float from './Float.js'
import FormatError from './FormatError.js'
import Vector2 from './Vector2.js'

/* --------
    there a difference between resolving of d.ts and resolving of nodejs
    what d.ts says:
        canvas.createCanvas
    nodejs:
        canvas.default.createCanvas

    TODO: need a better way to solve this issue
-------- */
import type { createCanvas } from 'canvas'
import type { BasicObject } from './BasicType.js'
import Integer from './Integer.js'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Canvas: typeof createCanvas = (canvas as any).default.createCanvas

const bufferName = {
    canvas: 'char_canvas_for_char_measure',
} as const

BufferedItem.set(bufferName.canvas, () => {
    let canvas: unknown
    if (typeof window === 'object') {
        canvas = document.createElement('canvas')
    } else {
        canvas = Canvas(200, 200)
    }
    return canvas as HTMLCanvasElement
})

export default class Char extends Integer implements BasicObject<Char> {
    constructor(initCharCode = 0x20) {
        super()
        this.data = this.formatData(initCharCode)
    }

    set value(value: number) {
        const ref = this.formatData(value)
        if (this.data !== ref) {
            this.isValueChanged = true
            this.data = ref
        }
    }

    get length(): number {
        // how many bites
        return Math.floor(Math.log(this.data) / Math.log(0x100))
    }

    protected formatData(data: number): number {
        // TODO: should as a methods of Float
        return Math.floor(Math.max(0, data))
    }

    toFloat(): Float {
        return new Float(this.value)
    }

    protected splitNumberAsArray(valueTotal: number, valueMax = 10): number[] {
        // TODO: as a methods of Integer
        const values: number[] = []
        let valueRemain = valueTotal
        while (valueRemain > 0) {
            values.unshift(valueRemain % valueMax)
            valueRemain = Math.floor(valueRemain / valueMax)
        }
        return values
    }

    protected bufferString = ''

    protected calcString(): void {
        this.bufferString = String.fromCharCode(
            ...this.splitNumberAsArray(this.value, 0x10000),
        )
    }

    toString(): string {
        if (this.isValueChanged) this.calcString()
        return this.bufferString
    }

    clone(): Char {
        // TODO: maybe copy all buffered values?
        const c = new Char(this.value)
        c.bufferedDisplaySize = this.bufferedDisplaySize.clone()
        c.isValueChanged = this.isValueChanged
        return c
    }

    // TODO: need give it a setter
    protected fontName = '10px sans-serif'

    protected isValueChanged = true

    protected calcDisplaySize(): void {
        const canvas = BufferedItem.get<HTMLCanvasElement>(bufferName.canvas)
        const context2D = canvas.getContext('2d')
        if (context2D === null) throw new FormatError('BadCanvasContext2D')
        context2D.font = this.fontName
        const {
            width,
            actualBoundingBoxAscent,
            actualBoundingBoxDescent,
        } = context2D.measureText(this.toString())
        console.log(context2D.measureText(this.toString()))
        this.bufferedDisplaySize.value = [
            width,
            actualBoundingBoxAscent + actualBoundingBoxDescent,
        ]
    }

    protected bufferedDisplaySize: Vector2 = new Vector2()

    get displaySize(): Vector2 {
        if (this.isValueChanged) this.calcDisplaySize()
        return this.bufferedDisplaySize
    }
}
