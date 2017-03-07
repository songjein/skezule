import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../../services/api/api.service'; 

import { Todo } from '../../todo';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'complete',
    template: `
			<div style="color:rgb(150,150,150);">
				목표
			</div>
			<div *ngFor="let todo of selectedTodos">{{todo.goal}}</div>
			
			<div style="height: 10px"></div>

			<div style="color:rgb(150,150,150);">
				기록
			</div>
			<textarea pInputTextarea [(ngModel)]="finishlog" rows="5" style="width:300px"></textarea>

			<div style="height:10px"></div>

			<button pButton type="button" label="완료하기" class="ui-button-secondary" (click)="onclick()" ></button>

			<a [routerLink]="['/']"><button pButton type="button" label="취소하기" class="ui-button-secondary" ></button></a>
		`,
    styles: [`
		`]
})
export class CompleteComponent implements OnInit {
	selectedTodosIds: string;
	selectedTodos: Todo[];

	finishlog: string;

	constructor(
		private route: ActivatedRoute,
		private apiService: ApiService
	) {}

	onclick(){
		alert('제출');	
	}

	
	ngOnInit(): void {
		this.selectedTodosIds = this.route.snapshot.params["selectedTodos"];

		this.apiService	
			.getTodosOf(this.selectedTodosIds)
			.then((todos) => {
				this.selectedTodos = todos;
			});
	}
}
