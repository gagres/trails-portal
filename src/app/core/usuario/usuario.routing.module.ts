import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { NgModule, ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const USUARIO_ROUTES: Routes = [
    {path: 'usuarios', children: [
        { path: 'lista', component: ListaUsuarioComponent },
        { path: '**', redirectTo: '', pathMatch: 'full' }
    ]}
]

@NgModule({
    imports: [RouterModule.forChild(USUARIO_ROUTES)],
    exports: [RouterModule]
})
export class UsuarioRoutingModule { }