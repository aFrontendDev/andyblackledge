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
var blog_service_1 = require('./blog.service');
var blogpost_component_1 = require('./blogpost.component');
var Item = (function () {
    function Item() {
    }
    return Item;
}());
exports.Item = Item;
var BlogComponent = (function () {
    function BlogComponent(router, blogService) {
        this.router = router;
        this.blogService = blogService;
    }
    BlogComponent.prototype.ngOnInit = function () {
        this.getItems();
    };
    BlogComponent.prototype.getItems = function () {
        var _this = this;
        this.blogService
            .getItems()
            .then(function (items) { return _this.items = items; })
            .catch(function (error) { return _this.error = error; });
        // this.http.get('http://localhost:4000/getData')
        //     .map((res:Response) => res.json())
        //     .subscribe(
        //         data => {this.items = data},
        //         err => console.log(err)
        // );
    };
    BlogComponent.prototype.onSelect = function (item) {
        this.selectedItem = item;
        this.router.navigate(['Blogpost', { id: this.selectedItem._id }]);
    };
    BlogComponent = __decorate([
        core_1.Component({
            selector: 'Blog',
            templateUrl: 'app/blog/blog.component.html',
            directives: [blogpost_component_1.BlogpostComponent],
            providers: [blog_service_1.BlogService]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, blog_service_1.BlogService])
    ], BlogComponent);
    return BlogComponent;
}());
exports.BlogComponent = BlogComponent;
//# sourceMappingURL=blog.component.js.map