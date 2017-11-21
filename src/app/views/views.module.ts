import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';

// Modules
import { SharedModule } from './../shared/shared.module';
// Componentes
import { MenuComponent } from './menu/menu.component'

@NgModule({
    declarations: [
        MenuComponent
    ],
    imports: [
        SharedModule,
        RouterModule
    ],
    exports: [
        MenuComponent
    ]
})
export class ViewsModule { }