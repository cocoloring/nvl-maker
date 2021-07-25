/**
 * check if a string is surrogate
 * @param targetString target string
 * @param startIndex start position
 * @return boolean
 */
export function isSurrogate(targetString: string, startIndex: number): boolean {
    const i0 = targetString.charCodeAt(startIndex)
    const i1 = targetString.charCodeAt(startIndex + 1)
    return 0xd800 <= i0 && i0 <= 0xdbff && 0xdc00 <= i1 && i1 <= 0xdfff
}
