import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router'; 
import { Headers } from '@angular/http'; 

import { ApiService } from '../../services/api/api.service'; 
import { AuthService } from '../../services/auth/auth.service'; 

@Component({
    selector: 'login',
    template: `
			<div style="height:15px;"></div>

			<div *ngIf="authService.isLoggedIn()">
				<span style="font-weight:bold">{{authService.user.user_id}}</span>
				님, 이미 로그인 중입니다 :)
			</div>

			<div *ngIf="!authService.isLoggedIn()">
				반갑습니다! 로그인을 해주세요 :)
			<div>

			<div style="height:10px;"></div>

			<input type="text" pInputText [(ngModel)]="id" size="30" placeholder="아이디"/> 

			<div style="height:10px;"></div>

			<input type="password" pInputText [(ngModel)]="pw" size="30" placeholder="비밀번호" />

			<div style="height:10px;"></div>

			<button pButton type="button" label="로그인" class="ui-button-secondary" (click)="login()" ></button>

			<button pButton type="button" label="회원가입" class="ui-button-secondary" (click)="register()" ></button>

		`,
    styles: [`
		`]
})
export class LoginComponent implements OnInit{

	id: String = ""
	pw: String = ""

	constructor(
		private router: Router,
		private apiService: ApiService,
		private authService: AuthService,
	){}

	ngOnInit(): void {
	}

	login(): void {
		this.apiService.login(this.id, this.pw).then((res) => {
			const auth_token = JSON.parse(res._body).auth_token
			const user = JSON.parse(res._body).user
			this.authService.login(auth_token, user);
			this.router.navigate(['/list']);

		}).catch((error) => {
			alert(error);	
		})
	}

	register(): void {
		this.router.navigate(['/register']);
	}
}
