module.exports = {
    transformIgnorePatterns: ['node_modules'],
    transform: {
        '^.+\\.ts?$': 'ts-jest',
        '^.+\\.tsx?$': 'ts-jest'
    },
    verbose: false,
    globals: {
        NODE_ENV: 'test'
    },
    coveragePathIgnorePatterns: ['node_modules/', 'config/'],
    moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx'],
    testPathIgnorePatterns: ['node_modules'],
    rootDir: '../',
    testURL: 'https://localhost:3030',
    setupFilesAfterEnv: ['<rootDir>/config/setupTests.ts']
};
