import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from '../home';
import { HomeComponent } from '../home';
import { LoginComponent } from '../login';
import { TablaComponent } from '../tabla';
import { AuthGuard } from '../_guards';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'tabla', component: TablaComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);