import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'form',
    template: `
			<h3>목표</h3>
			<input type="text" pInputText [(ngModel)]="todo" size="30" />

			<h3>태그</h3>
			<input type="text" pInputText [(ngModel)]="tags" size="30"/>

			<h3>시작일, {{from|date}}</h3>
			<p-calendar [(ngModel)]="from" [inline]="true"></p-calendar> 

			<h3>완료일, {{to|date}}</h3>
			<p-calendar [(ngModel)]="to" [inline]="true"></p-calendar> 
			
			<br>
			<br>

			<a [routerLink]="['/stat']">
				<div class="btn" (click)="onclick()">
					<span style="font-size: 0.7em; font-weight:bold;">등록</span>
				</div>
			</a>  

		`,
    //styleUrls: ['components/form/form.component.css']
    styles: [`
			h3{
				color: gray;	
			}
		`]
})
export class FormComponent {
	from: Date;
	to: Date;
	todo: string;
	tags: string;

	onclick(){
		alert('제출');	
	}
}
