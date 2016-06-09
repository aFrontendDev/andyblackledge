import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Item }         from './blog';

@Injectable()

export class BlogService {
    
    private blogUrl = 'http://localhost:4000/getData';  // URL to web api
    
    constructor(private http: Http) { }
  
    getItems(): Promise<Item[]> {
	      return this.http.get(this.blogUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getItem(id: any) {
        return this.getItems()
            .then(items => items.filter(item => item._id === id)[0]);
    }

    private handleError(error: any) {
        console.log('An error occurred');
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
