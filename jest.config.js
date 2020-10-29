module.exports = {
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: [
        "**/lib/*.{js,jsx}",
        // "!**/lib/__tests__/mocks/*.js",
        "!**/node_modules/**",
        "!**/vendor/**",
        "!**/mocks/**"
    ]
};