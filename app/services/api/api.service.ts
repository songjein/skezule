import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http'; 
import 'rxjs/add/operator/toPromise';

import { Todo } from '../../todo';

@Injectable()
export class ApiService{
	private todosUrl = 'http://skezule.me:3000/todos';
	private todosOfUrl = 'http://skezule.me:3000/todosOf';
	
	// todo list shared by other components
	todos: Todo[];

	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	getTodos(): Promise<void> {
		return this.http.get(this.todosUrl)
			.toPromise()
			.then(response => { 
				console.log("ress!!", response)
				this.todos = response.json() as Todo[];
			})
			.catch(this.handleError);
	}

	getTodosOf(selectedTodos: string): Promise<Todo[]>{
		return this.http.get(this.todosOfUrl + "/" + selectedTodos)
			.toPromise()
			.then(response => response.json() as Todo[])
			.catch(this.handleError);
	}

	createTodo(goal: string, from: Date, to: Date): Promise<void>{
		return this.http
			.post(this.todosUrl
				,JSON.stringify({goal: goal, from: from, to: to})
				,{headers: this.headers})
			.toPromise()
			.then(res => {
				//const todo = res.json()
				// 암것도 안해도되네, list의 onInit에서 알아서 다시가져오네 보니까
			})
			.catch(this.handleError);
	}

	completeTodos(selectedTodos: string, log: string): Promise<void>{
		// http://stackoverflow.com/questions/39607971/angular-2-http-delete-send-json-in-body
		return this.http
			.post(this.todosUrl + "/complete"
				,JSON.stringify({selectedTodos: selectedTodos,log: log})
				,{headers: this.headers})
			.toPromise()
			.then(res => {
				// const todos = res.json();	
				// 암것도 안해도되네, list의 onInit에서 알아서 다시가져오네 보니까
			})
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('error!!!', error);
		return Promise.reject(error.message || error);
	}
}
