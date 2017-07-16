import { Injectable } from '@angular/core';
import { Headers } from '@angular/http'; 

@Injectable()
export class AuthService{

	headers: Headers; 

	constructor() {
		const auth_token = localStorage.getItem("Authorization");
		auth_token ? this.setLoggedInHeader(auth_token) : this.setBasicHeader();
	}

	setBasicHeader(){
		this.headers = new Headers({'Content-Type': 'application/json'});
	}

	setLoggedInHeader(auth_token: string){
		this.headers = new Headers({'Content-Type': 'application/json', 'Authorization': auth_token});
	}

	login(auth_token: string){
		localStorage.setItem("Authorization", auth_token);
		this.setLoggedInHeader(auth_token);	
	}

	logout(){
		localStorage.removeItem("Authorization");
		this.setBasicHeader();
	}

	isLoggedIn(){
		const auth_token = localStorage.getItem("Authorization");
		return auth_token;	
	}
}
