import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from '../home';
import { HomeComponent } from '../home';
import { LoginComponent } from '../login';
import { RegisterComponent } from '../register';
import { AuthGuard } from '../_guards';
import { FormularioComponent } from '../formulario';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'formulario', component: FormularioComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);