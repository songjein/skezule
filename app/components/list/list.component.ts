import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api/api.service'; 
import { Todo } from '../../todo';

@Component({
    selector: 'list',
    template: `
			<div style="height:5px;"></div>

			<p-messages [value]="msgs"></p-messages>

			<div style="height:5px;"></div>

			<div style="color:rgb(150,150,150);">
				오늘 할일
			</div>

			<div style="height:10px;"></div>

			<div *ngFor="let todo of apiService.todos" style="margin-bottom:10px;" >
				<p-checkbox *ngIf="todo.tag_list.length == 0" class="todo" name="todolist" value="{{todo.id}}" label="{{todo.goal}}" [(ngModel)]="selectedItems"></p-checkbox>
				<p-checkbox *ngIf="todo.tag_list.length > 0" class="todo" name="todolist" value="{{todo.id}}" label="[{{todo.tag_list}}] {{todo.goal}}" [(ngModel)]="selectedItems"></p-checkbox>
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

			<div style="height:10px;"></div>

			<textarea pInputTextarea autoResize="autoResize" rows="5" cols="30" placeholder="메모장" [(ngModel)]="memo" (keyup)="onChangeMemo()" ></textarea>

		`,
    styles: [`
		`]
})
export class ListComponent implements OnInit, onDestroy {

	msgs: Message[] = [];

	selectedItems: string[] = [];

	finishlog: string;

	todos: Todo[];

	memo: string;
	memoChanged: boolean = false;
	memoIntervalId: any;

	constructor(
		private router: Router,
		private apiService: ApiService
	){}

	onClick(){
		alert('제출');	
	}

	finishWithLog(){
		if (this.selectedItems.length == 0){
			this.msgs = [];
			this.msgs.push({severity:'warn', summary:'', detail:'완료할 목표를 선택해주세요'});
			return;
		}
		this.router.navigate(['/complete', this.selectedItems.join(",")]);
	}

	finishSimple(){
		if (this.selectedItems.length == 0){
			this.msgs = [];
			this.msgs.push({severity:'warn', summary:'', detail:'완료할 목표를 선택해주세요'});
			return;
		}
		alert("완료");	
	}

	getTodos(): void {
		//this.apiService.getTodos().then(todos => this.todos = todos);
		this.apiService.getTodos();
	}

	getMemo(): void {
		this.apiService.getMemo().then((memo)=>{
			this.memo = memo;
		});		
	}

	onChangeMemo(): void {
		this.memoChanged = true;
	}

	updateMemo(): void {
		// send memo to server 
		this.memoIntervalId = setInterval(()=>{
			if (this.memoChanged){
				this.apiService.updateMemo(this.memo).then(()=>{
					this.memoChanged = false;
				});
			}
		}, 5000);
	}

	ngOnInit(): void {
		console.log("create list");
		this.getTodos();			
		this.getMemo();
		this.updateMemo();
	}

	ngOnDestroy():{
		// not called..
		clearInterval(this.memoIntervalId);
	}
}
