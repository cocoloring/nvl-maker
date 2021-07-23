import { BreakTypes } from './BreakTypes'
import { GraphemeBreakProperty } from './GraphemeBreakProperty'
/***
 * Private function, returns whether a break is allowed between the
 * two given grapheme breaking classes
 * @param start
 * @param mid
 * @param end end
 * @return type of break
 */
export function getBreakType(
    start: GraphemeBreakProperty,
    mid: GraphemeBreakProperty[],
    end: GraphemeBreakProperty,
): BreakTypes {
    const all = [start, ...mid, end]
    const previous = all[all.length - 2]
    const next = end

    // Lookahead terminator for:
    // GB10. (E_Base | EBG) Extend* ? E_Modifier
    const eModifierIndex = all.lastIndexOf(GraphemeBreakProperty.E_Modifier)
    if (
        eModifierIndex > 1 &&
        all.slice(1, eModifierIndex).every(function (c) {
            return c == GraphemeBreakProperty.Extend
        }) &&
        [
            GraphemeBreakProperty.Extend,
            GraphemeBreakProperty.E_Base,
            GraphemeBreakProperty.E_Base_GAZ,
        ].indexOf(start) == -1
    ) {
        return BreakTypes.Break
    }

    // Lookahead terminator for:
    // GB12. ^ (RI RI)* RI ? RI
    // GB13. [^RI] (RI RI)* RI ? RI
    const rIIndex = all.lastIndexOf(GraphemeBreakProperty.Regional_Indicator)
    if (
        rIIndex > 0 &&
        all.slice(1, rIIndex).every(function (c) {
            return c == GraphemeBreakProperty.Regional_Indicator
        }) &&
        [
            GraphemeBreakProperty.Prepend,
            GraphemeBreakProperty.Regional_Indicator,
        ].indexOf(previous) == -1
    ) {
        if (
            all.filter(function (c) {
                return c == GraphemeBreakProperty.Regional_Indicator
            }).length %
                2 ==
            1
        ) {
            return BreakTypes.BreakLastRegional
        } else {
            return BreakTypes.BreakPenultimateRegional
        }
    }

    // GB3. CR X LF
    if (
        previous == GraphemeBreakProperty.CR &&
        next == GraphemeBreakProperty.LF
    ) {
        return BreakTypes.NotBreak
    }
    // GB4. (Control|CR|LF) ÷
    else if (
        previous == GraphemeBreakProperty.Control ||
        previous == GraphemeBreakProperty.CR ||
        previous == GraphemeBreakProperty.LF
    ) {
        if (
            next == GraphemeBreakProperty.E_Modifier &&
            mid.every(function (c) {
                return c == GraphemeBreakProperty.Extend
            })
        ) {
            return BreakTypes.Break
        } else {
            return BreakTypes.BreakStart
        }
    }
    // GB5. ÷ (Control|CR|LF)
    else if (
        next == GraphemeBreakProperty.Control ||
        next == GraphemeBreakProperty.CR ||
        next == GraphemeBreakProperty.LF
    ) {
        return BreakTypes.BreakStart
    }
    // GB6. L X (L|V|LV|LVT)
    else if (
        previous == GraphemeBreakProperty.L &&
        (next == GraphemeBreakProperty.L ||
            next == GraphemeBreakProperty.V ||
            next == GraphemeBreakProperty.LV ||
            next == GraphemeBreakProperty.LVT)
    ) {
        return BreakTypes.NotBreak
    }
    // GB7. (LV|V) X (V|T)
    else if (
        (previous == GraphemeBreakProperty.LV ||
            previous == GraphemeBreakProperty.V) &&
        (next == GraphemeBreakProperty.V || next == GraphemeBreakProperty.T)
    ) {
        return BreakTypes.NotBreak
    }
    // GB8. (LVT|T) X (T)
    else if (
        (previous == GraphemeBreakProperty.LVT ||
            previous == GraphemeBreakProperty.T) &&
        next == GraphemeBreakProperty.T
    ) {
        return BreakTypes.NotBreak
    }
    // GB9. X (Extend|ZWJ)
    else if (
        next == GraphemeBreakProperty.Extend ||
        next == GraphemeBreakProperty.ZWJ
    ) {
        return BreakTypes.NotBreak
    }
    // GB9a. X SpacingMark
    else if (next == GraphemeBreakProperty.SpacingMark) {
        return BreakTypes.NotBreak
    }
    // GB9b. Prepend X
    else if (previous == GraphemeBreakProperty.Prepend) {
        return BreakTypes.NotBreak
    }

    // GB10. (E_Base | EBG) Extend* ? E_Modifier
    const previousNonExtendIndex =
        all.indexOf(GraphemeBreakProperty.Extend) != -1
            ? all.lastIndexOf(GraphemeBreakProperty.Extend) - 1
            : all.length - 2
    if (
        [
            GraphemeBreakProperty.E_Base,
            GraphemeBreakProperty.E_Base_GAZ,
        ].indexOf(all[previousNonExtendIndex]) != -1 &&
        all.slice(previousNonExtendIndex + 1, -1).every(function (c) {
            return c == GraphemeBreakProperty.Extend
        }) &&
        next == GraphemeBreakProperty.E_Modifier
    ) {
        return BreakTypes.NotBreak
    }

    // GB11. ZWJ ? (Glue_After_Zwj | EBG)
    if (
        previous == GraphemeBreakProperty.ZWJ &&
        [
            GraphemeBreakProperty.Glue_After_Zwj,
            GraphemeBreakProperty.E_Base_GAZ,
        ].indexOf(next) != -1
    ) {
        return BreakTypes.NotBreak
    }

    // GB12. ^ (RI RI)* RI ? RI
    // GB13. [^RI] (RI RI)* RI ? RI
    if (mid.indexOf(GraphemeBreakProperty.Regional_Indicator) != -1) {
        return BreakTypes.Break
    }
    if (
        previous == GraphemeBreakProperty.Regional_Indicator &&
        next == GraphemeBreakProperty.Regional_Indicator
    ) {
        return BreakTypes.NotBreak
    }

    // GB999. Any ? Any
    return BreakTypes.BreakStart
}
