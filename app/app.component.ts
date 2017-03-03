import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    styles: [`
		`],
    template: `
			<nav></nav>

			<div style="padding: 0 10px">
				<router-outlet></router-outlet>
			</div>

			<!--<a [routerLink]="['/about/', { id: 2 }]">About</a>-->
		`,
})
export class AppComponent {
}
