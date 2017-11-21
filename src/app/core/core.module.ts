import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import { ChartsModule } from 'ng2-charts';

// Modules
import { SharedModule } from './../shared/shared.module';
import { UsuarioModule } from './usuario/usuario.module';
import { TrailModule } from './trail/trail.module';
import { CoreRoutingModule } from './core.routing.module';
// Components
import { DashboardComponent } from './dashboard/dashboard.component';
// Services

@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDeMrigVSl1q4DGS8R-nGQPnFZSNLuSdFM'
    }),
    ChartsModule,
    SharedModule,
    UsuarioModule,
    TrailModule,
    CoreRoutingModule
  ],
  declarations: [DashboardComponent]
})
export class CoreModule { }
