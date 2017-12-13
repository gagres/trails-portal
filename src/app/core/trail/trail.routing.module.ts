import { NgModule, ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

// Componentes
import { ListaTrailComponent } from './lista-trail/lista-trail.component';
import { TrailInfoComponent } from './trail-info/trail-info.component';

const TRAIL_ROUTES: Routes = [
    {path: 'trails', children: [
        { path: 'lista', component: ListaTrailComponent },
        { path: ':trailID/info', component: TrailInfoComponent },
        { path: '**', redirectTo: 'lista', pathMatch: 'full' }
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(TRAIL_ROUTES)],
    exports: [RouterModule]
})
export class TrailRoutingModule { }