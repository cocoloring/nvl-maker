import type { BasicObject } from './BasicType'

enum ErrorText {
    BadString = 'string cannot be parsed',
    BadCanvasContext2D = 'unable to get context 2d from a html canvas element',
    NoConstructor = "it's not allowed to create a instances of this class via constructor.",
    BufferedItemRepeatSet = 'BufferedItem can be set once only',
    BufferedItemNotSet = 'BufferedItem must be set first',
    BufferedItemBadInitFn = 'BufferedItem initFn must return a non-void value',
    InvalidIndexRange = 'Invalid index range of list-like object',
}

export default class FormatError
    extends Error
    implements BasicObject<FormatError> {
    static ErrorText: typeof ErrorText = ErrorText
    readonly type: keyof typeof ErrorText
    readonly message: ErrorText
    constructor(errorType: keyof typeof ErrorText) {
        const message = ErrorText[errorType]
        super(message)
        this.type = errorType
        this.message = message
    }

    valueOf(): string {
        return this.message
    }
    toString(): string {
        return this.message
    }
    clone(): FormatError {
        return new FormatError(this.type)
    }
}
