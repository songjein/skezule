import { Route, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { StatComponent } from './components/stat/stat.component';
import { CompleteComponent } from './components/complete/complete.component';
import { UserComponent } from './components/user/user.component';

export const routes: Route[] = [
    { path: '', pathMatch: 'full', component: ListComponent},
    { path: 'about', component: AboutComponent },
    { path: 'form', component: FormComponent },
    { path: 'list', component: ListComponent },
    { path: 'stat', component: StatComponent },
    { path: 'complete/:selectedItems', component: CompleteComponent },
    { path: 'user', component: UserComponent },
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
