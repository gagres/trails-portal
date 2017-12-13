import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';

// Modules
import { SharedModule } from './../../shared/shared.module';
import { TrailRoutingModule } from './trail.routing.module';
// Services
import { TrailService } from './trail.service';
// Componentes
import { ListaTrailComponent } from './lista-trail/lista-trail.component';
import { TrailInfoComponent } from './trail-info/trail-info.component';

@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDeMrigVSl1q4DGS8R-nGQPnFZSNLuSdFM'
    }),
    SharedModule,
    TrailRoutingModule
  ],
  declarations: [
    ListaTrailComponent,
    TrailInfoComponent
  ],
  providers: [TrailService]
})
export class TrailModule { }
