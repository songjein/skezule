import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api/api.service'; 
import { Log } from '../../log';

@Component({
    selector: 'logs',
    template: `
			<div style="height: 20px;"></div>

			<div *ngIf="apiService.tags?.length > 0" id="tag-filter">
				<span style="font-weight:bold">
					태그 필터
					<span class="tag" style="color:red" (click)="filterInit()">[초기화]</span>  
				</span>:
				<!-- ngInit에서 getTags 호출해놓은 상태 -->
				<span *ngFor="let tag of apiService.tags; let i=index">
					<span style="white-space:nowrap">
						<span class="tag" (click)="tagClick(tag)">&nbsp;{{tag}}</span>
						<span *ngIf="i<apiService.tags.length-1"> / </span>
					</span>
				</span>
			</div>

			<div style="height: 10px;"></div>

			<!-- 서버에서 응답 오기 전에 판단하는듯? -->
			<div *ngIf="apiService.logs?.length == 0">
				오늘의 할일을 달성하고,<br>
				로그를 남겨보세요 :)
			</div>
			
			<div *ngFor="let log of apiService.logs">
				<!-- 만약 filterMode가 아닐 때는 무조건 보여주고, filter 모드일 때는 일치하는 것만-->
				<div *ngIf="!filterMode || (log.tag_list.indexOf(selectedTag) > -1)" class="log-item" [style.background]="log.color" [class.expand-log-item]="log.id==clickedLogId" (click)="onClick(log.id)">
					<!-- 확장 됐을 때 숨기는 영역 -->
					<div *ngIf="log.id!=clickedLogId">
						<span style="font-weight: bold"> {{ log.body }} </span> <br>
						<span style="position:absolute; bottom: 10px; right: 10px; font-size: 0.8em;">{{ log.created_at | date: 'mediumDate'}}</span>
					</div>
					<!-- 확장 영역 -->
					<div *ngIf="log.id==clickedLogId">
						<!--<span class="bold">목표</span>: {{ log.todos }}<br>-->
						<strong>목표</strong> <span [innerHTML]="log.todos"></span>
						<strong>날짜</strong>: {{ log.created_at | date: 'mediumDate' }}<br>
						<strong>로그</strong>: {{ log.body }}
					</div>
				</div>
			</div>
		`,
    styles: [`
			.bold {
				font-weight: bold;	
			}

			#tag-filter {
			}
			.tag{
				cursor: pointer;	
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
	
	filterMode: boolean = false;
	selectedTag: string;

	constructor(
		private router: Router,
		private apiService: ApiService
	){}

	getLogs(): void{
		this.apiService.getLogs();	
	}

	getTags(): void{
		this.apiService.getTags();	
	}

	onClick(id): void{
		this.clickedLogId = id;	
	}

	tagClick(tag): void {
		this.selectedTag = tag;
		this.filterMode = true;
	}

	filterInit(): void {
		this.filterMode = false;	
	}


	ngOnInit(): void {
		this.getLogs();
		this.getTags();
	}
}
