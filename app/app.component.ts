import {Component} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';


import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {WorkComponent} from './work/work.component';
import {BlogComponent} from './blog/blog.component';
import { BlogService } from './blog/blog.service';
import {BlogpostComponent} from './blog/blogpost.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        BlogService,
    ]
})

@RouteConfig([
    {path: '/', name: 'Home', component: HomeComponent},
    {path: '/about', name: 'About', component: AboutComponent},
    {path: '/work', name: 'Work', component: WorkComponent},
    {path: '/blog', name: 'Blog', component: BlogComponent},
    {path: '/blog/:id', name: 'BlogDetail', component: BlogpostComponent },
    {path: '**', name: 'Home', component: HomeComponent}
])

export class AppComponent {
    title = "andyblackledge";
    showMenu: boolean = false;

    onMenuButtonClick() {
        this.showMenu = !this.showMenu;
    }

    onNavButtonClick() {
        this.showMenu = false;
    }
}
