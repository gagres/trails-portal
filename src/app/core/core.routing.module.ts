import { NgModule, ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

// Components
import { DashboardComponent } from './dashboard/dashboard.component';

const CORE_ROUTES: Routes = [
    { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
    imports: [RouterModule.forChild(CORE_ROUTES)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
