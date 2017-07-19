import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api/api.service'; 
import { Log } from '../../log';

@Component({
    selector: 'logs',
    template: `
			<div style="height: 20px;"></div>

			<div *ngFor="let log of apiService.logs">
				<div class="log-item" [style.background]="log.color" [class.expand-log-item]="log.id==clickedLogId" (click)="onClick(log.id)">
					<!-- 확장 됐을 때 숨기는 영역 -->
					<div *ngIf="log.id!=clickedLogId">
						<span style="font-weight: bold"> {{ log.body }} </span> <br>
						<span style="position:absolute; bottom: 10px; right: 10px; font-size: 0.8em;">{{ log.created_at | date: 'mediumDate'}}</span>
					</div>
					<!-- 확장 영역 -->
					<div *ngIf="log.id==clickedLogId">
						<span class="bold">목표</span>: {{ log.todos }}<br>
						<span class="bold">날짜</span>: {{ log.created_at | date: 'mediumDate' }}<br>
						<span class="bold">로그</span>: {{ log.body }}
					</div>
				</div>
			</div>
		`,
    styles: [`
			.bold {
				font-weight: bold;	
			}

			.log-item{ 
				position: relative;
				float:left;
				width: 180px; 
				height: 70px; 
				margin: 10px; 
				margin-left: 0px;
				margin-top: 0px;
				padding: 10px;
				overflow:auto;
			}

			.expand-log-item {
				width: 390px;	
				height: 170px;
			}

			@media screen and (max-width:1024px){
				.log-item {
					width: 130px;
					margin: 10px;
					margin-left: 0px;
					margin-top: 0px;
				}
			}

		`]
})
export class LogsComponent implements OnInit {
	
	clickedLogId: number;

	constructor(
		private router: Router,
		private apiService: ApiService
	){}

	getLogs(): void{
		this.apiService.getLogs();	
	}

	onClick(id): void{
		this.clickedLogId = id;	
	}

	ngOnInit(): void {
		this.getLogs();
	}
}
