import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
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
			}

			#menu {
				position: fixed;
				top: 50;
				left: 0;
				background: rgba(100,100,100, 0.9);
				width: 100%;
				height: 50px;
				z-index: 1000;
				display: none;
			}
			.menu-item{
				font-size: 30px;	
				margin:10px 7px;
				float: right;
				color: white;
			}

			.menu-item-most-right{
				margin:10px 1.5px;
				float: right;
				color: white;
			}

			#menu-nav-item {
				margin: 10px 20px;
				font-size: 30px;
				float:right;
				cursor: pointer;
			}

			.ui-dialog {
				top: 60px !important;
			}
		`],
    template: `
			<!-- title & add menu-->
			<div id="nav">
				<a id="title" [routerLink]="['/']">Skezule.me</a>

				<span id="menu-nav-item" (click)="showMenu()">
					<i class="fa fa-bars" aria-hidden="true"></i>
				</span>
			</div>
			
			<div id="menu">
				<span class="menu-item-most-right"></span>
				<a [routerLink]="['/list']">
					<i class="fa fa-user-o menu-item" aria-hidden="true" (click)="showMenu()"></i>
				</a>
				<a [routerLink]="['/stat']">
					<i class="fa fa-pie-chart menu-item" aria-hidden="true" (click)="showMenu()"></i>
				</a>
				<a [routerLink]="['/']">
					<i class="fa fa-check-square-o menu-item" aria-hidden="true" (click)="showMenu()"></i>
				</a>
			</div>

			<div style="clear:both"></div>

			<div style="padding: 0 10px">
				<router-outlet></router-outlet>
			</div>

			<!--<a [routerLink]="['/about/', { id: 2 }]">About</a>-->
		`,
})
export class AppComponent {

	showMenu(){
		let elem = document.getElementById("menu")
		if (elem.style.display == "block")
			elem.style.display = "";
		else 
			elem.style.display = "block";
	}
}
