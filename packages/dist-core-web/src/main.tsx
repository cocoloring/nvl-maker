import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { App } from './App'
;(function main(): void {
    const rootElement = document.createElement('div')
    document.body.appendChild(rootElement)
    ReactDOM.render(<App />, rootElement)
})()
