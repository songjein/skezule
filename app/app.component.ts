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

		`],
    template: `
			<!-- title & add menu-->
			<div>
				<a id="title" [routerLink]="['/']">Skezule.me</a>
			</div>
			<div style="clear:both"></div>

			<router-outlet></router-outlet>

			<!--<a [routerLink]="['/about/', { id: 2 }]">About</a>-->
		`,
})
export class AppComponent {
}
