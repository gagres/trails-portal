import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Modules
import { SharedModule } from './../../shared/shared.module';
import { UsuarioRoutingModule } from './usuario.routing.module';
// Services
import { UsuarioService } from './usuario.service';
// Component
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { UsuarioInfoComponent } from './usuario-info/usuario-info.component';

@NgModule({
  imports: [
    BsDropdownModule.forRoot(),
    SharedModule,
    UsuarioRoutingModule
  ],
  declarations: [
    ListaUsuarioComponent,
    UsuarioInfoComponent
  ],
  providers: [UsuarioService]
})
export class UsuarioModule { }
