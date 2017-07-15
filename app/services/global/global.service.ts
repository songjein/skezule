import { Injectable } from '@angular/core';
import { Headers } from '@angular/http'; 

@Injectable()
export class GlobalService{
	headers: Headers = new Headers({'Content-Type': 'application/json'});
}
