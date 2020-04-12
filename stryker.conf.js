/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
    comment:
        'This config was generated using a preset. Please see the handbook for more information: https://github.com/stryker-mutator/stryker-handbook/blob/master/stryker/guides/react.md#react',
    mutate: [
        'src/**/*.ts?(x)',
        '!src/**/*@(.test).ts?(x)',
        '!src/**/*@(.style).ts',
        '!src/index.tsx',
        '!src/serviceWorker.ts'
    ],
    mutator: 'typescript',
    testRunner: 'jest',
    reporters: ['progress', 'clear-text', 'html'],
    coverageAnalysis: 'off',
    jest: {
        projectType: 'create-react-app'
    }
}
