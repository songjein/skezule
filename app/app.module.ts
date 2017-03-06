import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing } from "./routes";

import { FormComponent } from "./components/form/form.component";
import { ListComponent } from "./components/list/list.component";
import { StatComponent } from "./components/stat/stat.component";
import { CompleteComponent } from "./components/complete/complete.component";
import { NavComponent } from "./components/nav/nav.component";
import { UserComponent } from "./components/user/user.component";

import { ApiService } from './services/api/api.service';


/**
 * primeng
 */
import {
	InputTextModule,
	CheckboxModule,
	ButtonModule,
	CalendarModule,
	ChartModule,
	DialogModule,
	InputTextareaModule,
} from 'primeng/primeng';

@NgModule({
    imports: [
			BrowserModule,
			FormsModule,
			HttpModule,
			JsonpModule,
			routing,
			InputTextModule,
			CheckboxModule,
			ButtonModule,
			CalendarModule,
			ChartModule,
			DialogModule,
			InputTextareaModule,
    ],
    declarations: [
        AppComponent,
				FormComponent,
				ListComponent,
				StatComponent,
				CompleteComponent,
				NavComponent,
				UserComponent,
    ],

		providers: [
			ApiService	
		],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
