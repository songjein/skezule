import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http'; 
import 'rxjs/add/operator/toPromise';

import { Todo } from '../../todo';

@Injectable()
export class ApiService{
	private todosUrl = 'api/todos';
	private todosOfUrl = 'api/todosOf';
	
	// todo list shared by other components
	todos: Todo[];

	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	//getTodos(): Promise<Todo[]> {
	// 아.. promise로 하는 대신, return만 안할 뿐이니까..!!
	getTodos(): void {
		return this.http.get(this.todosUrl)
			.toPromise()
			.then(response => { 
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

	createTodo(goal: string, from: Date, to: Date): void{
		return this.http
			.post(this.todosUrl 
				,JSON.stringify({goal: goal, from: from, to: to})
				,{headers: this.headers})
			.toPromise()
			.then(res => {
				const todo = res.json()
				todos.push(todo);
			})
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('error!!!', error);
		return Promise.reject(error.message || error);
	}
}
