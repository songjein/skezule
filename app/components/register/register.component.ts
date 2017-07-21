import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router'; 
import { Headers } from '@angular/http'; 

import { ApiService } from '../../services/api/api.service'; 
import { AuthService } from '../../services/auth/auth.service'; 

@Component({
    selector: 'register',
    template: `
			<div style="height:15px;"></div>

			반갑습니다! :)

			<div style="height:10px;"></div>

			<div *ngFor="let e of apiService.errors">
				<div style="color:red">{{e}}</div>
			</div>

			<div style="height:10px;"></div>

			<input type="text" pInputText [(ngModel)]="user_id" size="30" placeholder="아이디"/> 

			<div style="height:10px;"></div>

			<input type="text" pInputText [(ngModel)]="name" size="30" placeholder="닉네임"/> 

			<div style="height:10px;"></div>

			<input type="password" pInputText [(ngModel)]="password" size="30" placeholder="비밀번호" />

			<div style="height:10px;"></div>

			<input type="password" pInputText [(ngModel)]="password_confirmation" size="30" placeholder="비밀번호 확인" />

			<div style="height:10px;"></div>

			<button pButton type="button" label="가입하기" class="ui-button-secondary" (click)="register()" ></button>

		`,
    styles: [`
		`]
})
export class RegisterComponent implements OnInit{

	user_id: string;
	name: string;
	password: string;
	password_confirmation: string;

	constructor(
		private router: Router,
		private apiService: ApiService,
		private authService: AuthService,
	){}

	ngOnInit(): void {
	}

	register(): void {
		this.apiService
			.createUser(this.user_id, this.name, this.password, this.password_confirmation)
			.then((res) => {
				console.log(res);
				if ("error" in res){
					this.apiService.errors = res.error;	
				}
				else {
					// errors 메시지 관리를 이렇게 해도 되나..
					this.apiService.errors = []; 
					this.router.navigate(['/login']);
				}
		}).catch((error) => {
			alert(error);	
		})
	}
}
