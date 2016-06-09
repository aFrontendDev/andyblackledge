import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router-deprecated';

import { Item }         from './blog';
import { BlogService }         from './blog.service';
import { BlogpostComponent } from './blogpost.component';

@Component({
    selector: 'Blog',
    templateUrl: 'app/blog/blog.component.html',
    directives: [BlogpostComponent]
})

export class BlogComponent implements OnInit {
    items: Item[];
    selectedItem: Item;
    error: any;

    constructor(
        private router: Router,
        private blogService: BlogService) {}

    getItems() {
        this.blogService
        .getItems()
        .then(items => this.items = items)
        .catch(error => this.error = error);
    }

     ngOnInit() {
        this.getItems();
    }

    onSelect(item: Item) {
        this.selectedItem = item;
        this.router.navigate(['BlogDetail', { id: this.selectedItem._id }]);
    }
}