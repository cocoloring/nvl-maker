import { getNextGraphemeBreakIndexOfString } from './getNextGraphemeBreakIndexOfString'

/**
 * Returns the iterator of grapheme clusters there are in the given string
 * @param str target string
 * @returns iterator of grapheme
 */
export function createIteratorForGraphemesFromString(
    str: string,
): Iterator<string> {
    let index = 0
    return {
        next: (): IteratorResult<string> => {
            let value: string
            const brk = getNextGraphemeBreakIndexOfString(str, index)
            if (brk < str.length) {
                value = str.slice(index, brk)
                index = brk
                return { value: value, done: false }
            }
            if (index < str.length) {
                value = str.slice(index)
                index = str.length
                return { value: value, done: false }
            }
            return { value: undefined, done: true }
        },
    }
}
