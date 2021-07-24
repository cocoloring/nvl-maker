/**
 * gets a Unicode code point from a JavaScript UTF-16 string
 * handling surrogate pairs appropriately
 * @param targetString targer string
 * @param startIndex start position
 * @return code point
 */
export function getCodePointFromString(
    targetString: string,
    startIndex = 0,
): number {
    const code = targetString.charCodeAt(startIndex)

    // if a high surrogate
    if (
        0xd800 <= code &&
        code <= 0xdbff &&
        startIndex < targetString.length - 1
    ) {
        const hi = code
        const low = targetString.charCodeAt(startIndex + 1)
        if (0xdc00 <= low && low <= 0xdfff) {
            return (hi - 0xd800) * 0x400 + (low - 0xdc00) + 0x10000
        }
        return hi
    }

    // if a low surrogate
    if (0xdc00 <= code && code <= 0xdfff && startIndex >= 1) {
        const hi = targetString.charCodeAt(startIndex - 1)
        const low = code
        if (0xd800 <= hi && hi <= 0xdbff) {
            return (hi - 0xd800) * 0x400 + (low - 0xdc00) + 0x10000
        }
        return low
    }

    //just return the char if an unmatched surrogate half or a
    //single-char code point
    return code
}
