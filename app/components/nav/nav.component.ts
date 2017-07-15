import { Component } from '@angular/core';

@Component({
    selector: 'nav',
    styles: [`
			#title {
				color: black;
				font-family: 'Pacifico', cursive;
				font-size: 2em;
				float:left;
			}
			
			#logo{
				width: 40px;
				height: 40px;
				margin: 5px;
			}

			#nav {
				position: fixed;
				top: 0;
				left: 0;
				background: white; 
				width: 100%;
				height: 50px;
				z-index: 1000;
				-webkit-box-shadow: 0px 3px 2px -1px rgba(200,200,200,0.75);
				-moz-box-shadow: 0px 3px 2px -1px rgba(200,200,200,0.75);
				box-shadow: 0px 3px 2px -1px rgba(200,200,200,0.75);
			}

			#menu {
				position: fixed;
				top: 50;
				left: 0;
				background: rgba(200,200,200, 0.9);
				width: 100%;
				height: 150px;
				z-index: 1000;
				display: none;
				-webkit-box-shadow: 0px 3px 2px -1px rgba(200,200,200,0.75);
				-moz-box-shadow: 0px 3px 2px -1px rgba(200,200,200,0.75);
				box-shadow: 0px 3px 2px -1px rgba(200,200,200,0.75);
			}
			.menu-row{
				position: relative;
				height: 50px;
				padding-left: 10px;
			}
			.menu-item{
				font-size: 25px;	
				margin:10px 7px;
			}
			.menu-item-label{
				position: absolute;
				left: 50px;
				font-size: 15px;	
				margin:15px 7px;
			}

			#menu-nav-item {
				margin: 12px 10px;
				font-size: 30px;
				float:right;
				cursor: pointer;
			}

		`],
    template: `
			<div id="nav">
				<a [routerLink]="['/']" >
					<img id="logo" src="logo.png">
				</a>

				<span id="menu-nav-item" (click)="showMenu()">
					<i class="fa fa-bars" aria-hidden="true"></i>
				</span>
			</div>
			
			<div id="menu">
				<a [routerLink]="['/history']" (click)="showMenu()">
					<div class="menu-row" style="background: rgb(251,251,251); color:rgb(50,50,50);"> 
						<i class="fa fa-check-square-o menu-item" aria-hidden="true" ></i>
						<span class="menu-item-label">히스토리</span>
					</div>
				</a>
				<a [routerLink]="['/stat']" (click)="showMenu()">
					<div class="menu-row" style="background: white; color:rgb(50,50,50)"> 
						<i class="fa fa-pie-chart menu-item" aria-hidden="true" ></i>
						<span class="menu-item-label">통계</span>
					</div>
				</a>
				<a [routerLink]="['/user']" (click)="showMenu()">
					<div class="menu-row" style="background: rgb(251,251,251); color:rgb(50,50,50);"> 
						<i class="fa fa-user-o menu-item" aria-hidden="true" ></i>
						<span class="menu-item-label">개인정보</span>
					</div>
				</a>
				<a [routerLink]="['/login']" (click)="showMenu()">
					<div class="menu-row" style="background: white; color:rgb(50,50,50);"> 
						<i class="fa fa-user-o menu-item" aria-hidden="true" ></i>
						<span class="menu-item-label">로그인</span>
					</div>
				</a>
			</div>
		`,
})
export class NavComponent {

	showMenu(){
		let elem = document.getElementById("menu")
		if (elem.style.display == "block")
			elem.style.display = "";
		else 
			elem.style.display = "block";
	}
}
