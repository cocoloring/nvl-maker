import type { Complete } from '@nvl-maker/type-helper'

import { CoreConfig, OS, Platform, WindowMode } from '../types/CoreConfig'

export function coreConfigInitialization(
    options?: CoreConfig,
): Complete<CoreConfig> {
    const opts: CoreConfig = { ...options } ?? {}
    opts.os ??= OS.Window
    opts.windowSize ??= [0, 0]
    opts.windowSize[0] ??= 0
    opts.windowSize[1] ??= 0
    opts.platform ??= Platform.Web
    switch (opts.platform) {
        case Platform.Web: {
            opts.windowMode ??= WindowMode.AsFullScreenElement
            break
        }
        case Platform.Desktop: {
            opts.windowMode ??= WindowMode.FullScreen
            break
        }
        case Platform.Web: {
            opts.windowMode ??= WindowMode.AsFullScreenElement
            break
        }
        case Platform.Desktop: {
            opts.windowMode ??= WindowMode.FullScreen
            break
        }
        default: {
        }
    }
    return opts as unknown as Complete<CoreConfig>
}
