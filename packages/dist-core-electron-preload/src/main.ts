import { contextBridge } from 'electron'

// Expose some protected methods
contextBridge.exposeInMainWorld('__api__', {
    methodName: () => {
        // rest code...
    },
})
