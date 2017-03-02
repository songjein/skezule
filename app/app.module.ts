import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { AboutComponent } from "./components/about/about.component";
import { HomeComponent } from "./components/home/home.component";
import { FormComponent } from "./components/form/form.component";
import { ListComponent } from "./components/list/list.component";
import { StatComponent } from "./components/stat/stat.component";
import { routing } from "./routes";

/**
 * primeng
 */
import {
	InputTextModule,
	CheckboxModule,
	ButtonModule,
	CalendarModule,
	ChartModule
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
			ChartModule
    ],
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
				FormComponent,
				ListComponent,
				StatComponent,
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
