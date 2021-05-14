enum ErrorText {
    BadString = 'string cannot be parsed',
    BadCanvasContext2D = 'unable to get context 2d from a html canvas element',
    NoConstructor = "it's not allowed to create a instances of this class via constructor.",
    BufferedItemRepeatSet = 'BufferedItem can be set once only',
    BufferedItemNotSet = 'BufferedItem must be set first',
}

export default class FormatError extends Error {
    static ErrorText: typeof ErrorText = ErrorText
    constructor(errorType: keyof typeof ErrorText) {
        const message: string = ErrorText[errorType]

        super(message)
    }
}
