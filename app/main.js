"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var app_component_1 = require('./app.component');
//bootstrap(AppComponent);
var core_1 = require('@angular/core');
core_1.enableProdMode();
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    http_1.HTTP_PROVIDERS
]);
//# sourceMappingURL=main.js.map