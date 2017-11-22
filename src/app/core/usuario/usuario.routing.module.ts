import { NgModule, ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

// Componentes
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { UsuarioInfoComponent } from './usuario-info/usuario-info.component';

const USUARIO_ROUTES: Routes = [
    {path: 'usuarios', children: [
        { path: 'lista', component: ListaUsuarioComponent },
        { path: ':userID/info', component: UsuarioInfoComponent },
        { path: '**', redirectTo: '', pathMatch: 'full' }
    ]}
]

@NgModule({
    imports: [RouterModule.forChild(USUARIO_ROUTES)],
    exports: [RouterModule]
})
export class UsuarioRoutingModule { }