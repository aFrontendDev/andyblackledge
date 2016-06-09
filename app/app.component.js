"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var home_component_1 = require('./home/home.component');
var about_component_1 = require('./about/about.component');
var work_component_1 = require('./work/work.component');
var blog_component_1 = require('./blog/blog.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = "andyblackledge";
        this.showMenu = false;
    }
    AppComponent.prototype.onMenuButtonClick = function () {
        this.showMenu = !this.showMenu;
    };
    AppComponent.prototype.onNavButtonClick = function () {
        this.showMenu = false;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS
            ]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/', name: 'Home', component: home_component_1.HomeComponent },
            { path: '/about', name: 'About', component: about_component_1.AboutComponent },
            { path: '/work', name: 'Work', component: work_component_1.WorkComponent },
            { path: '/blog', name: 'Blog', component: blog_component_1.BlogComponent },
            { path: '**', name: 'Home', component: home_component_1.HomeComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map