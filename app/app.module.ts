import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing } from "./routes";

import { LoginComponent } from "./components/login/login.component";
import { FormComponent } from "./components/form/form.component";
import { ListComponent } from "./components/list/list.component";
import { StatComponent } from "./components/stat/stat.component";
import { CompleteComponent } from "./components/complete/complete.component";
import { NavComponent } from "./components/nav/nav.component";
import { UserComponent } from "./components/user/user.component";
import { HistoryComponent } from "./components/history/history.component";
import { IntroComponent } from "./components/intro/intro.component";
import { LogsComponent } from "./components/logs/logs.component";

import { ApiService } from './services/api/api.service';
import { AuthService } from './services/auth/auth.service';
import { CanActivateViaAuthGuard } from './services/guards/can-activate-via-auth-guard.service';


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
	MessagesModule,
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
			MessagesModule,
    ],
    declarations: [
			AppComponent,
			FormComponent,
			ListComponent,
			StatComponent,
			CompleteComponent,
			NavComponent,
			UserComponent,
			HistoryComponent,
			IntroComponent,
			LoginComponent,
			LogsComponent,
    ],

		providers: [
			ApiService,
			AuthService,
			CanActivateViaAuthGuard,
		],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
