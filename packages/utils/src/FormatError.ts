enum ErrorText {
    BadString = 'string cannot be parsed',
}

export default class FormatError extends Error {
    static ErrorText: typeof ErrorText = ErrorText
    constructor(text: keyof typeof ErrorText) {
        const message: string = ErrorText[text]

        super(message)
    }
}

new FormatError('BadString')
