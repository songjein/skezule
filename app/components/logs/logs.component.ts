import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api/api.service'; 
import { Log } from '../../log';

@Component({
    selector: 'logs',
    template: `
			<div style="height: 20px;"></div>

			<div *ngFor="let log of apiService.logs">
				<div class="log-item" [style.background]="log.color">
					<span style="font-weight: bold"> {{ log.body }} </span> <br>
					<span style="position:absolute; bottom: 10px; right: 10px; font-size: 0.8em;">{{ log.created_at | date: 'mediumDate'}}</span>
				</div>
			</div>
		`,
    styles: [`
			.log-item{ 
				position: relative;
				float:left;
				width: 180px; 
				height: 70px; 
				margin: 10px; 
				margin-left: 0px;
				margin-top: 0px;
				padding: 10px;
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

	constructor(
		private router: Router,
		private apiService: ApiService
	){}

	getLogs(): void{
		this.apiService.getLogs();	
	}

	ngOnInit(): void {
		this.getLogs();
	}
}
