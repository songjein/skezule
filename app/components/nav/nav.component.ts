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

			#nav {
				position: fixed;
				top: 0;
				left: 0;
				background: rgba(240,240,240, 0.5);
				width: 100%;
				height: 50px;
				padding: 0 10px;
				z-index: 1000;
				-webkit-box-shadow: 0px 3px 2px -1px rgba(100,100,100,0.75);
				-moz-box-shadow: 0px 3px 2px -1px rgba(100,100,100,0.75);
				box-shadow: 0px 3px 2px -1px rgba(100,100,100,0.75);
			}

			#menu {
				position: fixed;
				top: 50;
				left: 0;
				background: rgba(100,100,100, 0.9);
				width: 100%;
				height: 150px;
				z-index: 1000;
				display: none;
				-webkit-box-shadow: 0px 3px 2px -1px rgba(100,100,100,0.75);
				-moz-box-shadow: 0px 3px 2px -1px rgba(100,100,100,0.75);
				box-shadow: 0px 3px 2px -1px rgba(100,100,100,0.75);
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
				margin: 10px 20px;
				font-size: 30px;
				float:right;
				cursor: pointer;
			}

		`],
    template: `
			<div id="nav">
				<a id="title" [routerLink]="['/']">Skezule.me</a>

				<span id="menu-nav-item" (click)="showMenu()">
					<i class="fa fa-bars" aria-hidden="true"></i>
				</span>
			</div>
			
			<div id="menu">
				<a [routerLink]="['/']" (click)="showMenu()">
					<div class="menu-row" style="background: rgba(250,250,250, 0.9); color:rgb(50,50,50);"> 
						<i class="fa fa-check-square-o menu-item" aria-hidden="true" ></i>
						<span class="menu-item-label">히스토리</span>
					</div>
				</a>
				<a [routerLink]="['/stat']" (click)="showMenu()">
					<div class="menu-row" style="background: rgba(240,240,240, 0.9); color:rgb(50,50,50)"> 
						<i class="fa fa-pie-chart menu-item" aria-hidden="true" ></i>
						<span class="menu-item-label">통계</span>
					</div>
				</a>
				<a [routerLink]="['/user']" (click)="showMenu()">
					<div class="menu-row" style="background: rgba(230,230,230, 0.9); color:rgb(50,50,50);"> 
						<i class="fa fa-user-o menu-item" aria-hidden="true" ></i>
						<span class="menu-item-label">개인정보</span>
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
