import { Component, OnInit, Input } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { BlogService }         from './blog.service';
import { BlogpostComponent } from './blogpost.component';

export class Item {
    _id: number;
    title: string;
    date: any;
    dateText: string;
}

@Component({
    selector: 'Blog',
    templateUrl: 'app/blog/blog.component.html',
    directives: [BlogpostComponent],
    providers: [BlogService]
})

export class BlogComponent {
    //public items: Item;
    items: Item[];
    selectedItem: Item;
    error: any;

    constructor(
        private router: Router,
        private blogService: BlogService
    ) {}

    ngOnInit() {
        this.getItems();
    }

    getItems() {
        this.blogService
        .getItems()
        .then(items => this.items = items)
        .catch(error => this.error = error);
        // this.http.get('http://localhost:4000/getData')
        //     .map((res:Response) => res.json())
        //     .subscribe(
        //         data => {this.items = data},
        //         err => console.log(err)
        // );
    }

    onSelect(item: Item) {
        this.selectedItem = item;
        this.router.navigate(['Blogpost', { id: this.selectedItem._id }]);
    }
}