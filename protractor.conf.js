exports.config = {
    //baseUrl: 'http://127.0.0.1:8080',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showTiming: true,
        showColors: true
    },
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        'tests/**/*.e2e.js'
    ],
    multiCapabilities: [{
        browserName: 'firefox'
    }, {
        browserName: 'chrome'
    }],
    useAllAngular2AppRoots: true
};

