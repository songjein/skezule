import { Component } from '@angular/core';

@Component({
    selector: 'user',
    template: `

			<div style="height:5px;"></div>

			<div>
				프로필
			</div>

			<div style="height:10px;"></div>

			<div style="color:rgb(150,150,150)">
				사진	
			</div>

			<div style="height:5px;"></div>

			<div>
				<!--<img id="profile-img" src="http://placehold.it/300x300">-->
				<img id="profile-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdxh6zvAJGDRqSU5Z0zzbs_B2Tu-wK8SVLxgppDhWHfstMlXngUQ">
			</div>

			<div style="height:10px;"></div>

			<div style="color:rgb(150,150,150)">
				이름: 오하시
			</div>

			<div style="height:10px;"></div>

			<div style="color:rgb(150,150,150)">
				목표 달성률 : <span style="color:red">상위 1%</span>
			</div>
		`,
    styles: [`
			#profile-img{
				width:150px;
				height:150px;
				border-radius: 5px;
				object-fit: cover;
			}
		`]
})
export class UserComponent {

	constructor(
	){}
}
