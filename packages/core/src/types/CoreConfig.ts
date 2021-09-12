export enum Platform {
    Web = 0, // on websites
    Desktop = 1, // on desktop PCs or
    Phone = 2, // on phones like iPhone or android phone
    Tablet = 3, // on tablet PCs like iPad or all android tablets
}

export enum OS {
    Window = 0, // window
    MacOS = 1, // on macOS
    Android = 2, // on Android phone or Android tablet
    IOS = 3, // iOS system, like iPhone or iOS
}

export enum WindowMode {
    Windowed = 0, // desktop only
    FullScreen = 1, // desktop, phone, tablet only
    VerticalFullScreen = 2, // phone, tablet
    AsElement = 3, // web only
    AsFullScreenElement = 4, // web only
}

export type SizeArray = [number, number]

export interface CoreConfig {
    platform?: Platform
    os?: OS
    windowMode?: WindowMode
    windowSize?: SizeArray
}
