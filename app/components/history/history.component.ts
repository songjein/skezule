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

			<div style="color:rgb(150,150,150); background:rgb(255,235,53);">
				목표했던 일들
			</div>

			<div style="height:10px;"></div>

			<div *ngFor="let todo of apiService.todos" style="margin-bottom:10px;" >
				<span *ngIf="todo.isCompleted">
					<p-checkbox  class="todo" name="todolist" value="{{todo.id}}" label="{{todo.goal}}" [(ngModel)]="selectedItems" disabled="true"></p-checkbox>
					<span style="font-size:0.7em; color:rgb(255,144,0);">(로그 보기-{{todo.log_id}})</span>
				</span>
				<span *ngIf="!todo.isCompleted" style="color:rgb(200,200,200)">
					<p-checkbox  class="todo" name="todolist" value="{{todo.id}}" label="{{todo.goal}}" [(ngModel)]="selectedItems" disabled="true"></p-checkbox>
				</span>
			</div>

			<div style="height:10px;"></div>

			<div style="color:rgb(150,150,150); background:rgb(255,235,53);">
				남긴 로그들
			</div>

			<div style="height:10px;"></div>

			<div *ngFor="let log of apiService.logs" style="margin-bottom:10px;">
				<div>{{log.body}}</div>
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

	getLogs(): void{
		this.apiService.getLogs();	
	}

	ngOnInit(): void {
		this.getTodos();			
		this.getLogs();
	}
}
