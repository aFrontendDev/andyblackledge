import { Component, OnInit, Input } from '@angular/core';
//import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

export class Item {
    _id: number;
    title: string;
    date: any;
    dateText: string;
}

@Injectable()

export class BlogService {
  private blogUrl = 'http://localhost:4000/getData';  // URL to web api
  
  constructor(private http: Http) { }
  
  getItems(): Promise<Item[]> {
    return this.http.get(this.blogUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }

  // this.http.get('http://localhost:4000/getData')
  //     .map((res:Response) => res.json())
  //     .subscribe(
  //         data => {this.items = data},
  //         err => console.log(err)
  // );

  getItem(id: number) {
    return this.getItems()
               .then(items => items.filter(item => item._id === id)[0]);
  }

  private handleError(error: any) {
    console.log('An error occurred');
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
