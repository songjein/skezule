import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api/api.service'; 

@Component({
    selector: 'intro',
    template: `
			<div style="height:5px;"></div>

			<img src="http://placehold.it/1200x300" style="width:100%; height:300px; object-fit: cover;"/>

			<div style="height:10px;"></div>

			<div>
				<h1>계획하고, 기록하고, 개선하다</h1>
			</div>

			<div style="height:10px;"></div>

			<div>
				<b>skezule.me</b>는 <b>Todo-List</b> 기반의 <b>Blog</b> 입니다 <br><br>

				언제나 쉽게 계획을 세우고, <br>
				기록과 함께 달성해 나가며, <br>
				분석을 통한 개선이 가능합니다. <br>
			</div>

		`,
    styles: [`
		`]
})
export class IntroComponent implements OnInit {

	constructor(
		private router: Router,
	){}

	ngOnInit(): void {
	}
}
