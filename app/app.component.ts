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

			#chart {
				margin: 10px 20px;
				font-size: 30px;
				color: skyblue;
				float:right;
			}
		`],
    template: `
			<!-- title & add menu-->
			<div id="nav">
				<a id="title" [routerLink]="['/']">Skezule.me</a>

				<a id="chart" [routerLink]="['/stat']">
					<i class="fa fa-pie-chart" aria-hidden="true"></i>
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
}
