import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Headers } from '@angular/http'; 

import { ApiService } from '../../services/api/api.service'; 
import { GlobalService } from '../../services/global/global.service'; 

@Component({
    selector: 'login',
    template: `
			<div style="height:5px;"></div>

			<p-messages [value]="msgs"></p-messages>

			<div style="height:10px;"></div>

			<input type="text" pInputText [(ngModel)]="id" size="30" placeholder="아이디"/> 

			<div style="height:10px;"></div>

			<input type="text" pInputText [(ngModel)]="pw" size="30" placeholder="비밀번호" />

			<div style="height:10px;"></div>

			<button pButton type="button" label="로그인" class="ui-button-secondary" (click)="login()" ></button>

		`,
    styles: [`
		`]
})
export class LoginComponent implements OnInit, onDestroy {

	// move to global
	msgs: Message[] = [];

	id: String = ""
	pw: String = ""

	constructor(
		private router: Router,
		private apiService: ApiService,
		private globalService: GlobalService,
	){}

	ngOnInit(): void {
		console.log("login");
	}

	ngOnDestroy(): void {
	}


	login(): void {
		this.apiService.login(this.id, this.pw).then((res) => {
			const auth_token = JSON.parse(res._body).auth_token
			this.globalService.headers = new Headers({'Content-Type': 'application/json', 'Authorization': auth_token});
			this.router.navigate(['/list']);
		}).catch((error) => {
			alert(error);	
		}}
}
