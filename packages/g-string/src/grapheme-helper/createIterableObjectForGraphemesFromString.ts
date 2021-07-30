import { createIteratorForGraphemesFromString } from './createIteratorForGraphemesFromString'

/**
 * A iterable object that able to iterate spited graphemes
 */
export class IterableGraphemeString implements Iterable<string> {
    readonly #string

    /**
     * Creates an instance of IterableGraphemeString.
     * @param targetString target string
     */
    constructor(targetString: string) {
        this.#string = targetString
    }

    /**
     * iterable method for iterate graphemes
     * @return iIterator for graphemes
     */
    [Symbol.iterator](): Iterator<string> {
        return createIteratorForGraphemesFromString(this.#string)
    }
}

/**
 * return a object that can be iterate for graphemes
 * @param targetString target string
 * @return a object that can be iterate for graphemes
 */
export function createIterableObjectForGraphemesFromString(
    targetString: string,
): IterableGraphemeString {
    return new IterableGraphemeString(targetString)
}
