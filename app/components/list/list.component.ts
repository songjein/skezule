import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api/api.service'; 
import { Todo } from '../../todo';

@Component({
    selector: 'list',
    template: `
			<div style="height:5px;"></div>

			<div style="color:rgb(150,150,150);">
				오늘 할일
			</div>

			<div style="height:10px;"></div>

			<div *ngFor="let todo of apiService.todos" style="margin-bottom:10px;" >
				<p-checkbox  class="todo" name="todolist" value="{{todo.id}}" label="{{todo.goal}}" [(ngModel)]="selectedItems">abc</p-checkbox>
			</div>
			
			<div style="height:5px;"></div>

			<a [routerLink]="['/form']" style="color:rgb(150,150,150);margin-left:5px;">
				<b>+</b> 작업 추가
			</a>  

			<div style="height:10px;"></div>

			<span style="color:rgb(255,144,0);margin-left:5px; cursor:pointer" (click)="finishSimple()">
				빠른 완료 
			</span>  
			<b style="color:rgb(150,150,150);">/</b> 
			<span style="color:rgb(255,144,0);margin-left:5px; cursor:pointer" (click)="finishWithLog()">
				로그와 함께 완료 
			</span>  

		`,
    styles: [`
		`]
})
export class ListComponent implements OnInit {

	selectedItems: string[] = [];

	finishlog: string;

	todos: Todo[];

	constructor(
		private router: Router,
		private apiService: ApiService
	){}

	onClick(){
		alert('제출');	
	}

	finishWithLog(){
		if (this.selectedItems.length == 0){
			alert("완료할 목표를 선택해 주세요");
			return;
		}
		this.router.navigate(['/complete', this.selectedItems.join(",")]);
	}

	finishSimple(){
		if (this.selectedItems.length == 0){
			alert("완료할 목표를 선택해 주세요");
			return;
		}
		alert("완료");	
	}

	getTodos(): void {
		//this.apiService.getTodos().then(todos => this.todos = todos);
		this.apiService.getTodos();
	}

	ngOnInit(): void {
		this.getTodos();			
	}
}
