module.exports = {
    'rootDir': './',
    'verbose': true,
    'collectCoverage': true,
    'testEnvironment': 'node',
    'testURL': 'http://localhost',
    'collectCoverageFrom': [
        // "**/app_modules/**",
        // "**/*.{js,jsx}",
        "**/src/components/**",
        "**/src/hoc/MasterCardWidget/**",
        // ignore components and patterns in coverage report//
        "!**/*.{snap,less}",
        "!**/src/json/**",
        "!**/src/components/Amchart/**",
        "!**/src/components/MasterAmcharts/**",
        "!**/src/components/MasterTab/Clinician**",
        "!**/src/components/MasterTab/Practice**",
        "!**/src/components/Search/**",
        "!**/src/components/MasterAccordian/**",
        "!**/src/components/MasterDataTables/**",
        "!**/src/components/MasterIndicators/**",
        "!**/src/components/MasterLagends/**",
        "!**/src/components/MasterNotifications/**",
        "!**/src/components/MasterProgressBar/**",
        "!**/src/components/MasterUserProfile/**",
        "!**/src/components/MasterUserSettings/**",
        /*---------------------------------*/
    ],
    'coverageDirectory': '<rootDir>/coverage',
    'testEnvironment': 'jsdom',
    //'automock' : true,
    // 'moduleFileExtensions': [
    // 'js'
    // ],
    "reporters": [
        "default",
        ["./node_modules/jest-html-reporter", {
            "pageTitle": "Test Report"
        }]
    ],
    //'automock' : true,
    // 'moduleFileExtensions': [
    // 'js'
    // ],
    'transform': {
        "^.+\\.jsx$": "babel-jest",
        "^.+\\.js$": "babel-jest",
        ".+\\.(css|styl|less|sass|scss)$": "<rootDir>/node_modules/jest-css-modules-transform"
    },
    'coverageThreshold': {
        'global': {
            'branches': 0,
            'functions': 0,
            'lines': 0,
            'statements': 0
        }
    }
}