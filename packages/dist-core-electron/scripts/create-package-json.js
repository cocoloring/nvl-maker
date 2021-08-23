const path = require('path')
const fs = require('fs')

const originalPackageJson = require('../package.json')

const buildConfig = {
    appId: 'com.cocoloring.nvl.core',
}

const fullPackageJson = {
    main: 'main.js',
    devDependencies: {
        electron: originalPackageJson.devDependencies.electron,
    },
    build: buildConfig,
}

fs.writeFileSync(
    path.resolve(__dirname, '..', 'build', 'package.json'),
    JSON.stringify(fullPackageJson),
)
