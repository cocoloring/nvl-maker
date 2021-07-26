import { GraphemeBreakProperty } from './GraphemeBreakProperty'

/**
 * given a Unicode code point, determines this symbol's grapheme break property
 * @param codePoint character code point
 * @returns grapheme break property
 */
export function getGraphemeBreakProperty(
    codePoint: number,
): GraphemeBreakProperty {
    //grapheme break property for Unicode 10.0.0,
    //taken from http://www.unicode.org/Public/10.0.0/ucd/auxiliary/GraphemeBreakProperty.txt
    //and adapted to JavaScript rules

    if (
        (0x0600 <= codePoint && codePoint <= 0x0605) || // Cf [6] ARABIC NUMBER SIGN..ARABIC NUMBER MARK ABOVE
        0x06dd == codePoint || // Cf ARABIC END OF AYAH
        0x070f == codePoint || // Cf SYRIAC ABBREVIATION MARK
        0x08e2 == codePoint || // Cf ARABIC DISPUTED END OF AYAH
        0x0d4e == codePoint || // Lo MALAYALAM LETTER DOT REPH
        0x110bd == codePoint || // Cf KAITHI NUMBER SIGN
        (0x111c2 <= codePoint && codePoint <= 0x111c3) || // Lo [2] SHARADA SIGN JIHVAMULIYA..SHARADA SIGN UPADHMANIYA
        0x11a3a == codePoint || // Lo ZANABAZAR SQUARE CLUSTER-INITIAL LETTER RA
        (0x11a86 <= codePoint && codePoint <= 0x11a89) || // Lo [4] SOYOMBO CLUSTER-INITIAL LETTER RA..SOYOMBO CLUSTER-INITIAL LETTER SA
        0x11d46 == codePoint // Lo MASARAM GONDI REPHA
    ) {
        return GraphemeBreakProperty.Prepend
    }
    if (
        0x000d == codePoint // Cc <control-000D>
    ) {
        return GraphemeBreakProperty.CR
    }

    if (
        0x000a == codePoint // Cc <control-000A>
    ) {
        return GraphemeBreakProperty.LF
    }

    if (
        (0x0000 <= codePoint && codePoint <= 0x0009) || // Cc [10] <control-0000>..<control-0009>
        (0x000b <= codePoint && codePoint <= 0x000c) || // Cc [2] <control-000B>..<control-000C>
        (0x000e <= codePoint && codePoint <= 0x001f) || // Cc [18] <control-000E>..<control-001F>
        (0x007f <= codePoint && codePoint <= 0x009f) || // Cc [33] <control-007F>..<control-009F>
        0x00ad == codePoint || // Cf SOFT HYPHEN
        0x061c == codePoint || // Cf ARABIC LETTER MARK
        0x180e == codePoint || // Cf MONGOLIAN VOWEL SEPARATOR
        0x200b == codePoint || // Cf ZERO WIDTH SPACE
        (0x200e <= codePoint && codePoint <= 0x200f) || // Cf [2] LEFT-TO-RIGHT MARK..RIGHT-TO-LEFT MARK
        0x2028 == codePoint || // Zl LINE SEPARATOR
        0x2029 == codePoint || // Zp PARAGRAPH SEPARATOR
        (0x202a <= codePoint && codePoint <= 0x202e) || // Cf [5] LEFT-TO-RIGHT EMBEDDING..RIGHT-TO-LEFT OVERRIDE
        (0x2060 <= codePoint && codePoint <= 0x2064) || // Cf [5] WORD JOINER..INVISIBLE PLUS
        0x2065 == codePoint || // Cn <reserved-2065>
        (0x2066 <= codePoint && codePoint <= 0x206f) || // Cf [10] LEFT-TO-RIGHT ISOLATE..NOMINAL DIGIT SHAPES
        (0xd800 <= codePoint && codePoint <= 0xdfff) || // Cs [2048] <surrogate-D800>..<surrogate-DFFF>
        0xfeff == codePoint || // Cf ZERO WIDTH NO-BREAK SPACE
        (0xfff0 <= codePoint && codePoint <= 0xfff8) || // Cn [9] <reserved-FFF0>..<reserved-FFF8>
        (0xfff9 <= codePoint && codePoint <= 0xfffb) || // Cf [3] INTERLINEAR ANNOTATION ANCHOR..INTERLINEAR ANNOTATION TERMINATOR
        (0x1bca0 <= codePoint && codePoint <= 0x1bca3) || // Cf [4] SHORTHAND FORMAT LETTER OVERLAP..SHORTHAND FORMAT UP STEP
        (0x1d173 <= codePoint && codePoint <= 0x1d17a) || // Cf [8] MUSICAL SYMBOL BEGIN BEAM..MUSICAL SYMBOL END PHRASE
        0xe0000 == codePoint || // Cn <reserved-E0000>
        0xe0001 == codePoint || // Cf LANGUAGE TAG
        (0xe0002 <= codePoint && codePoint <= 0xe001f) || // Cn [30] <reserved-E0002>..<reserved-E001F>
        (0xe0080 <= codePoint && codePoint <= 0xe00ff) || // Cn [128] <reserved-E0080>..<reserved-E00FF>
        (0xe01f0 <= codePoint && codePoint <= 0xe0fff) // Cn [3600] <reserved-E01F0>..<reserved-E0FFF>
    ) {
        return GraphemeBreakProperty.Control
    }

    if (
        (0x0300 <= codePoint && codePoint <= 0x036f) || // Mn [112] COMBINING GRAVE ACCENT..COMBINING LATIN SMALL LETTER X
        (0x0483 <= codePoint && codePoint <= 0x0487) || // Mn [5] COMBINING CYRILLIC TITLO..COMBINING CYRILLIC POKRYTIE
        (0x0488 <= codePoint && codePoint <= 0x0489) || // Me [2] COMBINING CYRILLIC HUNDRED THOUSANDS SIGN..COMBINING CYRILLIC MILLIONS SIGN
        (0x0591 <= codePoint && codePoint <= 0x05bd) || // Mn [45] HEBREW ACCENT ETNAHTA..HEBREW POINT METEG
        0x05bf == codePoint || // Mn HEBREW POINT RAFE
        (0x05c1 <= codePoint && codePoint <= 0x05c2) || // Mn [2] HEBREW POINT SHIN DOT..HEBREW POINT SIN DOT
        (0x05c4 <= codePoint && codePoint <= 0x05c5) || // Mn [2] HEBREW MARK UPPER DOT..HEBREW MARK LOWER DOT
        0x05c7 == codePoint || // Mn HEBREW POINT QAMATS QATAN
        (0x0610 <= codePoint && codePoint <= 0x061a) || // Mn [11] ARABIC SIGN SALLALLAHOU ALAYHE WASSALLAM..ARABIC SMALL KASRA
        (0x064b <= codePoint && codePoint <= 0x065f) || // Mn [21] ARABIC FATHATAN..ARABIC WAVY HAMZA BELOW
        0x0670 == codePoint || // Mn ARABIC LETTER SUPERSCRIPT ALEF
        (0x06d6 <= codePoint && codePoint <= 0x06dc) || // Mn [7] ARABIC SMALL HIGH LIGATURE SAD WITH LAM WITH ALEF MAKSURA..ARABIC SMALL HIGH SEEN
        (0x06df <= codePoint && codePoint <= 0x06e4) || // Mn [6] ARABIC SMALL HIGH ROUNDED ZERO..ARABIC SMALL HIGH MADDA
        (0x06e7 <= codePoint && codePoint <= 0x06e8) || // Mn [2] ARABIC SMALL HIGH YEH..ARABIC SMALL HIGH NOON
        (0x06ea <= codePoint && codePoint <= 0x06ed) || // Mn [4] ARABIC EMPTY CENTRE LOW STOP..ARABIC SMALL LOW MEEM
        0x0711 == codePoint || // Mn SYRIAC LETTER SUPERSCRIPT ALAPH
        (0x0730 <= codePoint && codePoint <= 0x074a) || // Mn [27] SYRIAC PTHAHA ABOVE..SYRIAC BARREKH
        (0x07a6 <= codePoint && codePoint <= 0x07b0) || // Mn [11] THAANA ABAFILI..THAANA SUKUN
        (0x07eb <= codePoint && codePoint <= 0x07f3) || // Mn [9] NKO COMBINING SHORT HIGH TONE..NKO COMBINING DOUBLE DOT ABOVE
        (0x0816 <= codePoint && codePoint <= 0x0819) || // Mn [4] SAMARITAN MARK IN..SAMARITAN MARK DAGESH
        (0x081b <= codePoint && codePoint <= 0x0823) || // Mn [9] SAMARITAN MARK EPENTHETIC YUT..SAMARITAN VOWEL SIGN A
        (0x0825 <= codePoint && codePoint <= 0x0827) || // Mn [3] SAMARITAN VOWEL SIGN SHORT A..SAMARITAN VOWEL SIGN U
        (0x0829 <= codePoint && codePoint <= 0x082d) || // Mn [5] SAMARITAN VOWEL SIGN LONG I..SAMARITAN MARK NEQUDAA
        (0x0859 <= codePoint && codePoint <= 0x085b) || // Mn [3] MANDAIC AFFRICATION MARK..MANDAIC GEMINATION MARK
        (0x08d4 <= codePoint && codePoint <= 0x08e1) || // Mn [14] ARABIC SMALL HIGH WORD AR-RUB..ARABIC SMALL HIGH SIGN SAFHA
        (0x08e3 <= codePoint && codePoint <= 0x0902) || // Mn [32] ARABIC TURNED DAMMA BELOW..DEVANAGARI SIGN ANUSVARA
        0x093a == codePoint || // Mn DEVANAGARI VOWEL SIGN OE
        0x093c == codePoint || // Mn DEVANAGARI SIGN NUKTA
        (0x0941 <= codePoint && codePoint <= 0x0948) || // Mn [8] DEVANAGARI VOWEL SIGN U..DEVANAGARI VOWEL SIGN AI
        0x094d == codePoint || // Mn DEVANAGARI SIGN VIRAMA
        (0x0951 <= codePoint && codePoint <= 0x0957) || // Mn [7] DEVANAGARI STRESS SIGN UDATTA..DEVANAGARI VOWEL SIGN UUE
        (0x0962 <= codePoint && codePoint <= 0x0963) || // Mn [2] DEVANAGARI VOWEL SIGN VOCALIC L..DEVANAGARI VOWEL SIGN VOCALIC LL
        0x0981 == codePoint || // Mn BENGALI SIGN CANDRABINDU
        0x09bc == codePoint || // Mn BENGALI SIGN NUKTA
        0x09be == codePoint || // Mc BENGALI VOWEL SIGN AA
        (0x09c1 <= codePoint && codePoint <= 0x09c4) || // Mn [4] BENGALI VOWEL SIGN U..BENGALI VOWEL SIGN VOCALIC RR
        0x09cd == codePoint || // Mn BENGALI SIGN VIRAMA
        0x09d7 == codePoint || // Mc BENGALI AU LENGTH MARK
        (0x09e2 <= codePoint && codePoint <= 0x09e3) || // Mn [2] BENGALI VOWEL SIGN VOCALIC L..BENGALI VOWEL SIGN VOCALIC LL
        (0x0a01 <= codePoint && codePoint <= 0x0a02) || // Mn [2] GURMUKHI SIGN ADAK BINDI..GURMUKHI SIGN BINDI
        0x0a3c == codePoint || // Mn GURMUKHI SIGN NUKTA
        (0x0a41 <= codePoint && codePoint <= 0x0a42) || // Mn [2] GURMUKHI VOWEL SIGN U..GURMUKHI VOWEL SIGN UU
        (0x0a47 <= codePoint && codePoint <= 0x0a48) || // Mn [2] GURMUKHI VOWEL SIGN EE..GURMUKHI VOWEL SIGN AI
        (0x0a4b <= codePoint && codePoint <= 0x0a4d) || // Mn [3] GURMUKHI VOWEL SIGN OO..GURMUKHI SIGN VIRAMA
        0x0a51 == codePoint || // Mn GURMUKHI SIGN UDAAT
        (0x0a70 <= codePoint && codePoint <= 0x0a71) || // Mn [2] GURMUKHI TIPPI..GURMUKHI ADDAK
        0x0a75 == codePoint || // Mn GURMUKHI SIGN YAKASH
        (0x0a81 <= codePoint && codePoint <= 0x0a82) || // Mn [2] GUJARATI SIGN CANDRABINDU..GUJARATI SIGN ANUSVARA
        0x0abc == codePoint || // Mn GUJARATI SIGN NUKTA
        (0x0ac1 <= codePoint && codePoint <= 0x0ac5) || // Mn [5] GUJARATI VOWEL SIGN U..GUJARATI VOWEL SIGN CANDRA E
        (0x0ac7 <= codePoint && codePoint <= 0x0ac8) || // Mn [2] GUJARATI VOWEL SIGN E..GUJARATI VOWEL SIGN AI
        0x0acd == codePoint || // Mn GUJARATI SIGN VIRAMA
        (0x0ae2 <= codePoint && codePoint <= 0x0ae3) || // Mn [2] GUJARATI VOWEL SIGN VOCALIC L..GUJARATI VOWEL SIGN VOCALIC LL
        (0x0afa <= codePoint && codePoint <= 0x0aff) || // Mn [6] GUJARATI SIGN SUKUN..GUJARATI SIGN TWO-CIRCLE NUKTA ABOVE
        0x0b01 == codePoint || // Mn ORIYA SIGN CANDRABINDU
        0x0b3c == codePoint || // Mn ORIYA SIGN NUKTA
        0x0b3e == codePoint || // Mc ORIYA VOWEL SIGN AA
        0x0b3f == codePoint || // Mn ORIYA VOWEL SIGN I
        (0x0b41 <= codePoint && codePoint <= 0x0b44) || // Mn [4] ORIYA VOWEL SIGN U..ORIYA VOWEL SIGN VOCALIC RR
        0x0b4d == codePoint || // Mn ORIYA SIGN VIRAMA
        0x0b56 == codePoint || // Mn ORIYA AI LENGTH MARK
        0x0b57 == codePoint || // Mc ORIYA AU LENGTH MARK
        (0x0b62 <= codePoint && codePoint <= 0x0b63) || // Mn [2] ORIYA VOWEL SIGN VOCALIC L..ORIYA VOWEL SIGN VOCALIC LL
        0x0b82 == codePoint || // Mn TAMIL SIGN ANUSVARA
        0x0bbe == codePoint || // Mc TAMIL VOWEL SIGN AA
        0x0bc0 == codePoint || // Mn TAMIL VOWEL SIGN II
        0x0bcd == codePoint || // Mn TAMIL SIGN VIRAMA
        0x0bd7 == codePoint || // Mc TAMIL AU LENGTH MARK
        0x0c00 == codePoint || // Mn TELUGU SIGN COMBINING CANDRABINDU ABOVE
        (0x0c3e <= codePoint && codePoint <= 0x0c40) || // Mn [3] TELUGU VOWEL SIGN AA..TELUGU VOWEL SIGN II
        (0x0c46 <= codePoint && codePoint <= 0x0c48) || // Mn [3] TELUGU VOWEL SIGN E..TELUGU VOWEL SIGN AI
        (0x0c4a <= codePoint && codePoint <= 0x0c4d) || // Mn [4] TELUGU VOWEL SIGN O..TELUGU SIGN VIRAMA
        (0x0c55 <= codePoint && codePoint <= 0x0c56) || // Mn [2] TELUGU LENGTH MARK..TELUGU AI LENGTH MARK
        (0x0c62 <= codePoint && codePoint <= 0x0c63) || // Mn [2] TELUGU VOWEL SIGN VOCALIC L..TELUGU VOWEL SIGN VOCALIC LL
        0x0c81 == codePoint || // Mn KANNADA SIGN CANDRABINDU
        0x0cbc == codePoint || // Mn KANNADA SIGN NUKTA
        0x0cbf == codePoint || // Mn KANNADA VOWEL SIGN I
        0x0cc2 == codePoint || // Mc KANNADA VOWEL SIGN UU
        0x0cc6 == codePoint || // Mn KANNADA VOWEL SIGN E
        (0x0ccc <= codePoint && codePoint <= 0x0ccd) || // Mn [2] KANNADA VOWEL SIGN AU..KANNADA SIGN VIRAMA
        (0x0cd5 <= codePoint && codePoint <= 0x0cd6) || // Mc [2] KANNADA LENGTH MARK..KANNADA AI LENGTH MARK
        (0x0ce2 <= codePoint && codePoint <= 0x0ce3) || // Mn [2] KANNADA VOWEL SIGN VOCALIC L..KANNADA VOWEL SIGN VOCALIC LL
        (0x0d00 <= codePoint && codePoint <= 0x0d01) || // Mn [2] MALAYALAM SIGN COMBINING ANUSVARA ABOVE..MALAYALAM SIGN CANDRABINDU
        (0x0d3b <= codePoint && codePoint <= 0x0d3c) || // Mn [2] MALAYALAM SIGN VERTICAL BAR VIRAMA..MALAYALAM SIGN CIRCULAR VIRAMA
        0x0d3e == codePoint || // Mc MALAYALAM VOWEL SIGN AA
        (0x0d41 <= codePoint && codePoint <= 0x0d44) || // Mn [4] MALAYALAM VOWEL SIGN U..MALAYALAM VOWEL SIGN VOCALIC RR
        0x0d4d == codePoint || // Mn MALAYALAM SIGN VIRAMA
        0x0d57 == codePoint || // Mc MALAYALAM AU LENGTH MARK
        (0x0d62 <= codePoint && codePoint <= 0x0d63) || // Mn [2] MALAYALAM VOWEL SIGN VOCALIC L..MALAYALAM VOWEL SIGN VOCALIC LL
        0x0dca == codePoint || // Mn SINHALA SIGN AL-LAKUNA
        0x0dcf == codePoint || // Mc SINHALA VOWEL SIGN AELA-PILLA
        (0x0dd2 <= codePoint && codePoint <= 0x0dd4) || // Mn [3] SINHALA VOWEL SIGN KETTI IS-PILLA..SINHALA VOWEL SIGN KETTI PAA-PILLA
        0x0dd6 == codePoint || // Mn SINHALA VOWEL SIGN DIGA PAA-PILLA
        0x0ddf == codePoint || // Mc SINHALA VOWEL SIGN GAYANUKITTA
        0x0e31 == codePoint || // Mn THAI CHARACTER MAI HAN-AKAT
        (0x0e34 <= codePoint && codePoint <= 0x0e3a) || // Mn [7] THAI CHARACTER SARA I..THAI CHARACTER PHINTHU
        (0x0e47 <= codePoint && codePoint <= 0x0e4e) || // Mn [8] THAI CHARACTER MAITAIKHU..THAI CHARACTER YAMAKKAN
        0x0eb1 == codePoint || // Mn LAO VOWEL SIGN MAI KAN
        (0x0eb4 <= codePoint && codePoint <= 0x0eb9) || // Mn [6] LAO VOWEL SIGN I..LAO VOWEL SIGN UU
        (0x0ebb <= codePoint && codePoint <= 0x0ebc) || // Mn [2] LAO VOWEL SIGN MAI KON..LAO SEMIVOWEL SIGN LO
        (0x0ec8 <= codePoint && codePoint <= 0x0ecd) || // Mn [6] LAO TONE MAI EK..LAO NIGGAHITA
        (0x0f18 <= codePoint && codePoint <= 0x0f19) || // Mn [2] TIBETAN ASTROLOGICAL SIGN -KHYUD PA..TIBETAN ASTROLOGICAL SIGN SDONG TSHUGS
        0x0f35 == codePoint || // Mn TIBETAN MARK NGAS BZUNG NYI ZLA
        0x0f37 == codePoint || // Mn TIBETAN MARK NGAS BZUNG SGOR RTAGS
        0x0f39 == codePoint || // Mn TIBETAN MARK TSA -PHRU
        (0x0f71 <= codePoint && codePoint <= 0x0f7e) || // Mn [14] TIBETAN VOWEL SIGN AA..TIBETAN SIGN RJES SU NGA RO
        (0x0f80 <= codePoint && codePoint <= 0x0f84) || // Mn [5] TIBETAN VOWEL SIGN REVERSED I..TIBETAN MARK HALANTA
        (0x0f86 <= codePoint && codePoint <= 0x0f87) || // Mn [2] TIBETAN SIGN LCI RTAGS..TIBETAN SIGN YANG RTAGS
        (0x0f8d <= codePoint && codePoint <= 0x0f97) || // Mn [11] TIBETAN SUBJOINED SIGN LCE TSA CAN..TIBETAN SUBJOINED LETTER JA
        (0x0f99 <= codePoint && codePoint <= 0x0fbc) || // Mn [36] TIBETAN SUBJOINED LETTER NYA..TIBETAN SUBJOINED LETTER FIXED-FORM RA
        0x0fc6 == codePoint || // Mn TIBETAN SYMBOL PADMA GDAN
        (0x102d <= codePoint && codePoint <= 0x1030) || // Mn [4] MYANMAR VOWEL SIGN I..MYANMAR VOWEL SIGN UU
        (0x1032 <= codePoint && codePoint <= 0x1037) || // Mn [6] MYANMAR VOWEL SIGN AI..MYANMAR SIGN DOT BELOW
        (0x1039 <= codePoint && codePoint <= 0x103a) || // Mn [2] MYANMAR SIGN VIRAMA..MYANMAR SIGN ASAT
        (0x103d <= codePoint && codePoint <= 0x103e) || // Mn [2] MYANMAR CONSONANT SIGN MEDIAL WA..MYANMAR CONSONANT SIGN MEDIAL HA
        (0x1058 <= codePoint && codePoint <= 0x1059) || // Mn [2] MYANMAR VOWEL SIGN VOCALIC L..MYANMAR VOWEL SIGN VOCALIC LL
        (0x105e <= codePoint && codePoint <= 0x1060) || // Mn [3] MYANMAR CONSONANT SIGN MON MEDIAL NA..MYANMAR CONSONANT SIGN MON MEDIAL LA
        (0x1071 <= codePoint && codePoint <= 0x1074) || // Mn [4] MYANMAR VOWEL SIGN GEBA KAREN I..MYANMAR VOWEL SIGN KAYAH EE
        0x1082 == codePoint || // Mn MYANMAR CONSONANT SIGN SHAN MEDIAL WA
        (0x1085 <= codePoint && codePoint <= 0x1086) || // Mn [2] MYANMAR VOWEL SIGN SHAN E ABOVE..MYANMAR VOWEL SIGN SHAN FINAL Y
        0x108d == codePoint || // Mn MYANMAR SIGN SHAN COUNCIL EMPHATIC TONE
        0x109d == codePoint || // Mn MYANMAR VOWEL SIGN AITON AI
        (0x135d <= codePoint && codePoint <= 0x135f) || // Mn [3] ETHIOPIC COMBINING GEMINATION AND VOWEL LENGTH MARK..ETHIOPIC COMBINING GEMINATION MARK
        (0x1712 <= codePoint && codePoint <= 0x1714) || // Mn [3] TAGALOG VOWEL SIGN I..TAGALOG SIGN VIRAMA
        (0x1732 <= codePoint && codePoint <= 0x1734) || // Mn [3] HANUNOO VOWEL SIGN I..HANUNOO SIGN PAMUDPOD
        (0x1752 <= codePoint && codePoint <= 0x1753) || // Mn [2] BUHID VOWEL SIGN I..BUHID VOWEL SIGN U
        (0x1772 <= codePoint && codePoint <= 0x1773) || // Mn [2] TAGBANWA VOWEL SIGN I..TAGBANWA VOWEL SIGN U
        (0x17b4 <= codePoint && codePoint <= 0x17b5) || // Mn [2] KHMER VOWEL INHERENT AQ..KHMER VOWEL INHERENT AA
        (0x17b7 <= codePoint && codePoint <= 0x17bd) || // Mn [7] KHMER VOWEL SIGN I..KHMER VOWEL SIGN UA
        0x17c6 == codePoint || // Mn KHMER SIGN NIKAHIT
        (0x17c9 <= codePoint && codePoint <= 0x17d3) || // Mn [11] KHMER SIGN MUUSIKATOAN..KHMER SIGN BATHAMASAT
        0x17dd == codePoint || // Mn KHMER SIGN ATTHACAN
        (0x180b <= codePoint && codePoint <= 0x180d) || // Mn [3] MONGOLIAN FREE VARIATION SELECTOR ONE..MONGOLIAN FREE VARIATION SELECTOR THREE
        (0x1885 <= codePoint && codePoint <= 0x1886) || // Mn [2] MONGOLIAN LETTER ALI GALI BALUDA..MONGOLIAN LETTER ALI GALI THREE BALUDA
        0x18a9 == codePoint || // Mn MONGOLIAN LETTER ALI GALI DAGALGA
        (0x1920 <= codePoint && codePoint <= 0x1922) || // Mn [3] LIMBU VOWEL SIGN A..LIMBU VOWEL SIGN U
        (0x1927 <= codePoint && codePoint <= 0x1928) || // Mn [2] LIMBU VOWEL SIGN E..LIMBU VOWEL SIGN O
        0x1932 == codePoint || // Mn LIMBU SMALL LETTER ANUSVARA
        (0x1939 <= codePoint && codePoint <= 0x193b) || // Mn [3] LIMBU SIGN MUKPHRENG..LIMBU SIGN SA-I
        (0x1a17 <= codePoint && codePoint <= 0x1a18) || // Mn [2] BUGINESE VOWEL SIGN I..BUGINESE VOWEL SIGN U
        0x1a1b == codePoint || // Mn BUGINESE VOWEL SIGN AE
        0x1a56 == codePoint || // Mn TAI THAM CONSONANT SIGN MEDIAL LA
        (0x1a58 <= codePoint && codePoint <= 0x1a5e) || // Mn [7] TAI THAM SIGN MAI KANG LAI..TAI THAM CONSONANT SIGN SA
        0x1a60 == codePoint || // Mn TAI THAM SIGN SAKOT
        0x1a62 == codePoint || // Mn TAI THAM VOWEL SIGN MAI SAT
        (0x1a65 <= codePoint && codePoint <= 0x1a6c) || // Mn [8] TAI THAM VOWEL SIGN I..TAI THAM VOWEL SIGN OA BELOW
        (0x1a73 <= codePoint && codePoint <= 0x1a7c) || // Mn [10] TAI THAM VOWEL SIGN OA ABOVE..TAI THAM SIGN KHUEN-LUE KARAN
        0x1a7f == codePoint || // Mn TAI THAM COMBINING CRYPTOGRAMMIC DOT
        (0x1ab0 <= codePoint && codePoint <= 0x1abd) || // Mn [14] COMBINING DOUBLED CIRCUMFLEX ACCENT..COMBINING PARENTHESES BELOW
        0x1abe == codePoint || // Me COMBINING PARENTHESES OVERLAY
        (0x1b00 <= codePoint && codePoint <= 0x1b03) || // Mn [4] BALINESE SIGN ULU RICEM..BALINESE SIGN SURANG
        0x1b34 == codePoint || // Mn BALINESE SIGN REREKAN
        (0x1b36 <= codePoint && codePoint <= 0x1b3a) || // Mn [5] BALINESE VOWEL SIGN ULU..BALINESE VOWEL SIGN RA REPA
        0x1b3c == codePoint || // Mn BALINESE VOWEL SIGN LA LENGA
        0x1b42 == codePoint || // Mn BALINESE VOWEL SIGN PEPET
        (0x1b6b <= codePoint && codePoint <= 0x1b73) || // Mn [9] BALINESE MUSICAL SYMBOL COMBINING TEGEH..BALINESE MUSICAL SYMBOL COMBINING GONG
        (0x1b80 <= codePoint && codePoint <= 0x1b81) || // Mn [2] SUNDANESE SIGN PANYECEK..SUNDANESE SIGN PANGLAYAR
        (0x1ba2 <= codePoint && codePoint <= 0x1ba5) || // Mn [4] SUNDANESE CONSONANT SIGN PANYAKRA..SUNDANESE VOWEL SIGN PANYUKU
        (0x1ba8 <= codePoint && codePoint <= 0x1ba9) || // Mn [2] SUNDANESE VOWEL SIGN PAMEPET..SUNDANESE VOWEL SIGN PANEULEUNG
        (0x1bab <= codePoint && codePoint <= 0x1bad) || // Mn [3] SUNDANESE SIGN VIRAMA..SUNDANESE CONSONANT SIGN PASANGAN WA
        0x1be6 == codePoint || // Mn BATAK SIGN TOMPI
        (0x1be8 <= codePoint && codePoint <= 0x1be9) || // Mn [2] BATAK VOWEL SIGN PAKPAK E..BATAK VOWEL SIGN EE
        0x1bed == codePoint || // Mn BATAK VOWEL SIGN KARO O
        (0x1bef <= codePoint && codePoint <= 0x1bf1) || // Mn [3] BATAK VOWEL SIGN U FOR SIMALUNGUN SA..BATAK CONSONANT SIGN H
        (0x1c2c <= codePoint && codePoint <= 0x1c33) || // Mn [8] LEPCHA VOWEL SIGN E..LEPCHA CONSONANT SIGN T
        (0x1c36 <= codePoint && codePoint <= 0x1c37) || // Mn [2] LEPCHA SIGN RAN..LEPCHA SIGN NUKTA
        (0x1cd0 <= codePoint && codePoint <= 0x1cd2) || // Mn [3] VEDIC TONE KARSHANA..VEDIC TONE PRENKHA
        (0x1cd4 <= codePoint && codePoint <= 0x1ce0) || // Mn [13] VEDIC SIGN YAJURVEDIC MIDLINE SVARITA..VEDIC TONE RIGVEDIC KASHMIRI INDEPENDENT SVARITA
        (0x1ce2 <= codePoint && codePoint <= 0x1ce8) || // Mn [7] VEDIC SIGN VISARGA SVARITA..VEDIC SIGN VISARGA ANUDATTA WITH TAIL
        0x1ced == codePoint || // Mn VEDIC SIGN TIRYAK
        0x1cf4 == codePoint || // Mn VEDIC TONE CANDRA ABOVE
        (0x1cf8 <= codePoint && codePoint <= 0x1cf9) || // Mn [2] VEDIC TONE RING ABOVE..VEDIC TONE DOUBLE RING ABOVE
        (0x1dc0 <= codePoint && codePoint <= 0x1df9) || // Mn [58] COMBINING DOTTED GRAVE ACCENT..COMBINING WIDE INVERTED BRIDGE BELOW
        (0x1dfb <= codePoint && codePoint <= 0x1dff) || // Mn [5] COMBINING DELETION MARK..COMBINING RIGHT ARROWHEAD AND DOWN ARROWHEAD BELOW
        0x200c == codePoint || // Cf ZERO WIDTH NON-JOINER
        (0x20d0 <= codePoint && codePoint <= 0x20dc) || // Mn [13] COMBINING LEFT HARPOON ABOVE..COMBINING FOUR DOTS ABOVE
        (0x20dd <= codePoint && codePoint <= 0x20e0) || // Me [4] COMBINING ENCLOSING CIRCLE..COMBINING ENCLOSING CIRCLE BACKSLASH
        0x20e1 == codePoint || // Mn COMBINING LEFT RIGHT ARROW ABOVE
        (0x20e2 <= codePoint && codePoint <= 0x20e4) || // Me [3] COMBINING ENCLOSING SCREEN..COMBINING ENCLOSING UPWARD POINTING TRIANGLE
        (0x20e5 <= codePoint && codePoint <= 0x20f0) || // Mn [12] COMBINING REVERSE SOLIDUS OVERLAY..COMBINING ASTERISK ABOVE
        (0x2cef <= codePoint && codePoint <= 0x2cf1) || // Mn [3] COPTIC COMBINING NI ABOVE..COPTIC COMBINING SPIRITUS LENIS
        0x2d7f == codePoint || // Mn TIFINAGH CONSONANT JOINER
        (0x2de0 <= codePoint && codePoint <= 0x2dff) || // Mn [32] COMBINING CYRILLIC LETTER BE..COMBINING CYRILLIC LETTER IOTIFIED BIG YUS
        (0x302a <= codePoint && codePoint <= 0x302d) || // Mn [4] IDEOGRAPHIC LEVEL TONE MARK..IDEOGRAPHIC ENTERING TONE MARK
        (0x302e <= codePoint && codePoint <= 0x302f) || // Mc [2] HANGUL SINGLE DOT TONE MARK..HANGUL DOUBLE DOT TONE MARK
        (0x3099 <= codePoint && codePoint <= 0x309a) || // Mn [2] COMBINING KATAKANA-HIRAGANA VOICED SOUND MARK..COMBINING KATAKANA-HIRAGANA SEMI-VOICED SOUND MARK
        0xa66f == codePoint || // Mn COMBINING CYRILLIC VZMET
        (0xa670 <= codePoint && codePoint <= 0xa672) || // Me [3] COMBINING CYRILLIC TEN MILLIONS SIGN..COMBINING CYRILLIC THOUSAND MILLIONS SIGN
        (0xa674 <= codePoint && codePoint <= 0xa67d) || // Mn [10] COMBINING CYRILLIC LETTER UKRAINIAN IE..COMBINING CYRILLIC PAYEROK
        (0xa69e <= codePoint && codePoint <= 0xa69f) || // Mn [2] COMBINING CYRILLIC LETTER EF..COMBINING CYRILLIC LETTER IOTIFIED E
        (0xa6f0 <= codePoint && codePoint <= 0xa6f1) || // Mn [2] BAMUM COMBINING MARK KOQNDON..BAMUM COMBINING MARK TUKWENTIS
        0xa802 == codePoint || // Mn SYLOTI NAGRI SIGN DVISVARA
        0xa806 == codePoint || // Mn SYLOTI NAGRI SIGN HASANTA
        0xa80b == codePoint || // Mn SYLOTI NAGRI SIGN ANUSVARA
        (0xa825 <= codePoint && codePoint <= 0xa826) || // Mn [2] SYLOTI NAGRI VOWEL SIGN U..SYLOTI NAGRI VOWEL SIGN E
        (0xa8c4 <= codePoint && codePoint <= 0xa8c5) || // Mn [2] SAURASHTRA SIGN VIRAMA..SAURASHTRA SIGN CANDRABINDU
        (0xa8e0 <= codePoint && codePoint <= 0xa8f1) || // Mn [18] COMBINING DEVANAGARI DIGIT ZERO..COMBINING DEVANAGARI SIGN AVAGRAHA
        (0xa926 <= codePoint && codePoint <= 0xa92d) || // Mn [8] KAYAH LI VOWEL UE..KAYAH LI TONE CALYA PLOPHU
        (0xa947 <= codePoint && codePoint <= 0xa951) || // Mn [11] REJANG VOWEL SIGN I..REJANG CONSONANT SIGN R
        (0xa980 <= codePoint && codePoint <= 0xa982) || // Mn [3] JAVANESE SIGN PANYANGGA..JAVANESE SIGN LAYAR
        0xa9b3 == codePoint || // Mn JAVANESE SIGN CECAK TELU
        (0xa9b6 <= codePoint && codePoint <= 0xa9b9) || // Mn [4] JAVANESE VOWEL SIGN WULU..JAVANESE VOWEL SIGN SUKU MENDUT
        0xa9bc == codePoint || // Mn JAVANESE VOWEL SIGN PEPET
        0xa9e5 == codePoint || // Mn MYANMAR SIGN SHAN SAW
        (0xaa29 <= codePoint && codePoint <= 0xaa2e) || // Mn [6] CHAM VOWEL SIGN AA..CHAM VOWEL SIGN OE
        (0xaa31 <= codePoint && codePoint <= 0xaa32) || // Mn [2] CHAM VOWEL SIGN AU..CHAM VOWEL SIGN UE
        (0xaa35 <= codePoint && codePoint <= 0xaa36) || // Mn [2] CHAM CONSONANT SIGN LA..CHAM CONSONANT SIGN WA
        0xaa43 == codePoint || // Mn CHAM CONSONANT SIGN FINAL NG
        0xaa4c == codePoint || // Mn CHAM CONSONANT SIGN FINAL M
        0xaa7c == codePoint || // Mn MYANMAR SIGN TAI LAING TONE-2
        0xaab0 == codePoint || // Mn TAI VIET MAI KANG
        (0xaab2 <= codePoint && codePoint <= 0xaab4) || // Mn [3] TAI VIET VOWEL I..TAI VIET VOWEL U
        (0xaab7 <= codePoint && codePoint <= 0xaab8) || // Mn [2] TAI VIET MAI KHIT..TAI VIET VOWEL IA
        (0xaabe <= codePoint && codePoint <= 0xaabf) || // Mn [2] TAI VIET VOWEL AM..TAI VIET TONE MAI EK
        0xaac1 == codePoint || // Mn TAI VIET TONE MAI THO
        (0xaaec <= codePoint && codePoint <= 0xaaed) || // Mn [2] MEETEI MAYEK VOWEL SIGN UU..MEETEI MAYEK VOWEL SIGN AAI
        0xaaf6 == codePoint || // Mn MEETEI MAYEK VIRAMA
        0xabe5 == codePoint || // Mn MEETEI MAYEK VOWEL SIGN ANAP
        0xabe8 == codePoint || // Mn MEETEI MAYEK VOWEL SIGN UNAP
        0xabed == codePoint || // Mn MEETEI MAYEK APUN IYEK
        0xfb1e == codePoint || // Mn HEBREW POINT JUDEO-SPANISH VARIKA
        (0xfe00 <= codePoint && codePoint <= 0xfe0f) || // Mn [16] VARIATION SELECTOR-1..VARIATION SELECTOR-16
        (0xfe20 <= codePoint && codePoint <= 0xfe2f) || // Mn [16] COMBINING LIGATURE LEFT HALF..COMBINING CYRILLIC TITLO RIGHT HALF
        (0xff9e <= codePoint && codePoint <= 0xff9f) || // Lm [2] HALFWIDTH KATAKANA VOICED SOUND MARK..HALFWIDTH KATAKANA SEMI-VOICED SOUND MARK
        0x101fd == codePoint || // Mn PHAISTOS DISC SIGN COMBINING OBLIQUE STROKE
        0x102e0 == codePoint || // Mn COPTIC EPACT THOUSANDS MARK
        (0x10376 <= codePoint && codePoint <= 0x1037a) || // Mn [5] COMBINING OLD PERMIC LETTER AN..COMBINING OLD PERMIC LETTER SII
        (0x10a01 <= codePoint && codePoint <= 0x10a03) || // Mn [3] KHAROSHTHI VOWEL SIGN I..KHAROSHTHI VOWEL SIGN VOCALIC R
        (0x10a05 <= codePoint && codePoint <= 0x10a06) || // Mn [2] KHAROSHTHI VOWEL SIGN E..KHAROSHTHI VOWEL SIGN O
        (0x10a0c <= codePoint && codePoint <= 0x10a0f) || // Mn [4] KHAROSHTHI VOWEL LENGTH MARK..KHAROSHTHI SIGN VISARGA
        (0x10a38 <= codePoint && codePoint <= 0x10a3a) || // Mn [3] KHAROSHTHI SIGN BAR ABOVE..KHAROSHTHI SIGN DOT BELOW
        0x10a3f == codePoint || // Mn KHAROSHTHI VIRAMA
        (0x10ae5 <= codePoint && codePoint <= 0x10ae6) || // Mn [2] MANICHAEAN ABBREVIATION MARK ABOVE..MANICHAEAN ABBREVIATION MARK BELOW
        0x11001 == codePoint || // Mn BRAHMI SIGN ANUSVARA
        (0x11038 <= codePoint && codePoint <= 0x11046) || // Mn [15] BRAHMI VOWEL SIGN AA..BRAHMI VIRAMA
        (0x1107f <= codePoint && codePoint <= 0x11081) || // Mn [3] BRAHMI NUMBER JOINER..KAITHI SIGN ANUSVARA
        (0x110b3 <= codePoint && codePoint <= 0x110b6) || // Mn [4] KAITHI VOWEL SIGN U..KAITHI VOWEL SIGN AI
        (0x110b9 <= codePoint && codePoint <= 0x110ba) || // Mn [2] KAITHI SIGN VIRAMA..KAITHI SIGN NUKTA
        (0x11100 <= codePoint && codePoint <= 0x11102) || // Mn [3] CHAKMA SIGN CANDRABINDU..CHAKMA SIGN VISARGA
        (0x11127 <= codePoint && codePoint <= 0x1112b) || // Mn [5] CHAKMA VOWEL SIGN A..CHAKMA VOWEL SIGN UU
        (0x1112d <= codePoint && codePoint <= 0x11134) || // Mn [8] CHAKMA VOWEL SIGN AI..CHAKMA MAAYYAA
        0x11173 == codePoint || // Mn MAHAJANI SIGN NUKTA
        (0x11180 <= codePoint && codePoint <= 0x11181) || // Mn [2] SHARADA SIGN CANDRABINDU..SHARADA SIGN ANUSVARA
        (0x111b6 <= codePoint && codePoint <= 0x111be) || // Mn [9] SHARADA VOWEL SIGN U..SHARADA VOWEL SIGN O
        (0x111ca <= codePoint && codePoint <= 0x111cc) || // Mn [3] SHARADA SIGN NUKTA..SHARADA EXTRA SHORT VOWEL MARK
        (0x1122f <= codePoint && codePoint <= 0x11231) || // Mn [3] KHOJKI VOWEL SIGN U..KHOJKI VOWEL SIGN AI
        0x11234 == codePoint || // Mn KHOJKI SIGN ANUSVARA
        (0x11236 <= codePoint && codePoint <= 0x11237) || // Mn [2] KHOJKI SIGN NUKTA..KHOJKI SIGN SHADDA
        0x1123e == codePoint || // Mn KHOJKI SIGN SUKUN
        0x112df == codePoint || // Mn KHUDAWADI SIGN ANUSVARA
        (0x112e3 <= codePoint && codePoint <= 0x112ea) || // Mn [8] KHUDAWADI VOWEL SIGN U..KHUDAWADI SIGN VIRAMA
        (0x11300 <= codePoint && codePoint <= 0x11301) || // Mn [2] GRANTHA SIGN COMBINING ANUSVARA ABOVE..GRANTHA SIGN CANDRABINDU
        0x1133c == codePoint || // Mn GRANTHA SIGN NUKTA
        0x1133e == codePoint || // Mc GRANTHA VOWEL SIGN AA
        0x11340 == codePoint || // Mn GRANTHA VOWEL SIGN II
        0x11357 == codePoint || // Mc GRANTHA AU LENGTH MARK
        (0x11366 <= codePoint && codePoint <= 0x1136c) || // Mn [7] COMBINING GRANTHA DIGIT ZERO..COMBINING GRANTHA DIGIT SIX
        (0x11370 <= codePoint && codePoint <= 0x11374) || // Mn [5] COMBINING GRANTHA LETTER A..COMBINING GRANTHA LETTER PA
        (0x11438 <= codePoint && codePoint <= 0x1143f) || // Mn [8] NEWA VOWEL SIGN U..NEWA VOWEL SIGN AI
        (0x11442 <= codePoint && codePoint <= 0x11444) || // Mn [3] NEWA SIGN VIRAMA..NEWA SIGN ANUSVARA
        0x11446 == codePoint || // Mn NEWA SIGN NUKTA
        0x114b0 == codePoint || // Mc TIRHUTA VOWEL SIGN AA
        (0x114b3 <= codePoint && codePoint <= 0x114b8) || // Mn [6] TIRHUTA VOWEL SIGN U..TIRHUTA VOWEL SIGN VOCALIC LL
        0x114ba == codePoint || // Mn TIRHUTA VOWEL SIGN SHORT E
        0x114bd == codePoint || // Mc TIRHUTA VOWEL SIGN SHORT O
        (0x114bf <= codePoint && codePoint <= 0x114c0) || // Mn [2] TIRHUTA SIGN CANDRABINDU..TIRHUTA SIGN ANUSVARA
        (0x114c2 <= codePoint && codePoint <= 0x114c3) || // Mn [2] TIRHUTA SIGN VIRAMA..TIRHUTA SIGN NUKTA
        0x115af == codePoint || // Mc SIDDHAM VOWEL SIGN AA
        (0x115b2 <= codePoint && codePoint <= 0x115b5) || // Mn [4] SIDDHAM VOWEL SIGN U..SIDDHAM VOWEL SIGN VOCALIC RR
        (0x115bc <= codePoint && codePoint <= 0x115bd) || // Mn [2] SIDDHAM SIGN CANDRABINDU..SIDDHAM SIGN ANUSVARA
        (0x115bf <= codePoint && codePoint <= 0x115c0) || // Mn [2] SIDDHAM SIGN VIRAMA..SIDDHAM SIGN NUKTA
        (0x115dc <= codePoint && codePoint <= 0x115dd) || // Mn [2] SIDDHAM VOWEL SIGN ALTERNATE U..SIDDHAM VOWEL SIGN ALTERNATE UU
        (0x11633 <= codePoint && codePoint <= 0x1163a) || // Mn [8] MODI VOWEL SIGN U..MODI VOWEL SIGN AI
        0x1163d == codePoint || // Mn MODI SIGN ANUSVARA
        (0x1163f <= codePoint && codePoint <= 0x11640) || // Mn [2] MODI SIGN VIRAMA..MODI SIGN ARDHACANDRA
        0x116ab == codePoint || // Mn TAKRI SIGN ANUSVARA
        0x116ad == codePoint || // Mn TAKRI VOWEL SIGN AA
        (0x116b0 <= codePoint && codePoint <= 0x116b5) || // Mn [6] TAKRI VOWEL SIGN U..TAKRI VOWEL SIGN AU
        0x116b7 == codePoint || // Mn TAKRI SIGN NUKTA
        (0x1171d <= codePoint && codePoint <= 0x1171f) || // Mn [3] AHOM CONSONANT SIGN MEDIAL LA..AHOM CONSONANT SIGN MEDIAL LIGATING RA
        (0x11722 <= codePoint && codePoint <= 0x11725) || // Mn [4] AHOM VOWEL SIGN I..AHOM VOWEL SIGN UU
        (0x11727 <= codePoint && codePoint <= 0x1172b) || // Mn [5] AHOM VOWEL SIGN AW..AHOM SIGN KILLER
        (0x11a01 <= codePoint && codePoint <= 0x11a06) || // Mn [6] ZANABAZAR SQUARE VOWEL SIGN I..ZANABAZAR SQUARE VOWEL SIGN O
        (0x11a09 <= codePoint && codePoint <= 0x11a0a) || // Mn [2] ZANABAZAR SQUARE VOWEL SIGN REVERSED I..ZANABAZAR SQUARE VOWEL LENGTH MARK
        (0x11a33 <= codePoint && codePoint <= 0x11a38) || // Mn [6] ZANABAZAR SQUARE FINAL CONSONANT MARK..ZANABAZAR SQUARE SIGN ANUSVARA
        (0x11a3b <= codePoint && codePoint <= 0x11a3e) || // Mn [4] ZANABAZAR SQUARE CLUSTER-FINAL LETTER YA..ZANABAZAR SQUARE CLUSTER-FINAL LETTER VA
        0x11a47 == codePoint || // Mn ZANABAZAR SQUARE SUBJOINER
        (0x11a51 <= codePoint && codePoint <= 0x11a56) || // Mn [6] SOYOMBO VOWEL SIGN I..SOYOMBO VOWEL SIGN OE
        (0x11a59 <= codePoint && codePoint <= 0x11a5b) || // Mn [3] SOYOMBO VOWEL SIGN VOCALIC R..SOYOMBO VOWEL LENGTH MARK
        (0x11a8a <= codePoint && codePoint <= 0x11a96) || // Mn [13] SOYOMBO FINAL CONSONANT SIGN G..SOYOMBO SIGN ANUSVARA
        (0x11a98 <= codePoint && codePoint <= 0x11a99) || // Mn [2] SOYOMBO GEMINATION MARK..SOYOMBO SUBJOINER
        (0x11c30 <= codePoint && codePoint <= 0x11c36) || // Mn [7] BHAIKSUKI VOWEL SIGN I..BHAIKSUKI VOWEL SIGN VOCALIC L
        (0x11c38 <= codePoint && codePoint <= 0x11c3d) || // Mn [6] BHAIKSUKI VOWEL SIGN E..BHAIKSUKI SIGN ANUSVARA
        0x11c3f == codePoint || // Mn BHAIKSUKI SIGN VIRAMA
        (0x11c92 <= codePoint && codePoint <= 0x11ca7) || // Mn [22] MARCHEN SUBJOINED LETTER KA..MARCHEN SUBJOINED LETTER ZA
        (0x11caa <= codePoint && codePoint <= 0x11cb0) || // Mn [7] MARCHEN SUBJOINED LETTER RA..MARCHEN VOWEL SIGN AA
        (0x11cb2 <= codePoint && codePoint <= 0x11cb3) || // Mn [2] MARCHEN VOWEL SIGN U..MARCHEN VOWEL SIGN E
        (0x11cb5 <= codePoint && codePoint <= 0x11cb6) || // Mn [2] MARCHEN SIGN ANUSVARA..MARCHEN SIGN CANDRABINDU
        (0x11d31 <= codePoint && codePoint <= 0x11d36) || // Mn [6] MASARAM GONDI VOWEL SIGN AA..MASARAM GONDI VOWEL SIGN VOCALIC R
        0x11d3a == codePoint || // Mn MASARAM GONDI VOWEL SIGN E
        (0x11d3c <= codePoint && codePoint <= 0x11d3d) || // Mn [2] MASARAM GONDI VOWEL SIGN AI..MASARAM GONDI VOWEL SIGN O
        (0x11d3f <= codePoint && codePoint <= 0x11d45) || // Mn [7] MASARAM GONDI VOWEL SIGN AU..MASARAM GONDI VIRAMA
        0x11d47 == codePoint || // Mn MASARAM GONDI RA-KARA
        (0x16af0 <= codePoint && codePoint <= 0x16af4) || // Mn [5] BASSA VAH COMBINING HIGH TONE..BASSA VAH COMBINING HIGH-LOW TONE
        (0x16b30 <= codePoint && codePoint <= 0x16b36) || // Mn [7] PAHAWH HMONG MARK CIM TUB..PAHAWH HMONG MARK CIM TAUM
        (0x16f8f <= codePoint && codePoint <= 0x16f92) || // Mn [4] MIAO TONE RIGHT..MIAO TONE BELOW
        (0x1bc9d <= codePoint && codePoint <= 0x1bc9e) || // Mn [2] DUPLOYAN THICK LETTER SELECTOR..DUPLOYAN DOUBLE MARK
        0x1d165 == codePoint || // Mc MUSICAL SYMBOL COMBINING STEM
        (0x1d167 <= codePoint && codePoint <= 0x1d169) || // Mn [3] MUSICAL SYMBOL COMBINING TREMOLO-1..MUSICAL SYMBOL COMBINING TREMOLO-3
        (0x1d16e <= codePoint && codePoint <= 0x1d172) || // Mc [5] MUSICAL SYMBOL COMBINING FLAG-1..MUSICAL SYMBOL COMBINING FLAG-5
        (0x1d17b <= codePoint && codePoint <= 0x1d182) || // Mn [8] MUSICAL SYMBOL COMBINING ACCENT..MUSICAL SYMBOL COMBINING LOURE
        (0x1d185 <= codePoint && codePoint <= 0x1d18b) || // Mn [7] MUSICAL SYMBOL COMBINING DOIT..MUSICAL SYMBOL COMBINING TRIPLE TONGUE
        (0x1d1aa <= codePoint && codePoint <= 0x1d1ad) || // Mn [4] MUSICAL SYMBOL COMBINING DOWN BOW..MUSICAL SYMBOL COMBINING SNAP PIZZICATO
        (0x1d242 <= codePoint && codePoint <= 0x1d244) || // Mn [3] COMBINING GREEK MUSICAL TRISEME..COMBINING GREEK MUSICAL PENTASEME
        (0x1da00 <= codePoint && codePoint <= 0x1da36) || // Mn [55] SIGNWRITING HEAD RIM..SIGNWRITING AIR SUCKING IN
        (0x1da3b <= codePoint && codePoint <= 0x1da6c) || // Mn [50] SIGNWRITING MOUTH CLOSED NEUTRAL..SIGNWRITING EXCITEMENT
        0x1da75 == codePoint || // Mn SIGNWRITING UPPER BODY TILTING FROM HIP JOINTS
        0x1da84 == codePoint || // Mn SIGNWRITING LOCATION HEAD NECK
        (0x1da9b <= codePoint && codePoint <= 0x1da9f) || // Mn [5] SIGNWRITING FILL MODIFIER-2..SIGNWRITING FILL MODIFIER-6
        (0x1daa1 <= codePoint && codePoint <= 0x1daaf) || // Mn [15] SIGNWRITING ROTATION MODIFIER-2..SIGNWRITING ROTATION MODIFIER-16
        (0x1e000 <= codePoint && codePoint <= 0x1e006) || // Mn [7] COMBINING GLAGOLITIC LETTER AZU..COMBINING GLAGOLITIC LETTER ZHIVETE
        (0x1e008 <= codePoint && codePoint <= 0x1e018) || // Mn [17] COMBINING GLAGOLITIC LETTER ZEMLJA..COMBINING GLAGOLITIC LETTER HERU
        (0x1e01b <= codePoint && codePoint <= 0x1e021) || // Mn [7] COMBINING GLAGOLITIC LETTER SHTA..COMBINING GLAGOLITIC LETTER YATI
        (0x1e023 <= codePoint && codePoint <= 0x1e024) || // Mn [2] COMBINING GLAGOLITIC LETTER YU..COMBINING GLAGOLITIC LETTER SMALL YUS
        (0x1e026 <= codePoint && codePoint <= 0x1e02a) || // Mn [5] COMBINING GLAGOLITIC LETTER YO..COMBINING GLAGOLITIC LETTER FITA
        (0x1e8d0 <= codePoint && codePoint <= 0x1e8d6) || // Mn [7] MENDE KIKAKUI COMBINING NUMBER TEENS..MENDE KIKAKUI COMBINING NUMBER MILLIONS
        (0x1e944 <= codePoint && codePoint <= 0x1e94a) || // Mn [7] ADLAM ALIF LENGTHENER..ADLAM NUKTA
        (0xe0020 <= codePoint && codePoint <= 0xe007f) || // Cf [96] TAG SPACE..CANCEL TAG
        (0xe0100 <= codePoint && codePoint <= 0xe01ef) // Mn [240] VARIATION SELECTOR-17..VARIATION SELECTOR-256
    ) {
        return GraphemeBreakProperty.Extend
    }

    if (
        0x1f1e6 <= codePoint &&
        codePoint <= 0x1f1ff // So [26] REGIONAL INDICATOR SYMBOL LETTER A..REGIONAL INDICATOR SYMBOL LETTER Z
    ) {
        return GraphemeBreakProperty.Regional_Indicator
    }

    if (
        0x0903 == codePoint || // Mc DEVANAGARI SIGN VISARGA
        0x093b == codePoint || // Mc DEVANAGARI VOWEL SIGN OOE
        (0x093e <= codePoint && codePoint <= 0x0940) || // Mc [3] DEVANAGARI VOWEL SIGN AA..DEVANAGARI VOWEL SIGN II
        (0x0949 <= codePoint && codePoint <= 0x094c) || // Mc [4] DEVANAGARI VOWEL SIGN CANDRA O..DEVANAGARI VOWEL SIGN AU
        (0x094e <= codePoint && codePoint <= 0x094f) || // Mc [2] DEVANAGARI VOWEL SIGN PRISHTHAMATRA E..DEVANAGARI VOWEL SIGN AW
        (0x0982 <= codePoint && codePoint <= 0x0983) || // Mc [2] BENGALI SIGN ANUSVARA..BENGALI SIGN VISARGA
        (0x09bf <= codePoint && codePoint <= 0x09c0) || // Mc [2] BENGALI VOWEL SIGN I..BENGALI VOWEL SIGN II
        (0x09c7 <= codePoint && codePoint <= 0x09c8) || // Mc [2] BENGALI VOWEL SIGN E..BENGALI VOWEL SIGN AI
        (0x09cb <= codePoint && codePoint <= 0x09cc) || // Mc [2] BENGALI VOWEL SIGN O..BENGALI VOWEL SIGN AU
        0x0a03 == codePoint || // Mc GURMUKHI SIGN VISARGA
        (0x0a3e <= codePoint && codePoint <= 0x0a40) || // Mc [3] GURMUKHI VOWEL SIGN AA..GURMUKHI VOWEL SIGN II
        0x0a83 == codePoint || // Mc GUJARATI SIGN VISARGA
        (0x0abe <= codePoint && codePoint <= 0x0ac0) || // Mc [3] GUJARATI VOWEL SIGN AA..GUJARATI VOWEL SIGN II
        0x0ac9 == codePoint || // Mc GUJARATI VOWEL SIGN CANDRA O
        (0x0acb <= codePoint && codePoint <= 0x0acc) || // Mc [2] GUJARATI VOWEL SIGN O..GUJARATI VOWEL SIGN AU
        (0x0b02 <= codePoint && codePoint <= 0x0b03) || // Mc [2] ORIYA SIGN ANUSVARA..ORIYA SIGN VISARGA
        0x0b40 == codePoint || // Mc ORIYA VOWEL SIGN II
        (0x0b47 <= codePoint && codePoint <= 0x0b48) || // Mc [2] ORIYA VOWEL SIGN E..ORIYA VOWEL SIGN AI
        (0x0b4b <= codePoint && codePoint <= 0x0b4c) || // Mc [2] ORIYA VOWEL SIGN O..ORIYA VOWEL SIGN AU
        0x0bbf == codePoint || // Mc TAMIL VOWEL SIGN I
        (0x0bc1 <= codePoint && codePoint <= 0x0bc2) || // Mc [2] TAMIL VOWEL SIGN U..TAMIL VOWEL SIGN UU
        (0x0bc6 <= codePoint && codePoint <= 0x0bc8) || // Mc [3] TAMIL VOWEL SIGN E..TAMIL VOWEL SIGN AI
        (0x0bca <= codePoint && codePoint <= 0x0bcc) || // Mc [3] TAMIL VOWEL SIGN O..TAMIL VOWEL SIGN AU
        (0x0c01 <= codePoint && codePoint <= 0x0c03) || // Mc [3] TELUGU SIGN CANDRABINDU..TELUGU SIGN VISARGA
        (0x0c41 <= codePoint && codePoint <= 0x0c44) || // Mc [4] TELUGU VOWEL SIGN U..TELUGU VOWEL SIGN VOCALIC RR
        (0x0c82 <= codePoint && codePoint <= 0x0c83) || // Mc [2] KANNADA SIGN ANUSVARA..KANNADA SIGN VISARGA
        0x0cbe == codePoint || // Mc KANNADA VOWEL SIGN AA
        (0x0cc0 <= codePoint && codePoint <= 0x0cc1) || // Mc [2] KANNADA VOWEL SIGN II..KANNADA VOWEL SIGN U
        (0x0cc3 <= codePoint && codePoint <= 0x0cc4) || // Mc [2] KANNADA VOWEL SIGN VOCALIC R..KANNADA VOWEL SIGN VOCALIC RR
        (0x0cc7 <= codePoint && codePoint <= 0x0cc8) || // Mc [2] KANNADA VOWEL SIGN EE..KANNADA VOWEL SIGN AI
        (0x0cca <= codePoint && codePoint <= 0x0ccb) || // Mc [2] KANNADA VOWEL SIGN O..KANNADA VOWEL SIGN OO
        (0x0d02 <= codePoint && codePoint <= 0x0d03) || // Mc [2] MALAYALAM SIGN ANUSVARA..MALAYALAM SIGN VISARGA
        (0x0d3f <= codePoint && codePoint <= 0x0d40) || // Mc [2] MALAYALAM VOWEL SIGN I..MALAYALAM VOWEL SIGN II
        (0x0d46 <= codePoint && codePoint <= 0x0d48) || // Mc [3] MALAYALAM VOWEL SIGN E..MALAYALAM VOWEL SIGN AI
        (0x0d4a <= codePoint && codePoint <= 0x0d4c) || // Mc [3] MALAYALAM VOWEL SIGN O..MALAYALAM VOWEL SIGN AU
        (0x0d82 <= codePoint && codePoint <= 0x0d83) || // Mc [2] SINHALA SIGN ANUSVARAYA..SINHALA SIGN VISARGAYA
        (0x0dd0 <= codePoint && codePoint <= 0x0dd1) || // Mc [2] SINHALA VOWEL SIGN KETTI AEDA-PILLA..SINHALA VOWEL SIGN DIGA AEDA-PILLA
        (0x0dd8 <= codePoint && codePoint <= 0x0dde) || // Mc [7] SINHALA VOWEL SIGN GAETTA-PILLA..SINHALA VOWEL SIGN KOMBUVA HAA GAYANUKITTA
        (0x0df2 <= codePoint && codePoint <= 0x0df3) || // Mc [2] SINHALA VOWEL SIGN DIGA GAETTA-PILLA..SINHALA VOWEL SIGN DIGA GAYANUKITTA
        0x0e33 == codePoint || // Lo THAI CHARACTER SARA AM
        0x0eb3 == codePoint || // Lo LAO VOWEL SIGN AM
        (0x0f3e <= codePoint && codePoint <= 0x0f3f) || // Mc [2] TIBETAN SIGN YAR TSHES..TIBETAN SIGN MAR TSHES
        0x0f7f == codePoint || // Mc TIBETAN SIGN RNAM BCAD
        0x1031 == codePoint || // Mc MYANMAR VOWEL SIGN E
        (0x103b <= codePoint && codePoint <= 0x103c) || // Mc [2] MYANMAR CONSONANT SIGN MEDIAL YA..MYANMAR CONSONANT SIGN MEDIAL RA
        (0x1056 <= codePoint && codePoint <= 0x1057) || // Mc [2] MYANMAR VOWEL SIGN VOCALIC R..MYANMAR VOWEL SIGN VOCALIC RR
        0x1084 == codePoint || // Mc MYANMAR VOWEL SIGN SHAN E
        0x17b6 == codePoint || // Mc KHMER VOWEL SIGN AA
        (0x17be <= codePoint && codePoint <= 0x17c5) || // Mc [8] KHMER VOWEL SIGN OE..KHMER VOWEL SIGN AU
        (0x17c7 <= codePoint && codePoint <= 0x17c8) || // Mc [2] KHMER SIGN REAHMUK..KHMER SIGN YUUKALEAPINTU
        (0x1923 <= codePoint && codePoint <= 0x1926) || // Mc [4] LIMBU VOWEL SIGN EE..LIMBU VOWEL SIGN AU
        (0x1929 <= codePoint && codePoint <= 0x192b) || // Mc [3] LIMBU SUBJOINED LETTER YA..LIMBU SUBJOINED LETTER WA
        (0x1930 <= codePoint && codePoint <= 0x1931) || // Mc [2] LIMBU SMALL LETTER KA..LIMBU SMALL LETTER NGA
        (0x1933 <= codePoint && codePoint <= 0x1938) || // Mc [6] LIMBU SMALL LETTER TA..LIMBU SMALL LETTER LA
        (0x1a19 <= codePoint && codePoint <= 0x1a1a) || // Mc [2] BUGINESE VOWEL SIGN E..BUGINESE VOWEL SIGN O
        0x1a55 == codePoint || // Mc TAI THAM CONSONANT SIGN MEDIAL RA
        0x1a57 == codePoint || // Mc TAI THAM CONSONANT SIGN LA TANG LAI
        (0x1a6d <= codePoint && codePoint <= 0x1a72) || // Mc [6] TAI THAM VOWEL SIGN OY..TAI THAM VOWEL SIGN THAM AI
        0x1b04 == codePoint || // Mc BALINESE SIGN BISAH
        0x1b35 == codePoint || // Mc BALINESE VOWEL SIGN TEDUNG
        0x1b3b == codePoint || // Mc BALINESE VOWEL SIGN RA REPA TEDUNG
        (0x1b3d <= codePoint && codePoint <= 0x1b41) || // Mc [5] BALINESE VOWEL SIGN LA LENGA TEDUNG..BALINESE VOWEL SIGN TALING REPA TEDUNG
        (0x1b43 <= codePoint && codePoint <= 0x1b44) || // Mc [2] BALINESE VOWEL SIGN PEPET TEDUNG..BALINESE ADEG ADEG
        0x1b82 == codePoint || // Mc SUNDANESE SIGN PANGWISAD
        0x1ba1 == codePoint || // Mc SUNDANESE CONSONANT SIGN PAMINGKAL
        (0x1ba6 <= codePoint && codePoint <= 0x1ba7) || // Mc [2] SUNDANESE VOWEL SIGN PANAELAENG..SUNDANESE VOWEL SIGN PANOLONG
        0x1baa == codePoint || // Mc SUNDANESE SIGN PAMAAEH
        0x1be7 == codePoint || // Mc BATAK VOWEL SIGN E
        (0x1bea <= codePoint && codePoint <= 0x1bec) || // Mc [3] BATAK VOWEL SIGN I..BATAK VOWEL SIGN O
        0x1bee == codePoint || // Mc BATAK VOWEL SIGN U
        (0x1bf2 <= codePoint && codePoint <= 0x1bf3) || // Mc [2] BATAK PANGOLAT..BATAK PANONGONAN
        (0x1c24 <= codePoint && codePoint <= 0x1c2b) || // Mc [8] LEPCHA SUBJOINED LETTER YA..LEPCHA VOWEL SIGN UU
        (0x1c34 <= codePoint && codePoint <= 0x1c35) || // Mc [2] LEPCHA CONSONANT SIGN NYIN-DO..LEPCHA CONSONANT SIGN KANG
        0x1ce1 == codePoint || // Mc VEDIC TONE ATHARVAVEDIC INDEPENDENT SVARITA
        (0x1cf2 <= codePoint && codePoint <= 0x1cf3) || // Mc [2] VEDIC SIGN ARDHAVISARGA..VEDIC SIGN ROTATED ARDHAVISARGA
        0x1cf7 == codePoint || // Mc VEDIC SIGN ATIKRAMA
        (0xa823 <= codePoint && codePoint <= 0xa824) || // Mc [2] SYLOTI NAGRI VOWEL SIGN A..SYLOTI NAGRI VOWEL SIGN I
        0xa827 == codePoint || // Mc SYLOTI NAGRI VOWEL SIGN OO
        (0xa880 <= codePoint && codePoint <= 0xa881) || // Mc [2] SAURASHTRA SIGN ANUSVARA..SAURASHTRA SIGN VISARGA
        (0xa8b4 <= codePoint && codePoint <= 0xa8c3) || // Mc [16] SAURASHTRA CONSONANT SIGN HAARU..SAURASHTRA VOWEL SIGN AU
        (0xa952 <= codePoint && codePoint <= 0xa953) || // Mc [2] REJANG CONSONANT SIGN H..REJANG VIRAMA
        0xa983 == codePoint || // Mc JAVANESE SIGN WIGNYAN
        (0xa9b4 <= codePoint && codePoint <= 0xa9b5) || // Mc [2] JAVANESE VOWEL SIGN TARUNG..JAVANESE VOWEL SIGN TOLONG
        (0xa9ba <= codePoint && codePoint <= 0xa9bb) || // Mc [2] JAVANESE VOWEL SIGN TALING..JAVANESE VOWEL SIGN DIRGA MURE
        (0xa9bd <= codePoint && codePoint <= 0xa9c0) || // Mc [4] JAVANESE CONSONANT SIGN KERET..JAVANESE PANGKON
        (0xaa2f <= codePoint && codePoint <= 0xaa30) || // Mc [2] CHAM VOWEL SIGN O..CHAM VOWEL SIGN AI
        (0xaa33 <= codePoint && codePoint <= 0xaa34) || // Mc [2] CHAM CONSONANT SIGN YA..CHAM CONSONANT SIGN RA
        0xaa4d == codePoint || // Mc CHAM CONSONANT SIGN FINAL H
        0xaaeb == codePoint || // Mc MEETEI MAYEK VOWEL SIGN II
        (0xaaee <= codePoint && codePoint <= 0xaaef) || // Mc [2] MEETEI MAYEK VOWEL SIGN AU..MEETEI MAYEK VOWEL SIGN AAU
        0xaaf5 == codePoint || // Mc MEETEI MAYEK VOWEL SIGN VISARGA
        (0xabe3 <= codePoint && codePoint <= 0xabe4) || // Mc [2] MEETEI MAYEK VOWEL SIGN ONAP..MEETEI MAYEK VOWEL SIGN INAP
        (0xabe6 <= codePoint && codePoint <= 0xabe7) || // Mc [2] MEETEI MAYEK VOWEL SIGN YENAP..MEETEI MAYEK VOWEL SIGN SOUNAP
        (0xabe9 <= codePoint && codePoint <= 0xabea) || // Mc [2] MEETEI MAYEK VOWEL SIGN CHEINAP..MEETEI MAYEK VOWEL SIGN NUNG
        0xabec == codePoint || // Mc MEETEI MAYEK LUM IYEK
        0x11000 == codePoint || // Mc BRAHMI SIGN CANDRABINDU
        0x11002 == codePoint || // Mc BRAHMI SIGN VISARGA
        0x11082 == codePoint || // Mc KAITHI SIGN VISARGA
        (0x110b0 <= codePoint && codePoint <= 0x110b2) || // Mc [3] KAITHI VOWEL SIGN AA..KAITHI VOWEL SIGN II
        (0x110b7 <= codePoint && codePoint <= 0x110b8) || // Mc [2] KAITHI VOWEL SIGN O..KAITHI VOWEL SIGN AU
        0x1112c == codePoint || // Mc CHAKMA VOWEL SIGN E
        0x11182 == codePoint || // Mc SHARADA SIGN VISARGA
        (0x111b3 <= codePoint && codePoint <= 0x111b5) || // Mc [3] SHARADA VOWEL SIGN AA..SHARADA VOWEL SIGN II
        (0x111bf <= codePoint && codePoint <= 0x111c0) || // Mc [2] SHARADA VOWEL SIGN AU..SHARADA SIGN VIRAMA
        (0x1122c <= codePoint && codePoint <= 0x1122e) || // Mc [3] KHOJKI VOWEL SIGN AA..KHOJKI VOWEL SIGN II
        (0x11232 <= codePoint && codePoint <= 0x11233) || // Mc [2] KHOJKI VOWEL SIGN O..KHOJKI VOWEL SIGN AU
        0x11235 == codePoint || // Mc KHOJKI SIGN VIRAMA
        (0x112e0 <= codePoint && codePoint <= 0x112e2) || // Mc [3] KHUDAWADI VOWEL SIGN AA..KHUDAWADI VOWEL SIGN II
        (0x11302 <= codePoint && codePoint <= 0x11303) || // Mc [2] GRANTHA SIGN ANUSVARA..GRANTHA SIGN VISARGA
        0x1133f == codePoint || // Mc GRANTHA VOWEL SIGN I
        (0x11341 <= codePoint && codePoint <= 0x11344) || // Mc [4] GRANTHA VOWEL SIGN U..GRANTHA VOWEL SIGN VOCALIC RR
        (0x11347 <= codePoint && codePoint <= 0x11348) || // Mc [2] GRANTHA VOWEL SIGN EE..GRANTHA VOWEL SIGN AI
        (0x1134b <= codePoint && codePoint <= 0x1134d) || // Mc [3] GRANTHA VOWEL SIGN OO..GRANTHA SIGN VIRAMA
        (0x11362 <= codePoint && codePoint <= 0x11363) || // Mc [2] GRANTHA VOWEL SIGN VOCALIC L..GRANTHA VOWEL SIGN VOCALIC LL
        (0x11435 <= codePoint && codePoint <= 0x11437) || // Mc [3] NEWA VOWEL SIGN AA..NEWA VOWEL SIGN II
        (0x11440 <= codePoint && codePoint <= 0x11441) || // Mc [2] NEWA VOWEL SIGN O..NEWA VOWEL SIGN AU
        0x11445 == codePoint || // Mc NEWA SIGN VISARGA
        (0x114b1 <= codePoint && codePoint <= 0x114b2) || // Mc [2] TIRHUTA VOWEL SIGN I..TIRHUTA VOWEL SIGN II
        0x114b9 == codePoint || // Mc TIRHUTA VOWEL SIGN E
        (0x114bb <= codePoint && codePoint <= 0x114bc) || // Mc [2] TIRHUTA VOWEL SIGN AI..TIRHUTA VOWEL SIGN O
        0x114be == codePoint || // Mc TIRHUTA VOWEL SIGN AU
        0x114c1 == codePoint || // Mc TIRHUTA SIGN VISARGA
        (0x115b0 <= codePoint && codePoint <= 0x115b1) || // Mc [2] SIDDHAM VOWEL SIGN I..SIDDHAM VOWEL SIGN II
        (0x115b8 <= codePoint && codePoint <= 0x115bb) || // Mc [4] SIDDHAM VOWEL SIGN E..SIDDHAM VOWEL SIGN AU
        0x115be == codePoint || // Mc SIDDHAM SIGN VISARGA
        (0x11630 <= codePoint && codePoint <= 0x11632) || // Mc [3] MODI VOWEL SIGN AA..MODI VOWEL SIGN II
        (0x1163b <= codePoint && codePoint <= 0x1163c) || // Mc [2] MODI VOWEL SIGN O..MODI VOWEL SIGN AU
        0x1163e == codePoint || // Mc MODI SIGN VISARGA
        0x116ac == codePoint || // Mc TAKRI SIGN VISARGA
        (0x116ae <= codePoint && codePoint <= 0x116af) || // Mc [2] TAKRI VOWEL SIGN I..TAKRI VOWEL SIGN II
        0x116b6 == codePoint || // Mc TAKRI SIGN VIRAMA
        (0x11720 <= codePoint && codePoint <= 0x11721) || // Mc [2] AHOM VOWEL SIGN A..AHOM VOWEL SIGN AA
        0x11726 == codePoint || // Mc AHOM VOWEL SIGN E
        (0x11a07 <= codePoint && codePoint <= 0x11a08) || // Mc [2] ZANABAZAR SQUARE VOWEL SIGN AI..ZANABAZAR SQUARE VOWEL SIGN AU
        0x11a39 == codePoint || // Mc ZANABAZAR SQUARE SIGN VISARGA
        (0x11a57 <= codePoint && codePoint <= 0x11a58) || // Mc [2] SOYOMBO VOWEL SIGN AI..SOYOMBO VOWEL SIGN AU
        0x11a97 == codePoint || // Mc SOYOMBO SIGN VISARGA
        0x11c2f == codePoint || // Mc BHAIKSUKI VOWEL SIGN AA
        0x11c3e == codePoint || // Mc BHAIKSUKI SIGN VISARGA
        0x11ca9 == codePoint || // Mc MARCHEN SUBJOINED LETTER YA
        0x11cb1 == codePoint || // Mc MARCHEN VOWEL SIGN I
        0x11cb4 == codePoint || // Mc MARCHEN VOWEL SIGN O
        (0x16f51 <= codePoint && codePoint <= 0x16f7e) || // Mc [46] MIAO SIGN ASPIRATION..MIAO VOWEL SIGN NG
        0x1d166 == codePoint || // Mc MUSICAL SYMBOL COMBINING SPRECHGESANG STEM
        0x1d16d == codePoint // Mc MUSICAL SYMBOL COMBINING AUGMENTATION DOT
    ) {
        return GraphemeBreakProperty.SpacingMark
    }

    if (
        (0x1100 <= codePoint && codePoint <= 0x115f) || // Lo [96] HANGUL CHOSEONG KIYEOK..HANGUL CHOSEONG FILLER
        (0xa960 <= codePoint && codePoint <= 0xa97c) // Lo [29] HANGUL CHOSEONG TIKEUT-MIEUM..HANGUL CHOSEONG SSANGYEORINHIEUH
    ) {
        return GraphemeBreakProperty.L
    }

    if (
        (0x1160 <= codePoint && codePoint <= 0x11a7) || // Lo [72] HANGUL JUNGSEONG FILLER..HANGUL JUNGSEONG O-YAE
        (0xd7b0 <= codePoint && codePoint <= 0xd7c6) // Lo [23] HANGUL JUNGSEONG O-YEO..HANGUL JUNGSEONG ARAEA-E
    ) {
        return GraphemeBreakProperty.V
    }

    if (
        (0x11a8 <= codePoint && codePoint <= 0x11ff) || // Lo [88] HANGUL JONGSEONG KIYEOK..HANGUL JONGSEONG SSANGNIEUN
        (0xd7cb <= codePoint && codePoint <= 0xd7fb) // Lo [49] HANGUL JONGSEONG NIEUN-RIEUL..HANGUL JONGSEONG PHIEUPH-THIEUTH
    ) {
        return GraphemeBreakProperty.T
    }

    if (
        0xac00 == codePoint || // Lo HANGUL SYLLABLE GA
        0xac1c == codePoint || // Lo HANGUL SYLLABLE GAE
        0xac38 == codePoint || // Lo HANGUL SYLLABLE GYA
        0xac54 == codePoint || // Lo HANGUL SYLLABLE GYAE
        0xac70 == codePoint || // Lo HANGUL SYLLABLE GEO
        0xac8c == codePoint || // Lo HANGUL SYLLABLE GE
        0xaca8 == codePoint || // Lo HANGUL SYLLABLE GYEO
        0xacc4 == codePoint || // Lo HANGUL SYLLABLE GYE
        0xace0 == codePoint || // Lo HANGUL SYLLABLE GO
        0xacfc == codePoint || // Lo HANGUL SYLLABLE GWA
        0xad18 == codePoint || // Lo HANGUL SYLLABLE GWAE
        0xad34 == codePoint || // Lo HANGUL SYLLABLE GOE
        0xad50 == codePoint || // Lo HANGUL SYLLABLE GYO
        0xad6c == codePoint || // Lo HANGUL SYLLABLE GU
        0xad88 == codePoint || // Lo HANGUL SYLLABLE GWEO
        0xada4 == codePoint || // Lo HANGUL SYLLABLE GWE
        0xadc0 == codePoint || // Lo HANGUL SYLLABLE GWI
        0xaddc == codePoint || // Lo HANGUL SYLLABLE GYU
        0xadf8 == codePoint || // Lo HANGUL SYLLABLE GEU
        0xae14 == codePoint || // Lo HANGUL SYLLABLE GYI
        0xae30 == codePoint || // Lo HANGUL SYLLABLE GI
        0xae4c == codePoint || // Lo HANGUL SYLLABLE GGA
        0xae68 == codePoint || // Lo HANGUL SYLLABLE GGAE
        0xae84 == codePoint || // Lo HANGUL SYLLABLE GGYA
        0xaea0 == codePoint || // Lo HANGUL SYLLABLE GGYAE
        0xaebc == codePoint || // Lo HANGUL SYLLABLE GGEO
        0xaed8 == codePoint || // Lo HANGUL SYLLABLE GGE
        0xaef4 == codePoint || // Lo HANGUL SYLLABLE GGYEO
        0xaf10 == codePoint || // Lo HANGUL SYLLABLE GGYE
        0xaf2c == codePoint || // Lo HANGUL SYLLABLE GGO
        0xaf48 == codePoint || // Lo HANGUL SYLLABLE GGWA
        0xaf64 == codePoint || // Lo HANGUL SYLLABLE GGWAE
        0xaf80 == codePoint || // Lo HANGUL SYLLABLE GGOE
        0xaf9c == codePoint || // Lo HANGUL SYLLABLE GGYO
        0xafb8 == codePoint || // Lo HANGUL SYLLABLE GGU
        0xafd4 == codePoint || // Lo HANGUL SYLLABLE GGWEO
        0xaff0 == codePoint || // Lo HANGUL SYLLABLE GGWE
        0xb00c == codePoint || // Lo HANGUL SYLLABLE GGWI
        0xb028 == codePoint || // Lo HANGUL SYLLABLE GGYU
        0xb044 == codePoint || // Lo HANGUL SYLLABLE GGEU
        0xb060 == codePoint || // Lo HANGUL SYLLABLE GGYI
        0xb07c == codePoint || // Lo HANGUL SYLLABLE GGI
        0xb098 == codePoint || // Lo HANGUL SYLLABLE NA
        0xb0b4 == codePoint || // Lo HANGUL SYLLABLE NAE
        0xb0d0 == codePoint || // Lo HANGUL SYLLABLE NYA
        0xb0ec == codePoint || // Lo HANGUL SYLLABLE NYAE
        0xb108 == codePoint || // Lo HANGUL SYLLABLE NEO
        0xb124 == codePoint || // Lo HANGUL SYLLABLE NE
        0xb140 == codePoint || // Lo HANGUL SYLLABLE NYEO
        0xb15c == codePoint || // Lo HANGUL SYLLABLE NYE
        0xb178 == codePoint || // Lo HANGUL SYLLABLE NO
        0xb194 == codePoint || // Lo HANGUL SYLLABLE NWA
        0xb1b0 == codePoint || // Lo HANGUL SYLLABLE NWAE
        0xb1cc == codePoint || // Lo HANGUL SYLLABLE NOE
        0xb1e8 == codePoint || // Lo HANGUL SYLLABLE NYO
        0xb204 == codePoint || // Lo HANGUL SYLLABLE NU
        0xb220 == codePoint || // Lo HANGUL SYLLABLE NWEO
        0xb23c == codePoint || // Lo HANGUL SYLLABLE NWE
        0xb258 == codePoint || // Lo HANGUL SYLLABLE NWI
        0xb274 == codePoint || // Lo HANGUL SYLLABLE NYU
        0xb290 == codePoint || // Lo HANGUL SYLLABLE NEU
        0xb2ac == codePoint || // Lo HANGUL SYLLABLE NYI
        0xb2c8 == codePoint || // Lo HANGUL SYLLABLE NI
        0xb2e4 == codePoint || // Lo HANGUL SYLLABLE DA
        0xb300 == codePoint || // Lo HANGUL SYLLABLE DAE
        0xb31c == codePoint || // Lo HANGUL SYLLABLE DYA
        0xb338 == codePoint || // Lo HANGUL SYLLABLE DYAE
        0xb354 == codePoint || // Lo HANGUL SYLLABLE DEO
        0xb370 == codePoint || // Lo HANGUL SYLLABLE DE
        0xb38c == codePoint || // Lo HANGUL SYLLABLE DYEO
        0xb3a8 == codePoint || // Lo HANGUL SYLLABLE DYE
        0xb3c4 == codePoint || // Lo HANGUL SYLLABLE DO
        0xb3e0 == codePoint || // Lo HANGUL SYLLABLE DWA
        0xb3fc == codePoint || // Lo HANGUL SYLLABLE DWAE
        0xb418 == codePoint || // Lo HANGUL SYLLABLE DOE
        0xb434 == codePoint || // Lo HANGUL SYLLABLE DYO
        0xb450 == codePoint || // Lo HANGUL SYLLABLE DU
        0xb46c == codePoint || // Lo HANGUL SYLLABLE DWEO
        0xb488 == codePoint || // Lo HANGUL SYLLABLE DWE
        0xb4a4 == codePoint || // Lo HANGUL SYLLABLE DWI
        0xb4c0 == codePoint || // Lo HANGUL SYLLABLE DYU
        0xb4dc == codePoint || // Lo HANGUL SYLLABLE DEU
        0xb4f8 == codePoint || // Lo HANGUL SYLLABLE DYI
        0xb514 == codePoint || // Lo HANGUL SYLLABLE DI
        0xb530 == codePoint || // Lo HANGUL SYLLABLE DDA
        0xb54c == codePoint || // Lo HANGUL SYLLABLE DDAE
        0xb568 == codePoint || // Lo HANGUL SYLLABLE DDYA
        0xb584 == codePoint || // Lo HANGUL SYLLABLE DDYAE
        0xb5a0 == codePoint || // Lo HANGUL SYLLABLE DDEO
        0xb5bc == codePoint || // Lo HANGUL SYLLABLE DDE
        0xb5d8 == codePoint || // Lo HANGUL SYLLABLE DDYEO
        0xb5f4 == codePoint || // Lo HANGUL SYLLABLE DDYE
        0xb610 == codePoint || // Lo HANGUL SYLLABLE DDO
        0xb62c == codePoint || // Lo HANGUL SYLLABLE DDWA
        0xb648 == codePoint || // Lo HANGUL SYLLABLE DDWAE
        0xb664 == codePoint || // Lo HANGUL SYLLABLE DDOE
        0xb680 == codePoint || // Lo HANGUL SYLLABLE DDYO
        0xb69c == codePoint || // Lo HANGUL SYLLABLE DDU
        0xb6b8 == codePoint || // Lo HANGUL SYLLABLE DDWEO
        0xb6d4 == codePoint || // Lo HANGUL SYLLABLE DDWE
        0xb6f0 == codePoint || // Lo HANGUL SYLLABLE DDWI
        0xb70c == codePoint || // Lo HANGUL SYLLABLE DDYU
        0xb728 == codePoint || // Lo HANGUL SYLLABLE DDEU
        0xb744 == codePoint || // Lo HANGUL SYLLABLE DDYI
        0xb760 == codePoint || // Lo HANGUL SYLLABLE DDI
        0xb77c == codePoint || // Lo HANGUL SYLLABLE RA
        0xb798 == codePoint || // Lo HANGUL SYLLABLE RAE
        0xb7b4 == codePoint || // Lo HANGUL SYLLABLE RYA
        0xb7d0 == codePoint || // Lo HANGUL SYLLABLE RYAE
        0xb7ec == codePoint || // Lo HANGUL SYLLABLE REO
        0xb808 == codePoint || // Lo HANGUL SYLLABLE RE
        0xb824 == codePoint || // Lo HANGUL SYLLABLE RYEO
        0xb840 == codePoint || // Lo HANGUL SYLLABLE RYE
        0xb85c == codePoint || // Lo HANGUL SYLLABLE RO
        0xb878 == codePoint || // Lo HANGUL SYLLABLE RWA
        0xb894 == codePoint || // Lo HANGUL SYLLABLE RWAE
        0xb8b0 == codePoint || // Lo HANGUL SYLLABLE ROE
        0xb8cc == codePoint || // Lo HANGUL SYLLABLE RYO
        0xb8e8 == codePoint || // Lo HANGUL SYLLABLE RU
        0xb904 == codePoint || // Lo HANGUL SYLLABLE RWEO
        0xb920 == codePoint || // Lo HANGUL SYLLABLE RWE
        0xb93c == codePoint || // Lo HANGUL SYLLABLE RWI
        0xb958 == codePoint || // Lo HANGUL SYLLABLE RYU
        0xb974 == codePoint || // Lo HANGUL SYLLABLE REU
        0xb990 == codePoint || // Lo HANGUL SYLLABLE RYI
        0xb9ac == codePoint || // Lo HANGUL SYLLABLE RI
        0xb9c8 == codePoint || // Lo HANGUL SYLLABLE MA
        0xb9e4 == codePoint || // Lo HANGUL SYLLABLE MAE
        0xba00 == codePoint || // Lo HANGUL SYLLABLE MYA
        0xba1c == codePoint || // Lo HANGUL SYLLABLE MYAE
        0xba38 == codePoint || // Lo HANGUL SYLLABLE MEO
        0xba54 == codePoint || // Lo HANGUL SYLLABLE ME
        0xba70 == codePoint || // Lo HANGUL SYLLABLE MYEO
        0xba8c == codePoint || // Lo HANGUL SYLLABLE MYE
        0xbaa8 == codePoint || // Lo HANGUL SYLLABLE MO
        0xbac4 == codePoint || // Lo HANGUL SYLLABLE MWA
        0xbae0 == codePoint || // Lo HANGUL SYLLABLE MWAE
        0xbafc == codePoint || // Lo HANGUL SYLLABLE MOE
        0xbb18 == codePoint || // Lo HANGUL SYLLABLE MYO
        0xbb34 == codePoint || // Lo HANGUL SYLLABLE MU
        0xbb50 == codePoint || // Lo HANGUL SYLLABLE MWEO
        0xbb6c == codePoint || // Lo HANGUL SYLLABLE MWE
        0xbb88 == codePoint || // Lo HANGUL SYLLABLE MWI
        0xbba4 == codePoint || // Lo HANGUL SYLLABLE MYU
        0xbbc0 == codePoint || // Lo HANGUL SYLLABLE MEU
        0xbbdc == codePoint || // Lo HANGUL SYLLABLE MYI
        0xbbf8 == codePoint || // Lo HANGUL SYLLABLE MI
        0xbc14 == codePoint || // Lo HANGUL SYLLABLE BA
        0xbc30 == codePoint || // Lo HANGUL SYLLABLE BAE
        0xbc4c == codePoint || // Lo HANGUL SYLLABLE BYA
        0xbc68 == codePoint || // Lo HANGUL SYLLABLE BYAE
        0xbc84 == codePoint || // Lo HANGUL SYLLABLE BEO
        0xbca0 == codePoint || // Lo HANGUL SYLLABLE BE
        0xbcbc == codePoint || // Lo HANGUL SYLLABLE BYEO
        0xbcd8 == codePoint || // Lo HANGUL SYLLABLE BYE
        0xbcf4 == codePoint || // Lo HANGUL SYLLABLE BO
        0xbd10 == codePoint || // Lo HANGUL SYLLABLE BWA
        0xbd2c == codePoint || // Lo HANGUL SYLLABLE BWAE
        0xbd48 == codePoint || // Lo HANGUL SYLLABLE BOE
        0xbd64 == codePoint || // Lo HANGUL SYLLABLE BYO
        0xbd80 == codePoint || // Lo HANGUL SYLLABLE BU
        0xbd9c == codePoint || // Lo HANGUL SYLLABLE BWEO
        0xbdb8 == codePoint || // Lo HANGUL SYLLABLE BWE
        0xbdd4 == codePoint || // Lo HANGUL SYLLABLE BWI
        0xbdf0 == codePoint || // Lo HANGUL SYLLABLE BYU
        0xbe0c == codePoint || // Lo HANGUL SYLLABLE BEU
        0xbe28 == codePoint || // Lo HANGUL SYLLABLE BYI
        0xbe44 == codePoint || // Lo HANGUL SYLLABLE BI
        0xbe60 == codePoint || // Lo HANGUL SYLLABLE BBA
        0xbe7c == codePoint || // Lo HANGUL SYLLABLE BBAE
        0xbe98 == codePoint || // Lo HANGUL SYLLABLE BBYA
        0xbeb4 == codePoint || // Lo HANGUL SYLLABLE BBYAE
        0xbed0 == codePoint || // Lo HANGUL SYLLABLE BBEO
        0xbeec == codePoint || // Lo HANGUL SYLLABLE BBE
        0xbf08 == codePoint || // Lo HANGUL SYLLABLE BBYEO
        0xbf24 == codePoint || // Lo HANGUL SYLLABLE BBYE
        0xbf40 == codePoint || // Lo HANGUL SYLLABLE BBO
        0xbf5c == codePoint || // Lo HANGUL SYLLABLE BBWA
        0xbf78 == codePoint || // Lo HANGUL SYLLABLE BBWAE
        0xbf94 == codePoint || // Lo HANGUL SYLLABLE BBOE
        0xbfb0 == codePoint || // Lo HANGUL SYLLABLE BBYO
        0xbfcc == codePoint || // Lo HANGUL SYLLABLE BBU
        0xbfe8 == codePoint || // Lo HANGUL SYLLABLE BBWEO
        0xc004 == codePoint || // Lo HANGUL SYLLABLE BBWE
        0xc020 == codePoint || // Lo HANGUL SYLLABLE BBWI
        0xc03c == codePoint || // Lo HANGUL SYLLABLE BBYU
        0xc058 == codePoint || // Lo HANGUL SYLLABLE BBEU
        0xc074 == codePoint || // Lo HANGUL SYLLABLE BBYI
        0xc090 == codePoint || // Lo HANGUL SYLLABLE BBI
        0xc0ac == codePoint || // Lo HANGUL SYLLABLE SA
        0xc0c8 == codePoint || // Lo HANGUL SYLLABLE SAE
        0xc0e4 == codePoint || // Lo HANGUL SYLLABLE SYA
        0xc100 == codePoint || // Lo HANGUL SYLLABLE SYAE
        0xc11c == codePoint || // Lo HANGUL SYLLABLE SEO
        0xc138 == codePoint || // Lo HANGUL SYLLABLE SE
        0xc154 == codePoint || // Lo HANGUL SYLLABLE SYEO
        0xc170 == codePoint || // Lo HANGUL SYLLABLE SYE
        0xc18c == codePoint || // Lo HANGUL SYLLABLE SO
        0xc1a8 == codePoint || // Lo HANGUL SYLLABLE SWA
        0xc1c4 == codePoint || // Lo HANGUL SYLLABLE SWAE
        0xc1e0 == codePoint || // Lo HANGUL SYLLABLE SOE
        0xc1fc == codePoint || // Lo HANGUL SYLLABLE SYO
        0xc218 == codePoint || // Lo HANGUL SYLLABLE SU
        0xc234 == codePoint || // Lo HANGUL SYLLABLE SWEO
        0xc250 == codePoint || // Lo HANGUL SYLLABLE SWE
        0xc26c == codePoint || // Lo HANGUL SYLLABLE SWI
        0xc288 == codePoint || // Lo HANGUL SYLLABLE SYU
        0xc2a4 == codePoint || // Lo HANGUL SYLLABLE SEU
        0xc2c0 == codePoint || // Lo HANGUL SYLLABLE SYI
        0xc2dc == codePoint || // Lo HANGUL SYLLABLE SI
        0xc2f8 == codePoint || // Lo HANGUL SYLLABLE SSA
        0xc314 == codePoint || // Lo HANGUL SYLLABLE SSAE
        0xc330 == codePoint || // Lo HANGUL SYLLABLE SSYA
        0xc34c == codePoint || // Lo HANGUL SYLLABLE SSYAE
        0xc368 == codePoint || // Lo HANGUL SYLLABLE SSEO
        0xc384 == codePoint || // Lo HANGUL SYLLABLE SSE
        0xc3a0 == codePoint || // Lo HANGUL SYLLABLE SSYEO
        0xc3bc == codePoint || // Lo HANGUL SYLLABLE SSYE
        0xc3d8 == codePoint || // Lo HANGUL SYLLABLE SSO
        0xc3f4 == codePoint || // Lo HANGUL SYLLABLE SSWA
        0xc410 == codePoint || // Lo HANGUL SYLLABLE SSWAE
        0xc42c == codePoint || // Lo HANGUL SYLLABLE SSOE
        0xc448 == codePoint || // Lo HANGUL SYLLABLE SSYO
        0xc464 == codePoint || // Lo HANGUL SYLLABLE SSU
        0xc480 == codePoint || // Lo HANGUL SYLLABLE SSWEO
        0xc49c == codePoint || // Lo HANGUL SYLLABLE SSWE
        0xc4b8 == codePoint || // Lo HANGUL SYLLABLE SSWI
        0xc4d4 == codePoint || // Lo HANGUL SYLLABLE SSYU
        0xc4f0 == codePoint || // Lo HANGUL SYLLABLE SSEU
        0xc50c == codePoint || // Lo HANGUL SYLLABLE SSYI
        0xc528 == codePoint || // Lo HANGUL SYLLABLE SSI
        0xc544 == codePoint || // Lo HANGUL SYLLABLE A
        0xc560 == codePoint || // Lo HANGUL SYLLABLE AE
        0xc57c == codePoint || // Lo HANGUL SYLLABLE YA
        0xc598 == codePoint || // Lo HANGUL SYLLABLE YAE
        0xc5b4 == codePoint || // Lo HANGUL SYLLABLE EO
        0xc5d0 == codePoint || // Lo HANGUL SYLLABLE E
        0xc5ec == codePoint || // Lo HANGUL SYLLABLE YEO
        0xc608 == codePoint || // Lo HANGUL SYLLABLE YE
        0xc624 == codePoint || // Lo HANGUL SYLLABLE O
        0xc640 == codePoint || // Lo HANGUL SYLLABLE WA
        0xc65c == codePoint || // Lo HANGUL SYLLABLE WAE
        0xc678 == codePoint || // Lo HANGUL SYLLABLE OE
        0xc694 == codePoint || // Lo HANGUL SYLLABLE YO
        0xc6b0 == codePoint || // Lo HANGUL SYLLABLE U
        0xc6cc == codePoint || // Lo HANGUL SYLLABLE WEO
        0xc6e8 == codePoint || // Lo HANGUL SYLLABLE WE
        0xc704 == codePoint || // Lo HANGUL SYLLABLE WI
        0xc720 == codePoint || // Lo HANGUL SYLLABLE YU
        0xc73c == codePoint || // Lo HANGUL SYLLABLE EU
        0xc758 == codePoint || // Lo HANGUL SYLLABLE YI
        0xc774 == codePoint || // Lo HANGUL SYLLABLE I
        0xc790 == codePoint || // Lo HANGUL SYLLABLE JA
        0xc7ac == codePoint || // Lo HANGUL SYLLABLE JAE
        0xc7c8 == codePoint || // Lo HANGUL SYLLABLE JYA
        0xc7e4 == codePoint || // Lo HANGUL SYLLABLE JYAE
        0xc800 == codePoint || // Lo HANGUL SYLLABLE JEO
        0xc81c == codePoint || // Lo HANGUL SYLLABLE JE
        0xc838 == codePoint || // Lo HANGUL SYLLABLE JYEO
        0xc854 == codePoint || // Lo HANGUL SYLLABLE JYE
        0xc870 == codePoint || // Lo HANGUL SYLLABLE JO
        0xc88c == codePoint || // Lo HANGUL SYLLABLE JWA
        0xc8a8 == codePoint || // Lo HANGUL SYLLABLE JWAE
        0xc8c4 == codePoint || // Lo HANGUL SYLLABLE JOE
        0xc8e0 == codePoint || // Lo HANGUL SYLLABLE JYO
        0xc8fc == codePoint || // Lo HANGUL SYLLABLE JU
        0xc918 == codePoint || // Lo HANGUL SYLLABLE JWEO
        0xc934 == codePoint || // Lo HANGUL SYLLABLE JWE
        0xc950 == codePoint || // Lo HANGUL SYLLABLE JWI
        0xc96c == codePoint || // Lo HANGUL SYLLABLE JYU
        0xc988 == codePoint || // Lo HANGUL SYLLABLE JEU
        0xc9a4 == codePoint || // Lo HANGUL SYLLABLE JYI
        0xc9c0 == codePoint || // Lo HANGUL SYLLABLE JI
        0xc9dc == codePoint || // Lo HANGUL SYLLABLE JJA
        0xc9f8 == codePoint || // Lo HANGUL SYLLABLE JJAE
        0xca14 == codePoint || // Lo HANGUL SYLLABLE JJYA
        0xca30 == codePoint || // Lo HANGUL SYLLABLE JJYAE
        0xca4c == codePoint || // Lo HANGUL SYLLABLE JJEO
        0xca68 == codePoint || // Lo HANGUL SYLLABLE JJE
        0xca84 == codePoint || // Lo HANGUL SYLLABLE JJYEO
        0xcaa0 == codePoint || // Lo HANGUL SYLLABLE JJYE
        0xcabc == codePoint || // Lo HANGUL SYLLABLE JJO
        0xcad8 == codePoint || // Lo HANGUL SYLLABLE JJWA
        0xcaf4 == codePoint || // Lo HANGUL SYLLABLE JJWAE
        0xcb10 == codePoint || // Lo HANGUL SYLLABLE JJOE
        0xcb2c == codePoint || // Lo HANGUL SYLLABLE JJYO
        0xcb48 == codePoint || // Lo HANGUL SYLLABLE JJU
        0xcb64 == codePoint || // Lo HANGUL SYLLABLE JJWEO
        0xcb80 == codePoint || // Lo HANGUL SYLLABLE JJWE
        0xcb9c == codePoint || // Lo HANGUL SYLLABLE JJWI
        0xcbb8 == codePoint || // Lo HANGUL SYLLABLE JJYU
        0xcbd4 == codePoint || // Lo HANGUL SYLLABLE JJEU
        0xcbf0 == codePoint || // Lo HANGUL SYLLABLE JJYI
        0xcc0c == codePoint || // Lo HANGUL SYLLABLE JJI
        0xcc28 == codePoint || // Lo HANGUL SYLLABLE CA
        0xcc44 == codePoint || // Lo HANGUL SYLLABLE CAE
        0xcc60 == codePoint || // Lo HANGUL SYLLABLE CYA
        0xcc7c == codePoint || // Lo HANGUL SYLLABLE CYAE
        0xcc98 == codePoint || // Lo HANGUL SYLLABLE CEO
        0xccb4 == codePoint || // Lo HANGUL SYLLABLE CE
        0xccd0 == codePoint || // Lo HANGUL SYLLABLE CYEO
        0xccec == codePoint || // Lo HANGUL SYLLABLE CYE
        0xcd08 == codePoint || // Lo HANGUL SYLLABLE CO
        0xcd24 == codePoint || // Lo HANGUL SYLLABLE CWA
        0xcd40 == codePoint || // Lo HANGUL SYLLABLE CWAE
        0xcd5c == codePoint || // Lo HANGUL SYLLABLE COE
        0xcd78 == codePoint || // Lo HANGUL SYLLABLE CYO
        0xcd94 == codePoint || // Lo HANGUL SYLLABLE CU
        0xcdb0 == codePoint || // Lo HANGUL SYLLABLE CWEO
        0xcdcc == codePoint || // Lo HANGUL SYLLABLE CWE
        0xcde8 == codePoint || // Lo HANGUL SYLLABLE CWI
        0xce04 == codePoint || // Lo HANGUL SYLLABLE CYU
        0xce20 == codePoint || // Lo HANGUL SYLLABLE CEU
        0xce3c == codePoint || // Lo HANGUL SYLLABLE CYI
        0xce58 == codePoint || // Lo HANGUL SYLLABLE CI
        0xce74 == codePoint || // Lo HANGUL SYLLABLE KA
        0xce90 == codePoint || // Lo HANGUL SYLLABLE KAE
        0xceac == codePoint || // Lo HANGUL SYLLABLE KYA
        0xcec8 == codePoint || // Lo HANGUL SYLLABLE KYAE
        0xcee4 == codePoint || // Lo HANGUL SYLLABLE KEO
        0xcf00 == codePoint || // Lo HANGUL SYLLABLE KE
        0xcf1c == codePoint || // Lo HANGUL SYLLABLE KYEO
        0xcf38 == codePoint || // Lo HANGUL SYLLABLE KYE
        0xcf54 == codePoint || // Lo HANGUL SYLLABLE KO
        0xcf70 == codePoint || // Lo HANGUL SYLLABLE KWA
        0xcf8c == codePoint || // Lo HANGUL SYLLABLE KWAE
        0xcfa8 == codePoint || // Lo HANGUL SYLLABLE KOE
        0xcfc4 == codePoint || // Lo HANGUL SYLLABLE KYO
        0xcfe0 == codePoint || // Lo HANGUL SYLLABLE KU
        0xcffc == codePoint || // Lo HANGUL SYLLABLE KWEO
        0xd018 == codePoint || // Lo HANGUL SYLLABLE KWE
        0xd034 == codePoint || // Lo HANGUL SYLLABLE KWI
        0xd050 == codePoint || // Lo HANGUL SYLLABLE KYU
        0xd06c == codePoint || // Lo HANGUL SYLLABLE KEU
        0xd088 == codePoint || // Lo HANGUL SYLLABLE KYI
        0xd0a4 == codePoint || // Lo HANGUL SYLLABLE KI
        0xd0c0 == codePoint || // Lo HANGUL SYLLABLE TA
        0xd0dc == codePoint || // Lo HANGUL SYLLABLE TAE
        0xd0f8 == codePoint || // Lo HANGUL SYLLABLE TYA
        0xd114 == codePoint || // Lo HANGUL SYLLABLE TYAE
        0xd130 == codePoint || // Lo HANGUL SYLLABLE TEO
        0xd14c == codePoint || // Lo HANGUL SYLLABLE TE
        0xd168 == codePoint || // Lo HANGUL SYLLABLE TYEO
        0xd184 == codePoint || // Lo HANGUL SYLLABLE TYE
        0xd1a0 == codePoint || // Lo HANGUL SYLLABLE TO
        0xd1bc == codePoint || // Lo HANGUL SYLLABLE TWA
        0xd1d8 == codePoint || // Lo HANGUL SYLLABLE TWAE
        0xd1f4 == codePoint || // Lo HANGUL SYLLABLE TOE
        0xd210 == codePoint || // Lo HANGUL SYLLABLE TYO
        0xd22c == codePoint || // Lo HANGUL SYLLABLE TU
        0xd248 == codePoint || // Lo HANGUL SYLLABLE TWEO
        0xd264 == codePoint || // Lo HANGUL SYLLABLE TWE
        0xd280 == codePoint || // Lo HANGUL SYLLABLE TWI
        0xd29c == codePoint || // Lo HANGUL SYLLABLE TYU
        0xd2b8 == codePoint || // Lo HANGUL SYLLABLE TEU
        0xd2d4 == codePoint || // Lo HANGUL SYLLABLE TYI
        0xd2f0 == codePoint || // Lo HANGUL SYLLABLE TI
        0xd30c == codePoint || // Lo HANGUL SYLLABLE PA
        0xd328 == codePoint || // Lo HANGUL SYLLABLE PAE
        0xd344 == codePoint || // Lo HANGUL SYLLABLE PYA
        0xd360 == codePoint || // Lo HANGUL SYLLABLE PYAE
        0xd37c == codePoint || // Lo HANGUL SYLLABLE PEO
        0xd398 == codePoint || // Lo HANGUL SYLLABLE PE
        0xd3b4 == codePoint || // Lo HANGUL SYLLABLE PYEO
        0xd3d0 == codePoint || // Lo HANGUL SYLLABLE PYE
        0xd3ec == codePoint || // Lo HANGUL SYLLABLE PO
        0xd408 == codePoint || // Lo HANGUL SYLLABLE PWA
        0xd424 == codePoint || // Lo HANGUL SYLLABLE PWAE
        0xd440 == codePoint || // Lo HANGUL SYLLABLE POE
        0xd45c == codePoint || // Lo HANGUL SYLLABLE PYO
        0xd478 == codePoint || // Lo HANGUL SYLLABLE PU
        0xd494 == codePoint || // Lo HANGUL SYLLABLE PWEO
        0xd4b0 == codePoint || // Lo HANGUL SYLLABLE PWE
        0xd4cc == codePoint || // Lo HANGUL SYLLABLE PWI
        0xd4e8 == codePoint || // Lo HANGUL SYLLABLE PYU
        0xd504 == codePoint || // Lo HANGUL SYLLABLE PEU
        0xd520 == codePoint || // Lo HANGUL SYLLABLE PYI
        0xd53c == codePoint || // Lo HANGUL SYLLABLE PI
        0xd558 == codePoint || // Lo HANGUL SYLLABLE HA
        0xd574 == codePoint || // Lo HANGUL SYLLABLE HAE
        0xd590 == codePoint || // Lo HANGUL SYLLABLE HYA
        0xd5ac == codePoint || // Lo HANGUL SYLLABLE HYAE
        0xd5c8 == codePoint || // Lo HANGUL SYLLABLE HEO
        0xd5e4 == codePoint || // Lo HANGUL SYLLABLE HE
        0xd600 == codePoint || // Lo HANGUL SYLLABLE HYEO
        0xd61c == codePoint || // Lo HANGUL SYLLABLE HYE
        0xd638 == codePoint || // Lo HANGUL SYLLABLE HO
        0xd654 == codePoint || // Lo HANGUL SYLLABLE HWA
        0xd670 == codePoint || // Lo HANGUL SYLLABLE HWAE
        0xd68c == codePoint || // Lo HANGUL SYLLABLE HOE
        0xd6a8 == codePoint || // Lo HANGUL SYLLABLE HYO
        0xd6c4 == codePoint || // Lo HANGUL SYLLABLE HU
        0xd6e0 == codePoint || // Lo HANGUL SYLLABLE HWEO
        0xd6fc == codePoint || // Lo HANGUL SYLLABLE HWE
        0xd718 == codePoint || // Lo HANGUL SYLLABLE HWI
        0xd734 == codePoint || // Lo HANGUL SYLLABLE HYU
        0xd750 == codePoint || // Lo HANGUL SYLLABLE HEU
        0xd76c == codePoint || // Lo HANGUL SYLLABLE HYI
        0xd788 == codePoint // Lo HANGUL SYLLABLE HI
    ) {
        return GraphemeBreakProperty.LV
    }

    if (
        (0xac01 <= codePoint && codePoint <= 0xac1b) || // Lo [27] HANGUL SYLLABLE GAG..HANGUL SYLLABLE GAH
        (0xac1d <= codePoint && codePoint <= 0xac37) || // Lo [27] HANGUL SYLLABLE GAEG..HANGUL SYLLABLE GAEH
        (0xac39 <= codePoint && codePoint <= 0xac53) || // Lo [27] HANGUL SYLLABLE GYAG..HANGUL SYLLABLE GYAH
        (0xac55 <= codePoint && codePoint <= 0xac6f) || // Lo [27] HANGUL SYLLABLE GYAEG..HANGUL SYLLABLE GYAEH
        (0xac71 <= codePoint && codePoint <= 0xac8b) || // Lo [27] HANGUL SYLLABLE GEOG..HANGUL SYLLABLE GEOH
        (0xac8d <= codePoint && codePoint <= 0xaca7) || // Lo [27] HANGUL SYLLABLE GEG..HANGUL SYLLABLE GEH
        (0xaca9 <= codePoint && codePoint <= 0xacc3) || // Lo [27] HANGUL SYLLABLE GYEOG..HANGUL SYLLABLE GYEOH
        (0xacc5 <= codePoint && codePoint <= 0xacdf) || // Lo [27] HANGUL SYLLABLE GYEG..HANGUL SYLLABLE GYEH
        (0xace1 <= codePoint && codePoint <= 0xacfb) || // Lo [27] HANGUL SYLLABLE GOG..HANGUL SYLLABLE GOH
        (0xacfd <= codePoint && codePoint <= 0xad17) || // Lo [27] HANGUL SYLLABLE GWAG..HANGUL SYLLABLE GWAH
        (0xad19 <= codePoint && codePoint <= 0xad33) || // Lo [27] HANGUL SYLLABLE GWAEG..HANGUL SYLLABLE GWAEH
        (0xad35 <= codePoint && codePoint <= 0xad4f) || // Lo [27] HANGUL SYLLABLE GOEG..HANGUL SYLLABLE GOEH
        (0xad51 <= codePoint && codePoint <= 0xad6b) || // Lo [27] HANGUL SYLLABLE GYOG..HANGUL SYLLABLE GYOH
        (0xad6d <= codePoint && codePoint <= 0xad87) || // Lo [27] HANGUL SYLLABLE GUG..HANGUL SYLLABLE GUH
        (0xad89 <= codePoint && codePoint <= 0xada3) || // Lo [27] HANGUL SYLLABLE GWEOG..HANGUL SYLLABLE GWEOH
        (0xada5 <= codePoint && codePoint <= 0xadbf) || // Lo [27] HANGUL SYLLABLE GWEG..HANGUL SYLLABLE GWEH
        (0xadc1 <= codePoint && codePoint <= 0xaddb) || // Lo [27] HANGUL SYLLABLE GWIG..HANGUL SYLLABLE GWIH
        (0xaddd <= codePoint && codePoint <= 0xadf7) || // Lo [27] HANGUL SYLLABLE GYUG..HANGUL SYLLABLE GYUH
        (0xadf9 <= codePoint && codePoint <= 0xae13) || // Lo [27] HANGUL SYLLABLE GEUG..HANGUL SYLLABLE GEUH
        (0xae15 <= codePoint && codePoint <= 0xae2f) || // Lo [27] HANGUL SYLLABLE GYIG..HANGUL SYLLABLE GYIH
        (0xae31 <= codePoint && codePoint <= 0xae4b) || // Lo [27] HANGUL SYLLABLE GIG..HANGUL SYLLABLE GIH
        (0xae4d <= codePoint && codePoint <= 0xae67) || // Lo [27] HANGUL SYLLABLE GGAG..HANGUL SYLLABLE GGAH
        (0xae69 <= codePoint && codePoint <= 0xae83) || // Lo [27] HANGUL SYLLABLE GGAEG..HANGUL SYLLABLE GGAEH
        (0xae85 <= codePoint && codePoint <= 0xae9f) || // Lo [27] HANGUL SYLLABLE GGYAG..HANGUL SYLLABLE GGYAH
        (0xaea1 <= codePoint && codePoint <= 0xaebb) || // Lo [27] HANGUL SYLLABLE GGYAEG..HANGUL SYLLABLE GGYAEH
        (0xaebd <= codePoint && codePoint <= 0xaed7) || // Lo [27] HANGUL SYLLABLE GGEOG..HANGUL SYLLABLE GGEOH
        (0xaed9 <= codePoint && codePoint <= 0xaef3) || // Lo [27] HANGUL SYLLABLE GGEG..HANGUL SYLLABLE GGEH
        (0xaef5 <= codePoint && codePoint <= 0xaf0f) || // Lo [27] HANGUL SYLLABLE GGYEOG..HANGUL SYLLABLE GGYEOH
        (0xaf11 <= codePoint && codePoint <= 0xaf2b) || // Lo [27] HANGUL SYLLABLE GGYEG..HANGUL SYLLABLE GGYEH
        (0xaf2d <= codePoint && codePoint <= 0xaf47) || // Lo [27] HANGUL SYLLABLE GGOG..HANGUL SYLLABLE GGOH
        (0xaf49 <= codePoint && codePoint <= 0xaf63) || // Lo [27] HANGUL SYLLABLE GGWAG..HANGUL SYLLABLE GGWAH
        (0xaf65 <= codePoint && codePoint <= 0xaf7f) || // Lo [27] HANGUL SYLLABLE GGWAEG..HANGUL SYLLABLE GGWAEH
        (0xaf81 <= codePoint && codePoint <= 0xaf9b) || // Lo [27] HANGUL SYLLABLE GGOEG..HANGUL SYLLABLE GGOEH
        (0xaf9d <= codePoint && codePoint <= 0xafb7) || // Lo [27] HANGUL SYLLABLE GGYOG..HANGUL SYLLABLE GGYOH
        (0xafb9 <= codePoint && codePoint <= 0xafd3) || // Lo [27] HANGUL SYLLABLE GGUG..HANGUL SYLLABLE GGUH
        (0xafd5 <= codePoint && codePoint <= 0xafef) || // Lo [27] HANGUL SYLLABLE GGWEOG..HANGUL SYLLABLE GGWEOH
        (0xaff1 <= codePoint && codePoint <= 0xb00b) || // Lo [27] HANGUL SYLLABLE GGWEG..HANGUL SYLLABLE GGWEH
        (0xb00d <= codePoint && codePoint <= 0xb027) || // Lo [27] HANGUL SYLLABLE GGWIG..HANGUL SYLLABLE GGWIH
        (0xb029 <= codePoint && codePoint <= 0xb043) || // Lo [27] HANGUL SYLLABLE GGYUG..HANGUL SYLLABLE GGYUH
        (0xb045 <= codePoint && codePoint <= 0xb05f) || // Lo [27] HANGUL SYLLABLE GGEUG..HANGUL SYLLABLE GGEUH
        (0xb061 <= codePoint && codePoint <= 0xb07b) || // Lo [27] HANGUL SYLLABLE GGYIG..HANGUL SYLLABLE GGYIH
        (0xb07d <= codePoint && codePoint <= 0xb097) || // Lo [27] HANGUL SYLLABLE GGIG..HANGUL SYLLABLE GGIH
        (0xb099 <= codePoint && codePoint <= 0xb0b3) || // Lo [27] HANGUL SYLLABLE NAG..HANGUL SYLLABLE NAH
        (0xb0b5 <= codePoint && codePoint <= 0xb0cf) || // Lo [27] HANGUL SYLLABLE NAEG..HANGUL SYLLABLE NAEH
        (0xb0d1 <= codePoint && codePoint <= 0xb0eb) || // Lo [27] HANGUL SYLLABLE NYAG..HANGUL SYLLABLE NYAH
        (0xb0ed <= codePoint && codePoint <= 0xb107) || // Lo [27] HANGUL SYLLABLE NYAEG..HANGUL SYLLABLE NYAEH
        (0xb109 <= codePoint && codePoint <= 0xb123) || // Lo [27] HANGUL SYLLABLE NEOG..HANGUL SYLLABLE NEOH
        (0xb125 <= codePoint && codePoint <= 0xb13f) || // Lo [27] HANGUL SYLLABLE NEG..HANGUL SYLLABLE NEH
        (0xb141 <= codePoint && codePoint <= 0xb15b) || // Lo [27] HANGUL SYLLABLE NYEOG..HANGUL SYLLABLE NYEOH
        (0xb15d <= codePoint && codePoint <= 0xb177) || // Lo [27] HANGUL SYLLABLE NYEG..HANGUL SYLLABLE NYEH
        (0xb179 <= codePoint && codePoint <= 0xb193) || // Lo [27] HANGUL SYLLABLE NOG..HANGUL SYLLABLE NOH
        (0xb195 <= codePoint && codePoint <= 0xb1af) || // Lo [27] HANGUL SYLLABLE NWAG..HANGUL SYLLABLE NWAH
        (0xb1b1 <= codePoint && codePoint <= 0xb1cb) || // Lo [27] HANGUL SYLLABLE NWAEG..HANGUL SYLLABLE NWAEH
        (0xb1cd <= codePoint && codePoint <= 0xb1e7) || // Lo [27] HANGUL SYLLABLE NOEG..HANGUL SYLLABLE NOEH
        (0xb1e9 <= codePoint && codePoint <= 0xb203) || // Lo [27] HANGUL SYLLABLE NYOG..HANGUL SYLLABLE NYOH
        (0xb205 <= codePoint && codePoint <= 0xb21f) || // Lo [27] HANGUL SYLLABLE NUG..HANGUL SYLLABLE NUH
        (0xb221 <= codePoint && codePoint <= 0xb23b) || // Lo [27] HANGUL SYLLABLE NWEOG..HANGUL SYLLABLE NWEOH
        (0xb23d <= codePoint && codePoint <= 0xb257) || // Lo [27] HANGUL SYLLABLE NWEG..HANGUL SYLLABLE NWEH
        (0xb259 <= codePoint && codePoint <= 0xb273) || // Lo [27] HANGUL SYLLABLE NWIG..HANGUL SYLLABLE NWIH
        (0xb275 <= codePoint && codePoint <= 0xb28f) || // Lo [27] HANGUL SYLLABLE NYUG..HANGUL SYLLABLE NYUH
        (0xb291 <= codePoint && codePoint <= 0xb2ab) || // Lo [27] HANGUL SYLLABLE NEUG..HANGUL SYLLABLE NEUH
        (0xb2ad <= codePoint && codePoint <= 0xb2c7) || // Lo [27] HANGUL SYLLABLE NYIG..HANGUL SYLLABLE NYIH
        (0xb2c9 <= codePoint && codePoint <= 0xb2e3) || // Lo [27] HANGUL SYLLABLE NIG..HANGUL SYLLABLE NIH
        (0xb2e5 <= codePoint && codePoint <= 0xb2ff) || // Lo [27] HANGUL SYLLABLE DAG..HANGUL SYLLABLE DAH
        (0xb301 <= codePoint && codePoint <= 0xb31b) || // Lo [27] HANGUL SYLLABLE DAEG..HANGUL SYLLABLE DAEH
        (0xb31d <= codePoint && codePoint <= 0xb337) || // Lo [27] HANGUL SYLLABLE DYAG..HANGUL SYLLABLE DYAH
        (0xb339 <= codePoint && codePoint <= 0xb353) || // Lo [27] HANGUL SYLLABLE DYAEG..HANGUL SYLLABLE DYAEH
        (0xb355 <= codePoint && codePoint <= 0xb36f) || // Lo [27] HANGUL SYLLABLE DEOG..HANGUL SYLLABLE DEOH
        (0xb371 <= codePoint && codePoint <= 0xb38b) || // Lo [27] HANGUL SYLLABLE DEG..HANGUL SYLLABLE DEH
        (0xb38d <= codePoint && codePoint <= 0xb3a7) || // Lo [27] HANGUL SYLLABLE DYEOG..HANGUL SYLLABLE DYEOH
        (0xb3a9 <= codePoint && codePoint <= 0xb3c3) || // Lo [27] HANGUL SYLLABLE DYEG..HANGUL SYLLABLE DYEH
        (0xb3c5 <= codePoint && codePoint <= 0xb3df) || // Lo [27] HANGUL SYLLABLE DOG..HANGUL SYLLABLE DOH
        (0xb3e1 <= codePoint && codePoint <= 0xb3fb) || // Lo [27] HANGUL SYLLABLE DWAG..HANGUL SYLLABLE DWAH
        (0xb3fd <= codePoint && codePoint <= 0xb417) || // Lo [27] HANGUL SYLLABLE DWAEG..HANGUL SYLLABLE DWAEH
        (0xb419 <= codePoint && codePoint <= 0xb433) || // Lo [27] HANGUL SYLLABLE DOEG..HANGUL SYLLABLE DOEH
        (0xb435 <= codePoint && codePoint <= 0xb44f) || // Lo [27] HANGUL SYLLABLE DYOG..HANGUL SYLLABLE DYOH
        (0xb451 <= codePoint && codePoint <= 0xb46b) || // Lo [27] HANGUL SYLLABLE DUG..HANGUL SYLLABLE DUH
        (0xb46d <= codePoint && codePoint <= 0xb487) || // Lo [27] HANGUL SYLLABLE DWEOG..HANGUL SYLLABLE DWEOH
        (0xb489 <= codePoint && codePoint <= 0xb4a3) || // Lo [27] HANGUL SYLLABLE DWEG..HANGUL SYLLABLE DWEH
        (0xb4a5 <= codePoint && codePoint <= 0xb4bf) || // Lo [27] HANGUL SYLLABLE DWIG..HANGUL SYLLABLE DWIH
        (0xb4c1 <= codePoint && codePoint <= 0xb4db) || // Lo [27] HANGUL SYLLABLE DYUG..HANGUL SYLLABLE DYUH
        (0xb4dd <= codePoint && codePoint <= 0xb4f7) || // Lo [27] HANGUL SYLLABLE DEUG..HANGUL SYLLABLE DEUH
        (0xb4f9 <= codePoint && codePoint <= 0xb513) || // Lo [27] HANGUL SYLLABLE DYIG..HANGUL SYLLABLE DYIH
        (0xb515 <= codePoint && codePoint <= 0xb52f) || // Lo [27] HANGUL SYLLABLE DIG..HANGUL SYLLABLE DIH
        (0xb531 <= codePoint && codePoint <= 0xb54b) || // Lo [27] HANGUL SYLLABLE DDAG..HANGUL SYLLABLE DDAH
        (0xb54d <= codePoint && codePoint <= 0xb567) || // Lo [27] HANGUL SYLLABLE DDAEG..HANGUL SYLLABLE DDAEH
        (0xb569 <= codePoint && codePoint <= 0xb583) || // Lo [27] HANGUL SYLLABLE DDYAG..HANGUL SYLLABLE DDYAH
        (0xb585 <= codePoint && codePoint <= 0xb59f) || // Lo [27] HANGUL SYLLABLE DDYAEG..HANGUL SYLLABLE DDYAEH
        (0xb5a1 <= codePoint && codePoint <= 0xb5bb) || // Lo [27] HANGUL SYLLABLE DDEOG..HANGUL SYLLABLE DDEOH
        (0xb5bd <= codePoint && codePoint <= 0xb5d7) || // Lo [27] HANGUL SYLLABLE DDEG..HANGUL SYLLABLE DDEH
        (0xb5d9 <= codePoint && codePoint <= 0xb5f3) || // Lo [27] HANGUL SYLLABLE DDYEOG..HANGUL SYLLABLE DDYEOH
        (0xb5f5 <= codePoint && codePoint <= 0xb60f) || // Lo [27] HANGUL SYLLABLE DDYEG..HANGUL SYLLABLE DDYEH
        (0xb611 <= codePoint && codePoint <= 0xb62b) || // Lo [27] HANGUL SYLLABLE DDOG..HANGUL SYLLABLE DDOH
        (0xb62d <= codePoint && codePoint <= 0xb647) || // Lo [27] HANGUL SYLLABLE DDWAG..HANGUL SYLLABLE DDWAH
        (0xb649 <= codePoint && codePoint <= 0xb663) || // Lo [27] HANGUL SYLLABLE DDWAEG..HANGUL SYLLABLE DDWAEH
        (0xb665 <= codePoint && codePoint <= 0xb67f) || // Lo [27] HANGUL SYLLABLE DDOEG..HANGUL SYLLABLE DDOEH
        (0xb681 <= codePoint && codePoint <= 0xb69b) || // Lo [27] HANGUL SYLLABLE DDYOG..HANGUL SYLLABLE DDYOH
        (0xb69d <= codePoint && codePoint <= 0xb6b7) || // Lo [27] HANGUL SYLLABLE DDUG..HANGUL SYLLABLE DDUH
        (0xb6b9 <= codePoint && codePoint <= 0xb6d3) || // Lo [27] HANGUL SYLLABLE DDWEOG..HANGUL SYLLABLE DDWEOH
        (0xb6d5 <= codePoint && codePoint <= 0xb6ef) || // Lo [27] HANGUL SYLLABLE DDWEG..HANGUL SYLLABLE DDWEH
        (0xb6f1 <= codePoint && codePoint <= 0xb70b) || // Lo [27] HANGUL SYLLABLE DDWIG..HANGUL SYLLABLE DDWIH
        (0xb70d <= codePoint && codePoint <= 0xb727) || // Lo [27] HANGUL SYLLABLE DDYUG..HANGUL SYLLABLE DDYUH
        (0xb729 <= codePoint && codePoint <= 0xb743) || // Lo [27] HANGUL SYLLABLE DDEUG..HANGUL SYLLABLE DDEUH
        (0xb745 <= codePoint && codePoint <= 0xb75f) || // Lo [27] HANGUL SYLLABLE DDYIG..HANGUL SYLLABLE DDYIH
        (0xb761 <= codePoint && codePoint <= 0xb77b) || // Lo [27] HANGUL SYLLABLE DDIG..HANGUL SYLLABLE DDIH
        (0xb77d <= codePoint && codePoint <= 0xb797) || // Lo [27] HANGUL SYLLABLE RAG..HANGUL SYLLABLE RAH
        (0xb799 <= codePoint && codePoint <= 0xb7b3) || // Lo [27] HANGUL SYLLABLE RAEG..HANGUL SYLLABLE RAEH
        (0xb7b5 <= codePoint && codePoint <= 0xb7cf) || // Lo [27] HANGUL SYLLABLE RYAG..HANGUL SYLLABLE RYAH
        (0xb7d1 <= codePoint && codePoint <= 0xb7eb) || // Lo [27] HANGUL SYLLABLE RYAEG..HANGUL SYLLABLE RYAEH
        (0xb7ed <= codePoint && codePoint <= 0xb807) || // Lo [27] HANGUL SYLLABLE REOG..HANGUL SYLLABLE REOH
        (0xb809 <= codePoint && codePoint <= 0xb823) || // Lo [27] HANGUL SYLLABLE REG..HANGUL SYLLABLE REH
        (0xb825 <= codePoint && codePoint <= 0xb83f) || // Lo [27] HANGUL SYLLABLE RYEOG..HANGUL SYLLABLE RYEOH
        (0xb841 <= codePoint && codePoint <= 0xb85b) || // Lo [27] HANGUL SYLLABLE RYEG..HANGUL SYLLABLE RYEH
        (0xb85d <= codePoint && codePoint <= 0xb877) || // Lo [27] HANGUL SYLLABLE ROG..HANGUL SYLLABLE ROH
        (0xb879 <= codePoint && codePoint <= 0xb893) || // Lo [27] HANGUL SYLLABLE RWAG..HANGUL SYLLABLE RWAH
        (0xb895 <= codePoint && codePoint <= 0xb8af) || // Lo [27] HANGUL SYLLABLE RWAEG..HANGUL SYLLABLE RWAEH
        (0xb8b1 <= codePoint && codePoint <= 0xb8cb) || // Lo [27] HANGUL SYLLABLE ROEG..HANGUL SYLLABLE ROEH
        (0xb8cd <= codePoint && codePoint <= 0xb8e7) || // Lo [27] HANGUL SYLLABLE RYOG..HANGUL SYLLABLE RYOH
        (0xb8e9 <= codePoint && codePoint <= 0xb903) || // Lo [27] HANGUL SYLLABLE RUG..HANGUL SYLLABLE RUH
        (0xb905 <= codePoint && codePoint <= 0xb91f) || // Lo [27] HANGUL SYLLABLE RWEOG..HANGUL SYLLABLE RWEOH
        (0xb921 <= codePoint && codePoint <= 0xb93b) || // Lo [27] HANGUL SYLLABLE RWEG..HANGUL SYLLABLE RWEH
        (0xb93d <= codePoint && codePoint <= 0xb957) || // Lo [27] HANGUL SYLLABLE RWIG..HANGUL SYLLABLE RWIH
        (0xb959 <= codePoint && codePoint <= 0xb973) || // Lo [27] HANGUL SYLLABLE RYUG..HANGUL SYLLABLE RYUH
        (0xb975 <= codePoint && codePoint <= 0xb98f) || // Lo [27] HANGUL SYLLABLE REUG..HANGUL SYLLABLE REUH
        (0xb991 <= codePoint && codePoint <= 0xb9ab) || // Lo [27] HANGUL SYLLABLE RYIG..HANGUL SYLLABLE RYIH
        (0xb9ad <= codePoint && codePoint <= 0xb9c7) || // Lo [27] HANGUL SYLLABLE RIG..HANGUL SYLLABLE RIH
        (0xb9c9 <= codePoint && codePoint <= 0xb9e3) || // Lo [27] HANGUL SYLLABLE MAG..HANGUL SYLLABLE MAH
        (0xb9e5 <= codePoint && codePoint <= 0xb9ff) || // Lo [27] HANGUL SYLLABLE MAEG..HANGUL SYLLABLE MAEH
        (0xba01 <= codePoint && codePoint <= 0xba1b) || // Lo [27] HANGUL SYLLABLE MYAG..HANGUL SYLLABLE MYAH
        (0xba1d <= codePoint && codePoint <= 0xba37) || // Lo [27] HANGUL SYLLABLE MYAEG..HANGUL SYLLABLE MYAEH
        (0xba39 <= codePoint && codePoint <= 0xba53) || // Lo [27] HANGUL SYLLABLE MEOG..HANGUL SYLLABLE MEOH
        (0xba55 <= codePoint && codePoint <= 0xba6f) || // Lo [27] HANGUL SYLLABLE MEG..HANGUL SYLLABLE MEH
        (0xba71 <= codePoint && codePoint <= 0xba8b) || // Lo [27] HANGUL SYLLABLE MYEOG..HANGUL SYLLABLE MYEOH
        (0xba8d <= codePoint && codePoint <= 0xbaa7) || // Lo [27] HANGUL SYLLABLE MYEG..HANGUL SYLLABLE MYEH
        (0xbaa9 <= codePoint && codePoint <= 0xbac3) || // Lo [27] HANGUL SYLLABLE MOG..HANGUL SYLLABLE MOH
        (0xbac5 <= codePoint && codePoint <= 0xbadf) || // Lo [27] HANGUL SYLLABLE MWAG..HANGUL SYLLABLE MWAH
        (0xbae1 <= codePoint && codePoint <= 0xbafb) || // Lo [27] HANGUL SYLLABLE MWAEG..HANGUL SYLLABLE MWAEH
        (0xbafd <= codePoint && codePoint <= 0xbb17) || // Lo [27] HANGUL SYLLABLE MOEG..HANGUL SYLLABLE MOEH
        (0xbb19 <= codePoint && codePoint <= 0xbb33) || // Lo [27] HANGUL SYLLABLE MYOG..HANGUL SYLLABLE MYOH
        (0xbb35 <= codePoint && codePoint <= 0xbb4f) || // Lo [27] HANGUL SYLLABLE MUG..HANGUL SYLLABLE MUH
        (0xbb51 <= codePoint && codePoint <= 0xbb6b) || // Lo [27] HANGUL SYLLABLE MWEOG..HANGUL SYLLABLE MWEOH
        (0xbb6d <= codePoint && codePoint <= 0xbb87) || // Lo [27] HANGUL SYLLABLE MWEG..HANGUL SYLLABLE MWEH
        (0xbb89 <= codePoint && codePoint <= 0xbba3) || // Lo [27] HANGUL SYLLABLE MWIG..HANGUL SYLLABLE MWIH
        (0xbba5 <= codePoint && codePoint <= 0xbbbf) || // Lo [27] HANGUL SYLLABLE MYUG..HANGUL SYLLABLE MYUH
        (0xbbc1 <= codePoint && codePoint <= 0xbbdb) || // Lo [27] HANGUL SYLLABLE MEUG..HANGUL SYLLABLE MEUH
        (0xbbdd <= codePoint && codePoint <= 0xbbf7) || // Lo [27] HANGUL SYLLABLE MYIG..HANGUL SYLLABLE MYIH
        (0xbbf9 <= codePoint && codePoint <= 0xbc13) || // Lo [27] HANGUL SYLLABLE MIG..HANGUL SYLLABLE MIH
        (0xbc15 <= codePoint && codePoint <= 0xbc2f) || // Lo [27] HANGUL SYLLABLE BAG..HANGUL SYLLABLE BAH
        (0xbc31 <= codePoint && codePoint <= 0xbc4b) || // Lo [27] HANGUL SYLLABLE BAEG..HANGUL SYLLABLE BAEH
        (0xbc4d <= codePoint && codePoint <= 0xbc67) || // Lo [27] HANGUL SYLLABLE BYAG..HANGUL SYLLABLE BYAH
        (0xbc69 <= codePoint && codePoint <= 0xbc83) || // Lo [27] HANGUL SYLLABLE BYAEG..HANGUL SYLLABLE BYAEH
        (0xbc85 <= codePoint && codePoint <= 0xbc9f) || // Lo [27] HANGUL SYLLABLE BEOG..HANGUL SYLLABLE BEOH
        (0xbca1 <= codePoint && codePoint <= 0xbcbb) || // Lo [27] HANGUL SYLLABLE BEG..HANGUL SYLLABLE BEH
        (0xbcbd <= codePoint && codePoint <= 0xbcd7) || // Lo [27] HANGUL SYLLABLE BYEOG..HANGUL SYLLABLE BYEOH
        (0xbcd9 <= codePoint && codePoint <= 0xbcf3) || // Lo [27] HANGUL SYLLABLE BYEG..HANGUL SYLLABLE BYEH
        (0xbcf5 <= codePoint && codePoint <= 0xbd0f) || // Lo [27] HANGUL SYLLABLE BOG..HANGUL SYLLABLE BOH
        (0xbd11 <= codePoint && codePoint <= 0xbd2b) || // Lo [27] HANGUL SYLLABLE BWAG..HANGUL SYLLABLE BWAH
        (0xbd2d <= codePoint && codePoint <= 0xbd47) || // Lo [27] HANGUL SYLLABLE BWAEG..HANGUL SYLLABLE BWAEH
        (0xbd49 <= codePoint && codePoint <= 0xbd63) || // Lo [27] HANGUL SYLLABLE BOEG..HANGUL SYLLABLE BOEH
        (0xbd65 <= codePoint && codePoint <= 0xbd7f) || // Lo [27] HANGUL SYLLABLE BYOG..HANGUL SYLLABLE BYOH
        (0xbd81 <= codePoint && codePoint <= 0xbd9b) || // Lo [27] HANGUL SYLLABLE BUG..HANGUL SYLLABLE BUH
        (0xbd9d <= codePoint && codePoint <= 0xbdb7) || // Lo [27] HANGUL SYLLABLE BWEOG..HANGUL SYLLABLE BWEOH
        (0xbdb9 <= codePoint && codePoint <= 0xbdd3) || // Lo [27] HANGUL SYLLABLE BWEG..HANGUL SYLLABLE BWEH
        (0xbdd5 <= codePoint && codePoint <= 0xbdef) || // Lo [27] HANGUL SYLLABLE BWIG..HANGUL SYLLABLE BWIH
        (0xbdf1 <= codePoint && codePoint <= 0xbe0b) || // Lo [27] HANGUL SYLLABLE BYUG..HANGUL SYLLABLE BYUH
        (0xbe0d <= codePoint && codePoint <= 0xbe27) || // Lo [27] HANGUL SYLLABLE BEUG..HANGUL SYLLABLE BEUH
        (0xbe29 <= codePoint && codePoint <= 0xbe43) || // Lo [27] HANGUL SYLLABLE BYIG..HANGUL SYLLABLE BYIH
        (0xbe45 <= codePoint && codePoint <= 0xbe5f) || // Lo [27] HANGUL SYLLABLE BIG..HANGUL SYLLABLE BIH
        (0xbe61 <= codePoint && codePoint <= 0xbe7b) || // Lo [27] HANGUL SYLLABLE BBAG..HANGUL SYLLABLE BBAH
        (0xbe7d <= codePoint && codePoint <= 0xbe97) || // Lo [27] HANGUL SYLLABLE BBAEG..HANGUL SYLLABLE BBAEH
        (0xbe99 <= codePoint && codePoint <= 0xbeb3) || // Lo [27] HANGUL SYLLABLE BBYAG..HANGUL SYLLABLE BBYAH
        (0xbeb5 <= codePoint && codePoint <= 0xbecf) || // Lo [27] HANGUL SYLLABLE BBYAEG..HANGUL SYLLABLE BBYAEH
        (0xbed1 <= codePoint && codePoint <= 0xbeeb) || // Lo [27] HANGUL SYLLABLE BBEOG..HANGUL SYLLABLE BBEOH
        (0xbeed <= codePoint && codePoint <= 0xbf07) || // Lo [27] HANGUL SYLLABLE BBEG..HANGUL SYLLABLE BBEH
        (0xbf09 <= codePoint && codePoint <= 0xbf23) || // Lo [27] HANGUL SYLLABLE BBYEOG..HANGUL SYLLABLE BBYEOH
        (0xbf25 <= codePoint && codePoint <= 0xbf3f) || // Lo [27] HANGUL SYLLABLE BBYEG..HANGUL SYLLABLE BBYEH
        (0xbf41 <= codePoint && codePoint <= 0xbf5b) || // Lo [27] HANGUL SYLLABLE BBOG..HANGUL SYLLABLE BBOH
        (0xbf5d <= codePoint && codePoint <= 0xbf77) || // Lo [27] HANGUL SYLLABLE BBWAG..HANGUL SYLLABLE BBWAH
        (0xbf79 <= codePoint && codePoint <= 0xbf93) || // Lo [27] HANGUL SYLLABLE BBWAEG..HANGUL SYLLABLE BBWAEH
        (0xbf95 <= codePoint && codePoint <= 0xbfaf) || // Lo [27] HANGUL SYLLABLE BBOEG..HANGUL SYLLABLE BBOEH
        (0xbfb1 <= codePoint && codePoint <= 0xbfcb) || // Lo [27] HANGUL SYLLABLE BBYOG..HANGUL SYLLABLE BBYOH
        (0xbfcd <= codePoint && codePoint <= 0xbfe7) || // Lo [27] HANGUL SYLLABLE BBUG..HANGUL SYLLABLE BBUH
        (0xbfe9 <= codePoint && codePoint <= 0xc003) || // Lo [27] HANGUL SYLLABLE BBWEOG..HANGUL SYLLABLE BBWEOH
        (0xc005 <= codePoint && codePoint <= 0xc01f) || // Lo [27] HANGUL SYLLABLE BBWEG..HANGUL SYLLABLE BBWEH
        (0xc021 <= codePoint && codePoint <= 0xc03b) || // Lo [27] HANGUL SYLLABLE BBWIG..HANGUL SYLLABLE BBWIH
        (0xc03d <= codePoint && codePoint <= 0xc057) || // Lo [27] HANGUL SYLLABLE BBYUG..HANGUL SYLLABLE BBYUH
        (0xc059 <= codePoint && codePoint <= 0xc073) || // Lo [27] HANGUL SYLLABLE BBEUG..HANGUL SYLLABLE BBEUH
        (0xc075 <= codePoint && codePoint <= 0xc08f) || // Lo [27] HANGUL SYLLABLE BBYIG..HANGUL SYLLABLE BBYIH
        (0xc091 <= codePoint && codePoint <= 0xc0ab) || // Lo [27] HANGUL SYLLABLE BBIG..HANGUL SYLLABLE BBIH
        (0xc0ad <= codePoint && codePoint <= 0xc0c7) || // Lo [27] HANGUL SYLLABLE SAG..HANGUL SYLLABLE SAH
        (0xc0c9 <= codePoint && codePoint <= 0xc0e3) || // Lo [27] HANGUL SYLLABLE SAEG..HANGUL SYLLABLE SAEH
        (0xc0e5 <= codePoint && codePoint <= 0xc0ff) || // Lo [27] HANGUL SYLLABLE SYAG..HANGUL SYLLABLE SYAH
        (0xc101 <= codePoint && codePoint <= 0xc11b) || // Lo [27] HANGUL SYLLABLE SYAEG..HANGUL SYLLABLE SYAEH
        (0xc11d <= codePoint && codePoint <= 0xc137) || // Lo [27] HANGUL SYLLABLE SEOG..HANGUL SYLLABLE SEOH
        (0xc139 <= codePoint && codePoint <= 0xc153) || // Lo [27] HANGUL SYLLABLE SEG..HANGUL SYLLABLE SEH
        (0xc155 <= codePoint && codePoint <= 0xc16f) || // Lo [27] HANGUL SYLLABLE SYEOG..HANGUL SYLLABLE SYEOH
        (0xc171 <= codePoint && codePoint <= 0xc18b) || // Lo [27] HANGUL SYLLABLE SYEG..HANGUL SYLLABLE SYEH
        (0xc18d <= codePoint && codePoint <= 0xc1a7) || // Lo [27] HANGUL SYLLABLE SOG..HANGUL SYLLABLE SOH
        (0xc1a9 <= codePoint && codePoint <= 0xc1c3) || // Lo [27] HANGUL SYLLABLE SWAG..HANGUL SYLLABLE SWAH
        (0xc1c5 <= codePoint && codePoint <= 0xc1df) || // Lo [27] HANGUL SYLLABLE SWAEG..HANGUL SYLLABLE SWAEH
        (0xc1e1 <= codePoint && codePoint <= 0xc1fb) || // Lo [27] HANGUL SYLLABLE SOEG..HANGUL SYLLABLE SOEH
        (0xc1fd <= codePoint && codePoint <= 0xc217) || // Lo [27] HANGUL SYLLABLE SYOG..HANGUL SYLLABLE SYOH
        (0xc219 <= codePoint && codePoint <= 0xc233) || // Lo [27] HANGUL SYLLABLE SUG..HANGUL SYLLABLE SUH
        (0xc235 <= codePoint && codePoint <= 0xc24f) || // Lo [27] HANGUL SYLLABLE SWEOG..HANGUL SYLLABLE SWEOH
        (0xc251 <= codePoint && codePoint <= 0xc26b) || // Lo [27] HANGUL SYLLABLE SWEG..HANGUL SYLLABLE SWEH
        (0xc26d <= codePoint && codePoint <= 0xc287) || // Lo [27] HANGUL SYLLABLE SWIG..HANGUL SYLLABLE SWIH
        (0xc289 <= codePoint && codePoint <= 0xc2a3) || // Lo [27] HANGUL SYLLABLE SYUG..HANGUL SYLLABLE SYUH
        (0xc2a5 <= codePoint && codePoint <= 0xc2bf) || // Lo [27] HANGUL SYLLABLE SEUG..HANGUL SYLLABLE SEUH
        (0xc2c1 <= codePoint && codePoint <= 0xc2db) || // Lo [27] HANGUL SYLLABLE SYIG..HANGUL SYLLABLE SYIH
        (0xc2dd <= codePoint && codePoint <= 0xc2f7) || // Lo [27] HANGUL SYLLABLE SIG..HANGUL SYLLABLE SIH
        (0xc2f9 <= codePoint && codePoint <= 0xc313) || // Lo [27] HANGUL SYLLABLE SSAG..HANGUL SYLLABLE SSAH
        (0xc315 <= codePoint && codePoint <= 0xc32f) || // Lo [27] HANGUL SYLLABLE SSAEG..HANGUL SYLLABLE SSAEH
        (0xc331 <= codePoint && codePoint <= 0xc34b) || // Lo [27] HANGUL SYLLABLE SSYAG..HANGUL SYLLABLE SSYAH
        (0xc34d <= codePoint && codePoint <= 0xc367) || // Lo [27] HANGUL SYLLABLE SSYAEG..HANGUL SYLLABLE SSYAEH
        (0xc369 <= codePoint && codePoint <= 0xc383) || // Lo [27] HANGUL SYLLABLE SSEOG..HANGUL SYLLABLE SSEOH
        (0xc385 <= codePoint && codePoint <= 0xc39f) || // Lo [27] HANGUL SYLLABLE SSEG..HANGUL SYLLABLE SSEH
        (0xc3a1 <= codePoint && codePoint <= 0xc3bb) || // Lo [27] HANGUL SYLLABLE SSYEOG..HANGUL SYLLABLE SSYEOH
        (0xc3bd <= codePoint && codePoint <= 0xc3d7) || // Lo [27] HANGUL SYLLABLE SSYEG..HANGUL SYLLABLE SSYEH
        (0xc3d9 <= codePoint && codePoint <= 0xc3f3) || // Lo [27] HANGUL SYLLABLE SSOG..HANGUL SYLLABLE SSOH
        (0xc3f5 <= codePoint && codePoint <= 0xc40f) || // Lo [27] HANGUL SYLLABLE SSWAG..HANGUL SYLLABLE SSWAH
        (0xc411 <= codePoint && codePoint <= 0xc42b) || // Lo [27] HANGUL SYLLABLE SSWAEG..HANGUL SYLLABLE SSWAEH
        (0xc42d <= codePoint && codePoint <= 0xc447) || // Lo [27] HANGUL SYLLABLE SSOEG..HANGUL SYLLABLE SSOEH
        (0xc449 <= codePoint && codePoint <= 0xc463) || // Lo [27] HANGUL SYLLABLE SSYOG..HANGUL SYLLABLE SSYOH
        (0xc465 <= codePoint && codePoint <= 0xc47f) || // Lo [27] HANGUL SYLLABLE SSUG..HANGUL SYLLABLE SSUH
        (0xc481 <= codePoint && codePoint <= 0xc49b) || // Lo [27] HANGUL SYLLABLE SSWEOG..HANGUL SYLLABLE SSWEOH
        (0xc49d <= codePoint && codePoint <= 0xc4b7) || // Lo [27] HANGUL SYLLABLE SSWEG..HANGUL SYLLABLE SSWEH
        (0xc4b9 <= codePoint && codePoint <= 0xc4d3) || // Lo [27] HANGUL SYLLABLE SSWIG..HANGUL SYLLABLE SSWIH
        (0xc4d5 <= codePoint && codePoint <= 0xc4ef) || // Lo [27] HANGUL SYLLABLE SSYUG..HANGUL SYLLABLE SSYUH
        (0xc4f1 <= codePoint && codePoint <= 0xc50b) || // Lo [27] HANGUL SYLLABLE SSEUG..HANGUL SYLLABLE SSEUH
        (0xc50d <= codePoint && codePoint <= 0xc527) || // Lo [27] HANGUL SYLLABLE SSYIG..HANGUL SYLLABLE SSYIH
        (0xc529 <= codePoint && codePoint <= 0xc543) || // Lo [27] HANGUL SYLLABLE SSIG..HANGUL SYLLABLE SSIH
        (0xc545 <= codePoint && codePoint <= 0xc55f) || // Lo [27] HANGUL SYLLABLE AG..HANGUL SYLLABLE AH
        (0xc561 <= codePoint && codePoint <= 0xc57b) || // Lo [27] HANGUL SYLLABLE AEG..HANGUL SYLLABLE AEH
        (0xc57d <= codePoint && codePoint <= 0xc597) || // Lo [27] HANGUL SYLLABLE YAG..HANGUL SYLLABLE YAH
        (0xc599 <= codePoint && codePoint <= 0xc5b3) || // Lo [27] HANGUL SYLLABLE YAEG..HANGUL SYLLABLE YAEH
        (0xc5b5 <= codePoint && codePoint <= 0xc5cf) || // Lo [27] HANGUL SYLLABLE EOG..HANGUL SYLLABLE EOH
        (0xc5d1 <= codePoint && codePoint <= 0xc5eb) || // Lo [27] HANGUL SYLLABLE EG..HANGUL SYLLABLE EH
        (0xc5ed <= codePoint && codePoint <= 0xc607) || // Lo [27] HANGUL SYLLABLE YEOG..HANGUL SYLLABLE YEOH
        (0xc609 <= codePoint && codePoint <= 0xc623) || // Lo [27] HANGUL SYLLABLE YEG..HANGUL SYLLABLE YEH
        (0xc625 <= codePoint && codePoint <= 0xc63f) || // Lo [27] HANGUL SYLLABLE OG..HANGUL SYLLABLE OH
        (0xc641 <= codePoint && codePoint <= 0xc65b) || // Lo [27] HANGUL SYLLABLE WAG..HANGUL SYLLABLE WAH
        (0xc65d <= codePoint && codePoint <= 0xc677) || // Lo [27] HANGUL SYLLABLE WAEG..HANGUL SYLLABLE WAEH
        (0xc679 <= codePoint && codePoint <= 0xc693) || // Lo [27] HANGUL SYLLABLE OEG..HANGUL SYLLABLE OEH
        (0xc695 <= codePoint && codePoint <= 0xc6af) || // Lo [27] HANGUL SYLLABLE YOG..HANGUL SYLLABLE YOH
        (0xc6b1 <= codePoint && codePoint <= 0xc6cb) || // Lo [27] HANGUL SYLLABLE UG..HANGUL SYLLABLE UH
        (0xc6cd <= codePoint && codePoint <= 0xc6e7) || // Lo [27] HANGUL SYLLABLE WEOG..HANGUL SYLLABLE WEOH
        (0xc6e9 <= codePoint && codePoint <= 0xc703) || // Lo [27] HANGUL SYLLABLE WEG..HANGUL SYLLABLE WEH
        (0xc705 <= codePoint && codePoint <= 0xc71f) || // Lo [27] HANGUL SYLLABLE WIG..HANGUL SYLLABLE WIH
        (0xc721 <= codePoint && codePoint <= 0xc73b) || // Lo [27] HANGUL SYLLABLE YUG..HANGUL SYLLABLE YUH
        (0xc73d <= codePoint && codePoint <= 0xc757) || // Lo [27] HANGUL SYLLABLE EUG..HANGUL SYLLABLE EUH
        (0xc759 <= codePoint && codePoint <= 0xc773) || // Lo [27] HANGUL SYLLABLE YIG..HANGUL SYLLABLE YIH
        (0xc775 <= codePoint && codePoint <= 0xc78f) || // Lo [27] HANGUL SYLLABLE IG..HANGUL SYLLABLE IH
        (0xc791 <= codePoint && codePoint <= 0xc7ab) || // Lo [27] HANGUL SYLLABLE JAG..HANGUL SYLLABLE JAH
        (0xc7ad <= codePoint && codePoint <= 0xc7c7) || // Lo [27] HANGUL SYLLABLE JAEG..HANGUL SYLLABLE JAEH
        (0xc7c9 <= codePoint && codePoint <= 0xc7e3) || // Lo [27] HANGUL SYLLABLE JYAG..HANGUL SYLLABLE JYAH
        (0xc7e5 <= codePoint && codePoint <= 0xc7ff) || // Lo [27] HANGUL SYLLABLE JYAEG..HANGUL SYLLABLE JYAEH
        (0xc801 <= codePoint && codePoint <= 0xc81b) || // Lo [27] HANGUL SYLLABLE JEOG..HANGUL SYLLABLE JEOH
        (0xc81d <= codePoint && codePoint <= 0xc837) || // Lo [27] HANGUL SYLLABLE JEG..HANGUL SYLLABLE JEH
        (0xc839 <= codePoint && codePoint <= 0xc853) || // Lo [27] HANGUL SYLLABLE JYEOG..HANGUL SYLLABLE JYEOH
        (0xc855 <= codePoint && codePoint <= 0xc86f) || // Lo [27] HANGUL SYLLABLE JYEG..HANGUL SYLLABLE JYEH
        (0xc871 <= codePoint && codePoint <= 0xc88b) || // Lo [27] HANGUL SYLLABLE JOG..HANGUL SYLLABLE JOH
        (0xc88d <= codePoint && codePoint <= 0xc8a7) || // Lo [27] HANGUL SYLLABLE JWAG..HANGUL SYLLABLE JWAH
        (0xc8a9 <= codePoint && codePoint <= 0xc8c3) || // Lo [27] HANGUL SYLLABLE JWAEG..HANGUL SYLLABLE JWAEH
        (0xc8c5 <= codePoint && codePoint <= 0xc8df) || // Lo [27] HANGUL SYLLABLE JOEG..HANGUL SYLLABLE JOEH
        (0xc8e1 <= codePoint && codePoint <= 0xc8fb) || // Lo [27] HANGUL SYLLABLE JYOG..HANGUL SYLLABLE JYOH
        (0xc8fd <= codePoint && codePoint <= 0xc917) || // Lo [27] HANGUL SYLLABLE JUG..HANGUL SYLLABLE JUH
        (0xc919 <= codePoint && codePoint <= 0xc933) || // Lo [27] HANGUL SYLLABLE JWEOG..HANGUL SYLLABLE JWEOH
        (0xc935 <= codePoint && codePoint <= 0xc94f) || // Lo [27] HANGUL SYLLABLE JWEG..HANGUL SYLLABLE JWEH
        (0xc951 <= codePoint && codePoint <= 0xc96b) || // Lo [27] HANGUL SYLLABLE JWIG..HANGUL SYLLABLE JWIH
        (0xc96d <= codePoint && codePoint <= 0xc987) || // Lo [27] HANGUL SYLLABLE JYUG..HANGUL SYLLABLE JYUH
        (0xc989 <= codePoint && codePoint <= 0xc9a3) || // Lo [27] HANGUL SYLLABLE JEUG..HANGUL SYLLABLE JEUH
        (0xc9a5 <= codePoint && codePoint <= 0xc9bf) || // Lo [27] HANGUL SYLLABLE JYIG..HANGUL SYLLABLE JYIH
        (0xc9c1 <= codePoint && codePoint <= 0xc9db) || // Lo [27] HANGUL SYLLABLE JIG..HANGUL SYLLABLE JIH
        (0xc9dd <= codePoint && codePoint <= 0xc9f7) || // Lo [27] HANGUL SYLLABLE JJAG..HANGUL SYLLABLE JJAH
        (0xc9f9 <= codePoint && codePoint <= 0xca13) || // Lo [27] HANGUL SYLLABLE JJAEG..HANGUL SYLLABLE JJAEH
        (0xca15 <= codePoint && codePoint <= 0xca2f) || // Lo [27] HANGUL SYLLABLE JJYAG..HANGUL SYLLABLE JJYAH
        (0xca31 <= codePoint && codePoint <= 0xca4b) || // Lo [27] HANGUL SYLLABLE JJYAEG..HANGUL SYLLABLE JJYAEH
        (0xca4d <= codePoint && codePoint <= 0xca67) || // Lo [27] HANGUL SYLLABLE JJEOG..HANGUL SYLLABLE JJEOH
        (0xca69 <= codePoint && codePoint <= 0xca83) || // Lo [27] HANGUL SYLLABLE JJEG..HANGUL SYLLABLE JJEH
        (0xca85 <= codePoint && codePoint <= 0xca9f) || // Lo [27] HANGUL SYLLABLE JJYEOG..HANGUL SYLLABLE JJYEOH
        (0xcaa1 <= codePoint && codePoint <= 0xcabb) || // Lo [27] HANGUL SYLLABLE JJYEG..HANGUL SYLLABLE JJYEH
        (0xcabd <= codePoint && codePoint <= 0xcad7) || // Lo [27] HANGUL SYLLABLE JJOG..HANGUL SYLLABLE JJOH
        (0xcad9 <= codePoint && codePoint <= 0xcaf3) || // Lo [27] HANGUL SYLLABLE JJWAG..HANGUL SYLLABLE JJWAH
        (0xcaf5 <= codePoint && codePoint <= 0xcb0f) || // Lo [27] HANGUL SYLLABLE JJWAEG..HANGUL SYLLABLE JJWAEH
        (0xcb11 <= codePoint && codePoint <= 0xcb2b) || // Lo [27] HANGUL SYLLABLE JJOEG..HANGUL SYLLABLE JJOEH
        (0xcb2d <= codePoint && codePoint <= 0xcb47) || // Lo [27] HANGUL SYLLABLE JJYOG..HANGUL SYLLABLE JJYOH
        (0xcb49 <= codePoint && codePoint <= 0xcb63) || // Lo [27] HANGUL SYLLABLE JJUG..HANGUL SYLLABLE JJUH
        (0xcb65 <= codePoint && codePoint <= 0xcb7f) || // Lo [27] HANGUL SYLLABLE JJWEOG..HANGUL SYLLABLE JJWEOH
        (0xcb81 <= codePoint && codePoint <= 0xcb9b) || // Lo [27] HANGUL SYLLABLE JJWEG..HANGUL SYLLABLE JJWEH
        (0xcb9d <= codePoint && codePoint <= 0xcbb7) || // Lo [27] HANGUL SYLLABLE JJWIG..HANGUL SYLLABLE JJWIH
        (0xcbb9 <= codePoint && codePoint <= 0xcbd3) || // Lo [27] HANGUL SYLLABLE JJYUG..HANGUL SYLLABLE JJYUH
        (0xcbd5 <= codePoint && codePoint <= 0xcbef) || // Lo [27] HANGUL SYLLABLE JJEUG..HANGUL SYLLABLE JJEUH
        (0xcbf1 <= codePoint && codePoint <= 0xcc0b) || // Lo [27] HANGUL SYLLABLE JJYIG..HANGUL SYLLABLE JJYIH
        (0xcc0d <= codePoint && codePoint <= 0xcc27) || // Lo [27] HANGUL SYLLABLE JJIG..HANGUL SYLLABLE JJIH
        (0xcc29 <= codePoint && codePoint <= 0xcc43) || // Lo [27] HANGUL SYLLABLE CAG..HANGUL SYLLABLE CAH
        (0xcc45 <= codePoint && codePoint <= 0xcc5f) || // Lo [27] HANGUL SYLLABLE CAEG..HANGUL SYLLABLE CAEH
        (0xcc61 <= codePoint && codePoint <= 0xcc7b) || // Lo [27] HANGUL SYLLABLE CYAG..HANGUL SYLLABLE CYAH
        (0xcc7d <= codePoint && codePoint <= 0xcc97) || // Lo [27] HANGUL SYLLABLE CYAEG..HANGUL SYLLABLE CYAEH
        (0xcc99 <= codePoint && codePoint <= 0xccb3) || // Lo [27] HANGUL SYLLABLE CEOG..HANGUL SYLLABLE CEOH
        (0xccb5 <= codePoint && codePoint <= 0xcccf) || // Lo [27] HANGUL SYLLABLE CEG..HANGUL SYLLABLE CEH
        (0xccd1 <= codePoint && codePoint <= 0xcceb) || // Lo [27] HANGUL SYLLABLE CYEOG..HANGUL SYLLABLE CYEOH
        (0xcced <= codePoint && codePoint <= 0xcd07) || // Lo [27] HANGUL SYLLABLE CYEG..HANGUL SYLLABLE CYEH
        (0xcd09 <= codePoint && codePoint <= 0xcd23) || // Lo [27] HANGUL SYLLABLE COG..HANGUL SYLLABLE COH
        (0xcd25 <= codePoint && codePoint <= 0xcd3f) || // Lo [27] HANGUL SYLLABLE CWAG..HANGUL SYLLABLE CWAH
        (0xcd41 <= codePoint && codePoint <= 0xcd5b) || // Lo [27] HANGUL SYLLABLE CWAEG..HANGUL SYLLABLE CWAEH
        (0xcd5d <= codePoint && codePoint <= 0xcd77) || // Lo [27] HANGUL SYLLABLE COEG..HANGUL SYLLABLE COEH
        (0xcd79 <= codePoint && codePoint <= 0xcd93) || // Lo [27] HANGUL SYLLABLE CYOG..HANGUL SYLLABLE CYOH
        (0xcd95 <= codePoint && codePoint <= 0xcdaf) || // Lo [27] HANGUL SYLLABLE CUG..HANGUL SYLLABLE CUH
        (0xcdb1 <= codePoint && codePoint <= 0xcdcb) || // Lo [27] HANGUL SYLLABLE CWEOG..HANGUL SYLLABLE CWEOH
        (0xcdcd <= codePoint && codePoint <= 0xcde7) || // Lo [27] HANGUL SYLLABLE CWEG..HANGUL SYLLABLE CWEH
        (0xcde9 <= codePoint && codePoint <= 0xce03) || // Lo [27] HANGUL SYLLABLE CWIG..HANGUL SYLLABLE CWIH
        (0xce05 <= codePoint && codePoint <= 0xce1f) || // Lo [27] HANGUL SYLLABLE CYUG..HANGUL SYLLABLE CYUH
        (0xce21 <= codePoint && codePoint <= 0xce3b) || // Lo [27] HANGUL SYLLABLE CEUG..HANGUL SYLLABLE CEUH
        (0xce3d <= codePoint && codePoint <= 0xce57) || // Lo [27] HANGUL SYLLABLE CYIG..HANGUL SYLLABLE CYIH
        (0xce59 <= codePoint && codePoint <= 0xce73) || // Lo [27] HANGUL SYLLABLE CIG..HANGUL SYLLABLE CIH
        (0xce75 <= codePoint && codePoint <= 0xce8f) || // Lo [27] HANGUL SYLLABLE KAG..HANGUL SYLLABLE KAH
        (0xce91 <= codePoint && codePoint <= 0xceab) || // Lo [27] HANGUL SYLLABLE KAEG..HANGUL SYLLABLE KAEH
        (0xcead <= codePoint && codePoint <= 0xcec7) || // Lo [27] HANGUL SYLLABLE KYAG..HANGUL SYLLABLE KYAH
        (0xcec9 <= codePoint && codePoint <= 0xcee3) || // Lo [27] HANGUL SYLLABLE KYAEG..HANGUL SYLLABLE KYAEH
        (0xcee5 <= codePoint && codePoint <= 0xceff) || // Lo [27] HANGUL SYLLABLE KEOG..HANGUL SYLLABLE KEOH
        (0xcf01 <= codePoint && codePoint <= 0xcf1b) || // Lo [27] HANGUL SYLLABLE KEG..HANGUL SYLLABLE KEH
        (0xcf1d <= codePoint && codePoint <= 0xcf37) || // Lo [27] HANGUL SYLLABLE KYEOG..HANGUL SYLLABLE KYEOH
        (0xcf39 <= codePoint && codePoint <= 0xcf53) || // Lo [27] HANGUL SYLLABLE KYEG..HANGUL SYLLABLE KYEH
        (0xcf55 <= codePoint && codePoint <= 0xcf6f) || // Lo [27] HANGUL SYLLABLE KOG..HANGUL SYLLABLE KOH
        (0xcf71 <= codePoint && codePoint <= 0xcf8b) || // Lo [27] HANGUL SYLLABLE KWAG..HANGUL SYLLABLE KWAH
        (0xcf8d <= codePoint && codePoint <= 0xcfa7) || // Lo [27] HANGUL SYLLABLE KWAEG..HANGUL SYLLABLE KWAEH
        (0xcfa9 <= codePoint && codePoint <= 0xcfc3) || // Lo [27] HANGUL SYLLABLE KOEG..HANGUL SYLLABLE KOEH
        (0xcfc5 <= codePoint && codePoint <= 0xcfdf) || // Lo [27] HANGUL SYLLABLE KYOG..HANGUL SYLLABLE KYOH
        (0xcfe1 <= codePoint && codePoint <= 0xcffb) || // Lo [27] HANGUL SYLLABLE KUG..HANGUL SYLLABLE KUH
        (0xcffd <= codePoint && codePoint <= 0xd017) || // Lo [27] HANGUL SYLLABLE KWEOG..HANGUL SYLLABLE KWEOH
        (0xd019 <= codePoint && codePoint <= 0xd033) || // Lo [27] HANGUL SYLLABLE KWEG..HANGUL SYLLABLE KWEH
        (0xd035 <= codePoint && codePoint <= 0xd04f) || // Lo [27] HANGUL SYLLABLE KWIG..HANGUL SYLLABLE KWIH
        (0xd051 <= codePoint && codePoint <= 0xd06b) || // Lo [27] HANGUL SYLLABLE KYUG..HANGUL SYLLABLE KYUH
        (0xd06d <= codePoint && codePoint <= 0xd087) || // Lo [27] HANGUL SYLLABLE KEUG..HANGUL SYLLABLE KEUH
        (0xd089 <= codePoint && codePoint <= 0xd0a3) || // Lo [27] HANGUL SYLLABLE KYIG..HANGUL SYLLABLE KYIH
        (0xd0a5 <= codePoint && codePoint <= 0xd0bf) || // Lo [27] HANGUL SYLLABLE KIG..HANGUL SYLLABLE KIH
        (0xd0c1 <= codePoint && codePoint <= 0xd0db) || // Lo [27] HANGUL SYLLABLE TAG..HANGUL SYLLABLE TAH
        (0xd0dd <= codePoint && codePoint <= 0xd0f7) || // Lo [27] HANGUL SYLLABLE TAEG..HANGUL SYLLABLE TAEH
        (0xd0f9 <= codePoint && codePoint <= 0xd113) || // Lo [27] HANGUL SYLLABLE TYAG..HANGUL SYLLABLE TYAH
        (0xd115 <= codePoint && codePoint <= 0xd12f) || // Lo [27] HANGUL SYLLABLE TYAEG..HANGUL SYLLABLE TYAEH
        (0xd131 <= codePoint && codePoint <= 0xd14b) || // Lo [27] HANGUL SYLLABLE TEOG..HANGUL SYLLABLE TEOH
        (0xd14d <= codePoint && codePoint <= 0xd167) || // Lo [27] HANGUL SYLLABLE TEG..HANGUL SYLLABLE TEH
        (0xd169 <= codePoint && codePoint <= 0xd183) || // Lo [27] HANGUL SYLLABLE TYEOG..HANGUL SYLLABLE TYEOH
        (0xd185 <= codePoint && codePoint <= 0xd19f) || // Lo [27] HANGUL SYLLABLE TYEG..HANGUL SYLLABLE TYEH
        (0xd1a1 <= codePoint && codePoint <= 0xd1bb) || // Lo [27] HANGUL SYLLABLE TOG..HANGUL SYLLABLE TOH
        (0xd1bd <= codePoint && codePoint <= 0xd1d7) || // Lo [27] HANGUL SYLLABLE TWAG..HANGUL SYLLABLE TWAH
        (0xd1d9 <= codePoint && codePoint <= 0xd1f3) || // Lo [27] HANGUL SYLLABLE TWAEG..HANGUL SYLLABLE TWAEH
        (0xd1f5 <= codePoint && codePoint <= 0xd20f) || // Lo [27] HANGUL SYLLABLE TOEG..HANGUL SYLLABLE TOEH
        (0xd211 <= codePoint && codePoint <= 0xd22b) || // Lo [27] HANGUL SYLLABLE TYOG..HANGUL SYLLABLE TYOH
        (0xd22d <= codePoint && codePoint <= 0xd247) || // Lo [27] HANGUL SYLLABLE TUG..HANGUL SYLLABLE TUH
        (0xd249 <= codePoint && codePoint <= 0xd263) || // Lo [27] HANGUL SYLLABLE TWEOG..HANGUL SYLLABLE TWEOH
        (0xd265 <= codePoint && codePoint <= 0xd27f) || // Lo [27] HANGUL SYLLABLE TWEG..HANGUL SYLLABLE TWEH
        (0xd281 <= codePoint && codePoint <= 0xd29b) || // Lo [27] HANGUL SYLLABLE TWIG..HANGUL SYLLABLE TWIH
        (0xd29d <= codePoint && codePoint <= 0xd2b7) || // Lo [27] HANGUL SYLLABLE TYUG..HANGUL SYLLABLE TYUH
        (0xd2b9 <= codePoint && codePoint <= 0xd2d3) || // Lo [27] HANGUL SYLLABLE TEUG..HANGUL SYLLABLE TEUH
        (0xd2d5 <= codePoint && codePoint <= 0xd2ef) || // Lo [27] HANGUL SYLLABLE TYIG..HANGUL SYLLABLE TYIH
        (0xd2f1 <= codePoint && codePoint <= 0xd30b) || // Lo [27] HANGUL SYLLABLE TIG..HANGUL SYLLABLE TIH
        (0xd30d <= codePoint && codePoint <= 0xd327) || // Lo [27] HANGUL SYLLABLE PAG..HANGUL SYLLABLE PAH
        (0xd329 <= codePoint && codePoint <= 0xd343) || // Lo [27] HANGUL SYLLABLE PAEG..HANGUL SYLLABLE PAEH
        (0xd345 <= codePoint && codePoint <= 0xd35f) || // Lo [27] HANGUL SYLLABLE PYAG..HANGUL SYLLABLE PYAH
        (0xd361 <= codePoint && codePoint <= 0xd37b) || // Lo [27] HANGUL SYLLABLE PYAEG..HANGUL SYLLABLE PYAEH
        (0xd37d <= codePoint && codePoint <= 0xd397) || // Lo [27] HANGUL SYLLABLE PEOG..HANGUL SYLLABLE PEOH
        (0xd399 <= codePoint && codePoint <= 0xd3b3) || // Lo [27] HANGUL SYLLABLE PEG..HANGUL SYLLABLE PEH
        (0xd3b5 <= codePoint && codePoint <= 0xd3cf) || // Lo [27] HANGUL SYLLABLE PYEOG..HANGUL SYLLABLE PYEOH
        (0xd3d1 <= codePoint && codePoint <= 0xd3eb) || // Lo [27] HANGUL SYLLABLE PYEG..HANGUL SYLLABLE PYEH
        (0xd3ed <= codePoint && codePoint <= 0xd407) || // Lo [27] HANGUL SYLLABLE POG..HANGUL SYLLABLE POH
        (0xd409 <= codePoint && codePoint <= 0xd423) || // Lo [27] HANGUL SYLLABLE PWAG..HANGUL SYLLABLE PWAH
        (0xd425 <= codePoint && codePoint <= 0xd43f) || // Lo [27] HANGUL SYLLABLE PWAEG..HANGUL SYLLABLE PWAEH
        (0xd441 <= codePoint && codePoint <= 0xd45b) || // Lo [27] HANGUL SYLLABLE POEG..HANGUL SYLLABLE POEH
        (0xd45d <= codePoint && codePoint <= 0xd477) || // Lo [27] HANGUL SYLLABLE PYOG..HANGUL SYLLABLE PYOH
        (0xd479 <= codePoint && codePoint <= 0xd493) || // Lo [27] HANGUL SYLLABLE PUG..HANGUL SYLLABLE PUH
        (0xd495 <= codePoint && codePoint <= 0xd4af) || // Lo [27] HANGUL SYLLABLE PWEOG..HANGUL SYLLABLE PWEOH
        (0xd4b1 <= codePoint && codePoint <= 0xd4cb) || // Lo [27] HANGUL SYLLABLE PWEG..HANGUL SYLLABLE PWEH
        (0xd4cd <= codePoint && codePoint <= 0xd4e7) || // Lo [27] HANGUL SYLLABLE PWIG..HANGUL SYLLABLE PWIH
        (0xd4e9 <= codePoint && codePoint <= 0xd503) || // Lo [27] HANGUL SYLLABLE PYUG..HANGUL SYLLABLE PYUH
        (0xd505 <= codePoint && codePoint <= 0xd51f) || // Lo [27] HANGUL SYLLABLE PEUG..HANGUL SYLLABLE PEUH
        (0xd521 <= codePoint && codePoint <= 0xd53b) || // Lo [27] HANGUL SYLLABLE PYIG..HANGUL SYLLABLE PYIH
        (0xd53d <= codePoint && codePoint <= 0xd557) || // Lo [27] HANGUL SYLLABLE PIG..HANGUL SYLLABLE PIH
        (0xd559 <= codePoint && codePoint <= 0xd573) || // Lo [27] HANGUL SYLLABLE HAG..HANGUL SYLLABLE HAH
        (0xd575 <= codePoint && codePoint <= 0xd58f) || // Lo [27] HANGUL SYLLABLE HAEG..HANGUL SYLLABLE HAEH
        (0xd591 <= codePoint && codePoint <= 0xd5ab) || // Lo [27] HANGUL SYLLABLE HYAG..HANGUL SYLLABLE HYAH
        (0xd5ad <= codePoint && codePoint <= 0xd5c7) || // Lo [27] HANGUL SYLLABLE HYAEG..HANGUL SYLLABLE HYAEH
        (0xd5c9 <= codePoint && codePoint <= 0xd5e3) || // Lo [27] HANGUL SYLLABLE HEOG..HANGUL SYLLABLE HEOH
        (0xd5e5 <= codePoint && codePoint <= 0xd5ff) || // Lo [27] HANGUL SYLLABLE HEG..HANGUL SYLLABLE HEH
        (0xd601 <= codePoint && codePoint <= 0xd61b) || // Lo [27] HANGUL SYLLABLE HYEOG..HANGUL SYLLABLE HYEOH
        (0xd61d <= codePoint && codePoint <= 0xd637) || // Lo [27] HANGUL SYLLABLE HYEG..HANGUL SYLLABLE HYEH
        (0xd639 <= codePoint && codePoint <= 0xd653) || // Lo [27] HANGUL SYLLABLE HOG..HANGUL SYLLABLE HOH
        (0xd655 <= codePoint && codePoint <= 0xd66f) || // Lo [27] HANGUL SYLLABLE HWAG..HANGUL SYLLABLE HWAH
        (0xd671 <= codePoint && codePoint <= 0xd68b) || // Lo [27] HANGUL SYLLABLE HWAEG..HANGUL SYLLABLE HWAEH
        (0xd68d <= codePoint && codePoint <= 0xd6a7) || // Lo [27] HANGUL SYLLABLE HOEG..HANGUL SYLLABLE HOEH
        (0xd6a9 <= codePoint && codePoint <= 0xd6c3) || // Lo [27] HANGUL SYLLABLE HYOG..HANGUL SYLLABLE HYOH
        (0xd6c5 <= codePoint && codePoint <= 0xd6df) || // Lo [27] HANGUL SYLLABLE HUG..HANGUL SYLLABLE HUH
        (0xd6e1 <= codePoint && codePoint <= 0xd6fb) || // Lo [27] HANGUL SYLLABLE HWEOG..HANGUL SYLLABLE HWEOH
        (0xd6fd <= codePoint && codePoint <= 0xd717) || // Lo [27] HANGUL SYLLABLE HWEG..HANGUL SYLLABLE HWEH
        (0xd719 <= codePoint && codePoint <= 0xd733) || // Lo [27] HANGUL SYLLABLE HWIG..HANGUL SYLLABLE HWIH
        (0xd735 <= codePoint && codePoint <= 0xd74f) || // Lo [27] HANGUL SYLLABLE HYUG..HANGUL SYLLABLE HYUH
        (0xd751 <= codePoint && codePoint <= 0xd76b) || // Lo [27] HANGUL SYLLABLE HEUG..HANGUL SYLLABLE HEUH
        (0xd76d <= codePoint && codePoint <= 0xd787) || // Lo [27] HANGUL SYLLABLE HYIG..HANGUL SYLLABLE HYIH
        (0xd789 <= codePoint && codePoint <= 0xd7a3) // Lo [27] HANGUL SYLLABLE HIG..HANGUL SYLLABLE HIH
    ) {
        return GraphemeBreakProperty.LVT
    }

    if (
        0x261d == codePoint || // So WHITE UP POINTING INDEX
        0x26f9 == codePoint || // So PERSON WITH BALL
        (0x270a <= codePoint && codePoint <= 0x270d) || // So [4] RAISED FIST..WRITING HAND
        0x1f385 == codePoint || // So FATHER CHRISTMAS
        (0x1f3c2 <= codePoint && codePoint <= 0x1f3c4) || // So [3] SNOWBOARDER..SURFER
        0x1f3c7 == codePoint || // So HORSE RACING
        (0x1f3ca <= codePoint && codePoint <= 0x1f3cc) || // So [3] SWIMMER..GOLFER
        (0x1f442 <= codePoint && codePoint <= 0x1f443) || // So [2] EAR..NOSE
        (0x1f446 <= codePoint && codePoint <= 0x1f450) || // So [11] WHITE UP POINTING BACKHAND INDEX..OPEN HANDS SIGN
        0x1f46e == codePoint || // So POLICE OFFICER
        (0x1f470 <= codePoint && codePoint <= 0x1f478) || // So [9] BRIDE WITH VEIL..PRINCESS
        0x1f47c == codePoint || // So BABY ANGEL
        (0x1f481 <= codePoint && codePoint <= 0x1f483) || // So [3] INFORMATION DESK PERSON..DANCER
        (0x1f485 <= codePoint && codePoint <= 0x1f487) || // So [3] NAIL POLISH..HAIRCUT
        0x1f4aa == codePoint || // So FLEXED BICEPS
        (0x1f574 <= codePoint && codePoint <= 0x1f575) || // So [2] MAN IN BUSINESS SUIT LEVITATING..SLEUTH OR SPY
        0x1f57a == codePoint || // So MAN DANCING
        0x1f590 == codePoint || // So RAISED HAND WITH FINGERS SPLAYED
        (0x1f595 <= codePoint && codePoint <= 0x1f596) || // So [2] REVERSED HAND WITH MIDDLE FINGER EXTENDED..RAISED HAND WITH PART BETWEEN MIDDLE AND RING FINGERS
        (0x1f645 <= codePoint && codePoint <= 0x1f647) || // So [3] FACE WITH NO GOOD GESTURE..PERSON BOWING DEEPLY
        (0x1f64b <= codePoint && codePoint <= 0x1f64f) || // So [5] HAPPY PERSON RAISING ONE HAND..PERSON WITH FOLDED HANDS
        0x1f6a3 == codePoint || // So ROWBOAT
        (0x1f6b4 <= codePoint && codePoint <= 0x1f6b6) || // So [3] BICYCLIST..PEDESTRIAN
        0x1f6c0 == codePoint || // So BATH
        0x1f6cc == codePoint || // So SLEEPING ACCOMMODATION
        (0x1f918 <= codePoint && codePoint <= 0x1f91c) || // So [5] SIGN OF THE HORNS..RIGHT-FACING FIST
        (0x1f91e <= codePoint && codePoint <= 0x1f91f) || // So [2] HAND WITH INDEX AND MIDDLE FINGERS CROSSED..I LOVE YOU HAND SIGN
        0x1f926 == codePoint || // So FACE PALM
        (0x1f930 <= codePoint && codePoint <= 0x1f939) || // So [10] PREGNANT WOMAN..JUGGLING
        (0x1f93d <= codePoint && codePoint <= 0x1f93e) || // So [2] WATER POLO..HANDBALL
        (0x1f9d1 <= codePoint && codePoint <= 0x1f9dd) // So [13] ADULT..ELF
    ) {
        return GraphemeBreakProperty.E_Base
    }

    if (
        0x1f3fb <= codePoint &&
        codePoint <= 0x1f3ff // Sk [5] EMOJI MODIFIER FITZPATRICK TYPE-1-2..EMOJI MODIFIER FITZPATRICK TYPE-6
    ) {
        return GraphemeBreakProperty.E_Modifier
    }

    if (
        0x200d == codePoint // Cf ZERO WIDTH JOINER
    ) {
        return GraphemeBreakProperty.ZWJ
    }

    if (
        0x2640 == codePoint || // So FEMALE SIGN
        0x2642 == codePoint || // So MALE SIGN
        (0x2695 <= codePoint && codePoint <= 0x2696) || // So [2] STAFF OF AESCULAPIUS..SCALES
        0x2708 == codePoint || // So AIRPLANE
        0x2764 == codePoint || // So HEAVY BLACK HEART
        0x1f308 == codePoint || // So RAINBOW
        0x1f33e == codePoint || // So EAR OF RICE
        0x1f373 == codePoint || // So COOKING
        0x1f393 == codePoint || // So GRADUATION CAP
        0x1f3a4 == codePoint || // So MICROPHONE
        0x1f3a8 == codePoint || // So ARTIST PALETTE
        0x1f3eb == codePoint || // So SCHOOL
        0x1f3ed == codePoint || // So FACTORY
        0x1f48b == codePoint || // So KISS MARK
        (0x1f4bb <= codePoint && codePoint <= 0x1f4bc) || // So [2] PERSONAL COMPUTER..BRIEFCASE
        0x1f527 == codePoint || // So WRENCH
        0x1f52c == codePoint || // So MICROSCOPE
        0x1f5e8 == codePoint || // So LEFT SPEECH BUBBLE
        0x1f680 == codePoint || // So ROCKET
        0x1f692 == codePoint // So FIRE ENGINE
    ) {
        return GraphemeBreakProperty.Glue_After_Zwj
    }

    if (
        0x1f466 <= codePoint &&
        codePoint <= 0x1f469 // So [4] BOY..WOMAN
    ) {
        return GraphemeBreakProperty.E_Base_GAZ
    }

    //all unlisted characters have a grapheme break property of "Other"
    return GraphemeBreakProperty.Other
}
