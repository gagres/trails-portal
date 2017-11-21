import { NgModule, ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

// Components
import { LoginComponent } from './login/login.component';
// Guards
import { LoginGuard } from './login-guard/login-guard.guard';

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }