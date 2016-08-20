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
var common_1 = require('@angular/common');
var BlogFormComponent = (function () {
    function BlogFormComponent(fb) {
        this.blogForm = fb.group({
            title: ["", common_1.Validators.required],
            body: ["", common_1.Validators.required]
        });
    }
    BlogFormComponent.prototype.doBlog = function (event) {
        console.log(this.blogForm.value);
        event.preventDefault();
    };
    BlogFormComponent = __decorate([
        core_1.Component({
            selector: 'Blog-Form',
            templateUrl: 'app/blog/blogform.component.html'
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder])
    ], BlogFormComponent);
    return BlogFormComponent;
}());
exports.BlogFormComponent = BlogFormComponent;
// title; date; dateText; body
//# sourceMappingURL=blogform.component.js.map