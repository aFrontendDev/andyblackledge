import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';


import {PageAComponent} from './page_a/Page_A.component';
import {PageBComponent} from './page_b/Page_B.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS
    ]
})

@RouteConfig([
    {path: '/Page_A', name: 'Page_A', component: PageAComponent},
    {path: '/Page_B', name: 'Page_B', component: PageBComponent}
])

export class AppComponent {
    title = "Angular 2 Template";
}