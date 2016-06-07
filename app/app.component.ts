import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';


import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {Work_HistoryComponent} from './work_history/work_history.component';
import {BlogComponent} from './blog/blog.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS
    ]
})

@RouteConfig([
    {path: '/**', name: 'Home', component: HomeComponent},
    {path: '/about', name: 'About', component: AboutComponent},
    {path: '/work_history', name: 'Work_History', component: Work_HistoryComponent},
    {path: '/blog', name: 'Blog', component: BlogComponent}
])

export class AppComponent {
    title = "andyblackledge";
}