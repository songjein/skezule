import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'list',
    template: `
			<div *ngFor="let todo of todos" style="margin-bottom:10px;" >
				<p-checkbox  class="todo" name="todolist" value="{{todo.goal}}" label="{{todo.goal}}" (onChange)="gotoFinsh(todo.id)" [(ngModel)]="selectedItem">abc</p-checkbox>
			</div>
			
			<div style="height:10px;"></div>

			<a [routerLink]="['/form']" style="margin-left: 10px;">
				<div class="icon">
						+ 
				</div>
			</a>  

			<a [routerLink]="['/stat']" style="margin-left: 10px;">
				<div class="icon">
					<i class="fa fa-bar-chart" aria-hidden="true"></i>
				</div>
			</a>  
		`,
    styles: [`
			.icon {
				border-radius: 5px;
				border: 1px solid gray;
				font-size: 2em;
				max-width: 400px;
				text-align: center;
				color: gray;
				margin: 5px 0 ;
			}
		`]
})
export class ListComponent {

	selectedItem: string[] = [];

	finishlog: string;

	todos: any[] = [
		{id: 1, goal: "#코딩, Feeld 개발 (contents controllbar.. )"},
		{id: 2, goal: "#운동, 머리 가슴 배 3세트"},
		{id: 3, goal: "신한은행"},
		{id: 4, goal: "교수님 미팅 준비"},
		{id: 5, goal: "#게임, 파판 레벨업"},
		{id: 6, goal: "#코딩 #독서, 코딩의 기술 읽기"},
		{id: 7, goal: "#독서, 수학이 좋아지는 수학 읽기"},
		{id: 8, goal: "#영어, 영어 공부 1회"},
	];

	constructor(
		private router: Router
	){}

	onClick(){
		alert('제출');	
	}

	gotoFinsh(id: integer){
		this.router.navigate(['/complete', id]);
	}
}
