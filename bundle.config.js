module.exports = {
    bundle: {
        main: {
            scripts: [
                './app/**/*.js',
                './node_modules/@angular/platform-browser-dynamic/platform-browser-dynamic.umd.js',
                './node_modules/@angular/platform-browser/platform-browser.umd.js',
                './node_modules/@angular/http/*.js',
                './node_modules/rxjs/*.js',
                './node_modules/rxjs/**/*.js',
                './node_modules/@angular/core/*.js',
                './node_modules/@angular/compiler/*.js',
                './node_modules/@angular/router-deprecated/*.js',
                './node_modules/@angular/common/common.umd.js'
            ]
        }
    }
};
