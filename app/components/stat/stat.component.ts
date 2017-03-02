import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'stat',
    template: `
			<h3>성취율: <span style="color:red">82%</span></h3>
			
			<h4>사용 태그</h4>
			<div style="max-width: 400px">
				<p-chart type="pie" [data]="data"></p-chart>
			</div>

			<div style="height:20px"></div>

			<h4>등록 대비 완료횟수</h4>
			<div style="max-width: 400px">
				<p-chart type="line" [data]="data2" (onDataSelect)="selectData($event)"></p-chart>
			</div>
		`,
    styles: [`
			h3 {
				color:gray;	
			}
		`]
})
export class StatComponent {
		data: any;
		data2: any;

    constructor() {
			this.data = {
				labels: ['코딩', '영어', '게임'],
				datasets: [
					{	
						data: [2, 1, 2],
						backgroundColor:[
							'#FF6384',
							'#36A2EB',
							'#FFCE56'
						],
						hoverBackgroundColor: [
							'#FF6384',
							'#36A2EB',
							'#FFCE56'
						]
					}	
				]
			}	

			this.data2 = {
					labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
					datasets: [
							{
									label: '등록',
									data: [65, 59, 80, 81, 56, 55, 40],
									fill: false,
									borderColor: '#4bc0c0'
							},
							{
									label: '완료',
									data: [28, 48, 40, 19, 86, 27, 90],
									fill: false,
									borderColor: '#565656'
							}
					]
			}

		}
	}
}
