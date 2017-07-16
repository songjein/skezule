import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api/api.service'; 
import { AuthService } from '../../services/auth/auth.service'; 

import { Todo } from '../../todo';

@Component({
    selector: 'list',
    template: `
			<div style="height:5px;"></div>

			<p-messages [value]="msgs"></p-messages>

			<div style="height:5px;"></div>

			<!-- 이 메시지는 하루의 context에 따라 달라짐 -->
			<div style="color:rgb(150,150,150);">
				<span style="color: orange; font-weight:bold;">
					{{ authService.user.user_id  }}
				</span> 님 안녕하세요!
			</div>

			<div style="height:10px;"></div>

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
			<br>
			<span *ngIf="memoUpdatedTime" style="color:gray;font-size:0.9em;">{{memoUpdatedTime | date:'medium'}} 동기화 됨<span>

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
	memoUpdatedTime: Date; // https://angular.io/docs/ts/latest/api/common/index/DatePipe-pipe.html
	memoIntervalId: any;

	constructor(
		private router: Router,
		private apiService: ApiService,
		private authService: AuthService,
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
		this.apiService.getMemo().then((res)=>{
			this.memo = res.memo;
			this.memoUpdatedTime = res.updated_at;
		});		
	}

	onChangeMemo(): void {
		this.memoChanged = true;
	}

	updateMemo(): void {
		// send memo to server 
		this.memoIntervalId = setInterval(()=>{
			if (this.memoChanged){
				this.apiService.updateMemo(this.memo).then((res)=>{
					console.log(res);
					this.memoUpdatedTime = res.updated_at;
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

	ngOnDestroy(){
		// not called..
		clearInterval(this.memoIntervalId);
	}
}
