import { getNextGraphemeBreakIndexOfString } from './getNextGraphemeBreakIndexOfString'

/**
 * Returns the number of grapheme clusters there are in the given string
 * @param str target string
 * @returns how many graphemes in string
 */
export function countGraphemesFromString(str: string): number {
    let count = 0
    let index = 0
    let brk: number
    while ((brk = getNextGraphemeBreakIndexOfString(str, index)) < str.length) {
        index = brk
        count++
    }
    if (index < str.length) {
        count++
    }
    return count
}
