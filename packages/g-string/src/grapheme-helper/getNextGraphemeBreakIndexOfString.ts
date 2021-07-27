import { getBreakType } from './getBreakType'
import { getCodePointFromString } from './getCodePointFromString'
import { getGraphemeBreakProperty } from './getGraphemeBreakProperty'
import { isSurrogate } from './isSurrogate'

/**
 * Returns the next grapheme break in the string after the given index
 * @memberof GraphemeSplitter
 */
export function getNextGraphemeBreakIndexOfString(
    string: string,
    index = 0,
): number {
    if (index < 0) {
        return 0
    }
    const stringLength = string.length
    if (index >= stringLength - 1) {
        return stringLength
    }
    const prev = getGraphemeBreakProperty(getCodePointFromString(string, index))
    const mid = []
    for (let i = index + 1; i < stringLength; i++) {
        // check for already processed low surrogates
        if (isSurrogate(string, i - 1)) {
            continue
        }

        const next = getGraphemeBreakProperty(getCodePointFromString(string, i))
        if (getBreakType(prev, mid, next)) {
            return i
        }

        mid.push(next)
    }
    return stringLength
}
