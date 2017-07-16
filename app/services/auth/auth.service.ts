import { Injectable } from '@angular/core';
import { Headers } from '@angular/http'; 

import { User } from '../../user';

@Injectable()
export class AuthService{

	// api에서 통신할 때 활용하는 http header
	headers: Headers; 

	// 유저 정보
	user: User; 

	// localStorage에는 저장되있지만, mem에서 날아가는 경우 대비
	constructor() {
		const auth_token = localStorage.getItem("Authorization");
		auth_token ? this.setLoggedInHeader(auth_token) : this.setBasicHeader();

		const user = localStorage.getItem("User");
		this.user = JSON.parse(user);
	}

	// default header
	setBasicHeader(){
		this.headers = new Headers({'Content-Type': 'application/json'});
	}
	
	// login 했을 때 header (JWT 토큰 세팅)
	setLoggedInHeader(auth_token: string){
		this.headers = new Headers({'Content-Type': 'application/json', 'Authorization': auth_token});
	}

	// 로그인 확정할 땐 이 함수를 호출
	login(auth_token: string, user: any){
		localStorage.setItem("Authorization", auth_token);
		this.setLoggedInHeader(auth_token);	

		localStorage.setItem("User", JSON.stringify(user));
		this.user = user;
	}

	// 로그아웃 시 localStorage 비우고 mem 초기화
	logout(){
		localStorage.removeItem("Authorization");
		this.setBasicHeader();

		localStorage.removeItem("User");
		this.user = undefined;
	}
	
	// protect routing 을 위해서
	isLoggedIn(){
		const auth_token = localStorage.getItem("Authorization");
		return auth_token;	
	}
}
