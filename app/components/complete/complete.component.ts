import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'complete',
    template: `
			<h4>목표</h4>

			{{selectedId}} (id로 실제 데이터 얻어올것임)

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
	selectedId: number;

	finishlog: string;

	constructor(
		private route: ActivatedRoute
	) {}

	onclick(){
		alert('제출');	
	}
	
	ngOnInit(): void {
		this.route.params
			.switchMap((params: Params) => {
					console.log(params['id'])
					this.selectedId = params['id'];
				})
			//.subscribe(id => this.selectedId = id);
			//.switchMap((params: Params) => this.heroService.getHero(+params['id']))
	}
}
