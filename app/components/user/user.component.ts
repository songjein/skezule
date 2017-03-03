import { Component } from '@angular/core';

@Component({
    selector: 'user',
    template: `
			<div>
				<!--<img id="profile-img" src="http://placehold.it/300x300">-->
				<img id="profile-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdxh6zvAJGDRqSU5Z0zzbs_B2Tu-wK8SVLxgppDhWHfstMlXngUQ">
			</div>
			<div>
				<h3>오하시, 목표달성률 <span style="color:red">상위 1%</span> </h3>
			</div>
		`,
    styles: [`
			#profile-img{
				width:200px;
				height:200px;
				border-radius: 100px;
			}
		`]
})
export class UserComponent {

	constructor(
	){}
}
