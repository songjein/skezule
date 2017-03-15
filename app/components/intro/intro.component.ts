import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api/api.service'; 

@Component({
    selector: 'intro',
    template: `
			<div id="adjust" >
				<div style="height:5px;"></div>

				<div id="container">
					<img src="/intro.jpg" style="width: 100%; height: 500px; object-fit: cover; object-position: 35% 50%;"/>
					<div id="layer1"></div>
					<div id="layer2">
						<div style="font-size: 2em; margin-bottom: 20px;">
							<b>skezule.me</b>는<br>
							<span style="white-space: nowrap"><b>Todo-List</b> 기반의</span> <span style="white-space:nowrap"><b>Blog</b>입니다.</span>
						</div>

						언제나 쉽게 계획을 세우고, <br>
						기록과 함께 달성해 나가며, <br>
						분석을 통한 개선이 가능합니다. <br><br>

						<button pButton type="button" (click)="onclick()" label="시작하기" class="ui-button-warning"></button>
					</div>
				</div>

				<!-- content -->
				<div style="padding:10px">
					<div>
						<h1>계획하고, 기록하고, 개선하다</h1>
					</div>

					<div style="height:10px;"></div>

				</div>
				<!-- content end -->

			</div>

		`,
    styles: [`
			#adjust{
				margin: -15px -10px;
			}
			#container{
				position:relative;	
			}
			#layer1{
				position: absolute;
				top:0;
				left:0;
				width: 100%;
				height: 500px;
				background: rgba(50,50,50, 0.2);
			}
			#layer2{
				position:absolute;	
				top: 100px;
				right: 100px;
				color: white;
				font-size: 1.5em;
			}
			.ui-button-text{
				font-size: 0.8em !important;	
			}

			@media (max-width: 1200px){
				#adjust{
					margin: -75px -10px;	
				}
				#layer2{
					right: 10px;
					font-size: 1.0em;
					text-align: right;
				}	
			}
		`]
})
export class IntroComponent implements OnInit {

	constructor(
		private router: Router,
	){}

	onclick(){
		alert("start");	
	}

	ngOnInit(): void {
	}
}
