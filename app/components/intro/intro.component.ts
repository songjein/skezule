import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api/api.service'; 

@Component({
    selector: 'intro',
    template: `
			<div id="adjust" >
				<div style="height:5px;"></div>

				<div id="container">
					<img src="/intro.jpg" id="bgimg"/>
					<div id="layer1"></div>
					<div id="layer2">
						<div style="font-size: 2em; margin-bottom: 20px;">
							<b style="color:rgba(240,173,78)">스케쥴로그</b>는<br>
							<span style="white-space: nowrap"><b>Todo-List</b> 기반의</span> <span style="white-space:nowrap"><b>Blog</b>입니다</span>
						</div>

						언제나 쉽게 계획을 세우고, <br>
						기록과 함께 달성해 나가며, <br>
						분석을 통한 개선이 가능합니다. <br><br>

						<button pButton type="button" (click)="onclick()" label="시작하기" class="ui-button-warning"></button>
					</div>
				</div>

				<!-- content -->
				<div id="intro-content" >
					<div class="detail">
						<div style="font-size:6em; color:rgb(200,200,200);">
							<i class="fa fa-list" aria-hidden="true"></i>
						</div>
						<h1>계획하고</h1>
						<div style="color: gray">
							Todo list에 다양한 계획을<br>
							쉽게 추가해 보세요.	
						</div>
					</div>
					<div class="detail">
						<div style="font-size:6em; color:rgb(200,200,200);">
							<i class="fa fa-pencil-square-o" aria-hidden="true"></i>
						</div>
						<h1>기록하고</h1>
						<div style="color: gray">
							계획을 달성해 나가면서, <br>
							일상을 정리해보세요.
						</div>
					</div>
					<div class="detail">
						<div style="font-size:6em; color:rgb(200,200,200);">
							<i class="fa fa-line-chart" aria-hidden="true"></i>
						</div>
						<h1>개선하다</h1>
						<div style="color: gray">
							데이터 분석을 통해서,<br>
							삶을 개선해보세요.
						</div>
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
			#bgimg {
				width: 100%; height: 500px; 
				object-fit: cover; 
				object-position: 35% 50%;
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

			.detail{
				float: left;
				height: 200px;
				width: 27%;
				padding: 3%;
				text-align: center;
			}

			#intro-content {
				padding:10px; 
				max-width: 1000px; 
				margin: 0 auto;
			}

			@media (max-width: 1200px){
				#adjust{
					margin: -75px -10px;	
				}
				#bgimg {
					height: 400px;	
				}
				#layer1{
					height: 400px;	
				}
				#layer2{
					right: 10px;
					font-size: 1.0em;
					text-align: right;
				}	
				.detail{
					width: 100%;	
					padding: 0;
					margin-bottom: 70px;
				}

				#intro-content{
					margin: 50px auto;
				}
			}
		`]
})
export class IntroComponent implements OnInit {

	constructor(
		private router: Router,
	){}

	onclick(){
		this.router.navigate(['/list']);
	}

	ngOnInit(): void {
	}
}
