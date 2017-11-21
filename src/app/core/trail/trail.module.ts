import { NgModule } from '@angular/core';

// Modules
import { SharedModule } from './../../shared/shared.module';
import { TrailRoutingModule } from './trail.routing.module';
// Services
import { TrailService } from './trail.service';
// Componentes
import { ListaTrailComponent } from './lista-trail/lista-trail.component';

@NgModule({
  imports: [
    SharedModule,
    TrailRoutingModule
  ],
  declarations: [ListaTrailComponent],
  providers: [TrailService]
})
export class TrailModule { }
