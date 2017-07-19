import { Route, RouterModule } from '@angular/router';

import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { StatComponent } from './components/stat/stat.component';
import { CompleteComponent } from './components/complete/complete.component';
import { UserComponent } from './components/user/user.component';
import { HistoryComponent } from './components/history/history.component';
import { IntroComponent } from './components/intro/intro.component';
import { LoginComponent } from './components/login/login.component';

import { CanActivateViaAuthGuard } from './services/guards/can-activate-via-auth-guard.service';

export const routes: Route[] = [
    { path: '', pathMatch: 'full', component: IntroComponent },
    { path: 'form', component: FormComponent, canActivate: [CanActivateViaAuthGuard]  },
    { path: 'list', component: ListComponent, canActivate: [CanActivateViaAuthGuard] },
    { path: 'stat', component: StatComponent, canActivate: [CanActivateViaAuthGuard]  },
    { path: 'complete/:selectedTodos', component: CompleteComponent, canActivate: [CanActivateViaAuthGuard]  },
    { path: 'user', component: UserComponent, canActivate: [CanActivateViaAuthGuard]  },
    { path: 'history', component: HistoryComponent, canActivate: [CanActivateViaAuthGuard]  },
    { path: 'intro', component: IntroComponent },
    { path: 'login', component: LoginComponent },
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
