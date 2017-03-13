import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api/api.service'; 
import { Todo } from '../../todo';

@Component({
    selector: 'history',
    template: `
			<div style="height:5px;"></div>

			<p-messages [value]="msgs"></p-messages>

			<div style="height:5px;"></div>

			<div style="color:rgb(150,150,150);">
				목표 리스트
			</div>

			<div style="height:10px;"></div>

			<div *ngFor="let todo of apiService.todos" style="margin-bottom:10px;" >
				<p-checkbox  class="todo" name="todolist" value="{{todo.id}}" label="{{todo.goal}}" [(ngModel)]="selectedItems" disabled="true"></p-checkbox>
			</div>
			
			<div style="height:5px;"></div>
		`,
    styles: [`
		`]
})
export class HistoryComponent implements OnInit {

	selectedItems: string[] = [];

	constructor(
		private router: Router,
		private apiService: ApiService
	){}

	getTodos(): void {
		this.apiService.getHistory()
			.then(()=>{
				console.log(this.apiService.todos.length);
				for (let i = 0 ; i < this.apiService.todos.length; i++){
					const todo = this.apiService.todos[i];	
					if (todo.isCompleted){
						this.selectedItems.push(todo.id);						
					}
				}
			});
	}

	ngOnInit(): void {
		this.getTodos();			
	}
}
