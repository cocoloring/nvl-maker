import { getNextGraphemeBreakIndexOfString } from './getNextGraphemeBreakIndexOfString'

/**
 * Breaks the given string into an array of grapheme cluster strings
 * @param targetString target string
 * @returns graphemes
 */
export function splitGraphemesFromString(targetString: string): string[] {
    const graphemes: string[] = []
    const length = targetString.length
    let startIndex = 0
    while (true) {
        const endIndex = getNextGraphemeBreakIndexOfString(
            targetString,
            startIndex,
        )
        if (endIndex >= length) break
        graphemes.push(targetString.slice(startIndex, endIndex))
        startIndex = endIndex
    }
    if (startIndex < length) {
        graphemes.push(targetString.slice(startIndex))
    }
    return graphemes
}
