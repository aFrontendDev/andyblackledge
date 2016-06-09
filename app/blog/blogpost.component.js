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
// import { Component, OnInit,  } from '@angular/core';
// import { Router }            from '@angular/router-deprecated';
// import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { RouteParams } from '@angular/router-deprecated';
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var blog_1 = require('./blog');
var blog_service_1 = require('./blog.service');
var BlogpostComponent = (function () {
    function BlogpostComponent(blogService, routeParams) {
        this.blogService = blogService;
        this.routeParams = routeParams;
    }
    BlogpostComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.routeParams.get('id') !== null) {
            var id = this.routeParams.get('id');
            //this.navigated = true;
            this.blogService.getItem(id)
                .then(function (item) { return _this.item = item; });
        }
        else {
            //this.navigated = false;
            this.item = new blog_1.Item();
            this.item.title = "fail";
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', blog_1.Item)
    ], BlogpostComponent.prototype, "item", void 0);
    BlogpostComponent = __decorate([
        core_1.Component({
            selector: 'Blogpost',
            templateUrl: 'app/blog/blogpost.component.html'
        }), 
        __metadata('design:paramtypes', [blog_service_1.BlogService, router_deprecated_1.RouteParams])
    ], BlogpostComponent);
    return BlogpostComponent;
}());
exports.BlogpostComponent = BlogpostComponent;
//# sourceMappingURL=blogpost.component.js.map