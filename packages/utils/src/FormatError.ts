enum ErrorText {
    BadString = 'string cannot be parsed',
    BadCanvasContext2D = 'unable to get context 2d from a html canvas element',
}

export default class FormatError extends Error {
    static ErrorText: typeof ErrorText = ErrorText
    constructor(errorType: keyof typeof ErrorText) {
        const message: string = ErrorText[errorType]

        super(message)
    }
}

new FormatError('BadString')
