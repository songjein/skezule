import { Route, RouterModule } from '@angular/router';

import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { StatComponent } from './components/stat/stat.component';
import { CompleteComponent } from './components/complete/complete.component';
import { UserComponent } from './components/user/user.component';
import { HistoryComponent } from './components/history/history.component';

export const routes: Route[] = [
    { path: '', pathMatch: 'full', component: ListComponent},
    { path: 'form', component: FormComponent },
    { path: 'list', component: ListComponent },
    { path: 'stat', component: StatComponent },
    { path: 'complete/:selectedTodos', component: CompleteComponent },
    { path: 'user', component: UserComponent },
    { path: 'history', component: HistoryComponent },
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
