// import { Component, OnInit,  } from '@angular/core';
// import { Router }            from '@angular/router-deprecated';
// import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { RouteParams } from '@angular/router-deprecated';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Item }         from './blog';
import { BlogService }  from './blog.service';

@Component({
    selector: 'Blogpost',
    templateUrl: 'app/blog/blogpost.component.html'
})

export class BlogpostComponent implements OnInit {
    @Input() item: Item;

    constructor(
        private blogService: BlogService,
        private routeParams: RouteParams) {
    }

    ngOnInit() {
        if (this.routeParams.get('id') !== null) {
            let id = this.routeParams.get('id');
            //this.navigated = true;
            this.blogService.getItem(id)
                .then(item => this.item = item);
        } else {
            //this.navigated = false;
            this.item = new Item();
            this.item.title = "fail";
        }
    }
}
