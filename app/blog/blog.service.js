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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var Item = (function () {
    function Item() {
    }
    return Item;
}());
exports.Item = Item;
var BlogService = (function () {
    function BlogService(http) {
        this.http = http;
        this.blogUrl = 'http://localhost:4000/getData'; // URL to web api
    }
    BlogService.prototype.getItems = function () {
        return this.http.get(this.blogUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    // this.http.get('http://localhost:4000/getData')
    //     .map((res:Response) => res.json())
    //     .subscribe(
    //         data => {this.items = data},
    //         err => console.log(err)
    // );
    BlogService.prototype.getItem = function (id) {
        return this.getItems()
            .then(function (items) { return items.filter(function (item) { return item._id === id; })[0]; });
    };
    BlogService.prototype.handleError = function (error) {
        console.log('An error occurred');
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    BlogService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BlogService);
    return BlogService;
}());
exports.BlogService = BlogService;
//# sourceMappingURL=blog.service.js.map