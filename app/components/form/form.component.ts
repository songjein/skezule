import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'form',
    template: `
			<h3>Todo</h3>
			<input type="text" pInputText [(ngModel)]="todo" size="30" />

			<h3>Tags</h3>
			<input type="text" pInputText [(ngModel)]="tags" size="30"/>

			<h3>From</h3>
			<p-calendar [(ngModel)]="from" [inline]="true"></p-calendar>

			<h3>To</h3>
			<p-calendar [(ngModel)]="to" [inline]="true"></p-calendar> 
			
			<br>
			<br>

			<div class="button" (click)="onclick()">
					submit 
			</div>
		`,
    //styleUrls: ['components/form/form.component.css']
    styles: [`
			h3{
				color: gray;	
			}

			.button{
				border-radius: 5px;
				border: 1px solid gray;
				max-width: 80%;
				text-align: center;
				padding: 5px;
				color: gray;
				cursor: pointer;
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
