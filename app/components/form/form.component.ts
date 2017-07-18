import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api/api.service'; 

@Component({
    selector: 'form',
    template: `
			<p-messages [value]="msgs"></p-messages>

			<div class="label">목표</div>
			<input type="text" pInputText [(ngModel)]="goal" size="30" />

			<div class="label">카테고리</div>
			<input type="text" pInputText [(ngModel)]="category" size="30"/>

			<div class="label">날짜</div>
			<p-calendar [(ngModel)]="from" [locale]="kr" [showIcon]="true" readonlyInput="true"></p-calendar> 

			<div class="label">반복 날짜(옵션)</div>
			<p-calendar [(ngModel)]="to" [locale]="kr" [showIcon]="true" readonlyInput="true"></p-calendar> 

			<div class="label" >목표 색깔 선택</div>
			<input type="color" [(ngModel)]="color">

			<div class="label" >폰트 굵기(Weight)</div>
			<p-radioButton name="weight" value="normal" label="보통" [(ngModel)]="weight"></p-radioButton>
			<p-radioButton name="weight" value="bold" label="굵게" [(ngModel)]="weight"></p-radioButton>
			<p-radioButton name="weight" value="900" label="매우굵게" [(ngModel)]="weight"></p-radioButton>

			<br>
			<br>

			<button pButton type="button" label="작업 추가" class="ui-button-secondary" (click)="onclick()" ></button>

		`,
    //styleUrls: ['components/form/form.component.css']
    styles: [`
			.label{
				color: gray;	
				margin-top: 10px;
				margin-bottom: 5px;
			}
		`]
})
export class FormComponent {
	msgs: Message[] = [];

	from: Date;
	to: Date;
	goal: string = "";
	category: string = "";
	color: string = "#000000";
	weight: string = "normal"; 

	kr: any;

	constructor(
		private apiService: ApiService,
		private router: Router
	){}

	onclick(){

		if (this.goal.length == 0){
			this.msgs = [];
			this.msgs.push({severity:'warn', summary:'', detail:'목표를 작성해주세요'});
			return;
		}

		this.apiService.createTodo(this.goal, this.from, this.to, this.category, this.color, this.weight)
			.then(()=>{
				this.router.navigate(['/']);
			});
	}

	ngOnInit(){
		this.kr = {
			firstDayOfWeek: 0,
			dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
			dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
			dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
			monthNames: [ "1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월" ],
			monthNamesShort: [ "1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월" ],
		};	

		// today is a default
		this.from = new Date();
		this.to = new Date();
	}
}
