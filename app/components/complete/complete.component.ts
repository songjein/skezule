import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'complete',
    template: `
			<h4>목표</h4>
			{{selectedItems}} 

			<h4>기록</h4>
			<textarea pInputTextarea [(ngModel)]="finishlog" rows="5" style="width:300px"></textarea>

			<div style="height:10px"></div>

			<button pButton type="button" label="완료하기" class="ui-button-secondary" (click)="onclick()" ></button>
		`,
    styles: [`
		`]
})
export class CompleteComponent implements OnInit {

	@Input()
	selectedItems: string[];

	finishlog: string;

	constructor(
		private route: ActivatedRoute
	) {}

	onclick(){
		alert('제출');	
	}
	
	ngOnInit(): void {
		const sep = "#$%#$%"
		this.selectedItems = this.route.snapshot.params["selectedItems"].split(sep);
	}
}
