import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from '../home';
import { HomeComponent } from '../home';
import { LoginComponent } from '../login';
import { FormularioComponent } from '../formulario';
import { AuthGuard } from '../_guards';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'formulario', component: FormularioComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);