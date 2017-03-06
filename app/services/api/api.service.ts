import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Todo } from '../../todo';

@Injectable()
export class ApiService{
	private apiUrl = 'api/todos';

	constructor(private http: Http) { }

	getTodos(): Promise<Todo[]> {
		return this.http.get(this.apiUrl)
			.toPromise()
			.then(response => { 
				return response.json() as Todo[];
			})
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('error!!!', error);
		return Promise.reject(error.message || error);
	}
}
