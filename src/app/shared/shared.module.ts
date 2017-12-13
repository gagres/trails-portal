import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpModule } from '@angular/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

// Services
import { StorageService } from './services/storage.service';
import { AuthService } from './services/auth.service';
import { HttpService } from './services/http.service';
// Directives
import { DirectionsMapDirective } from './directives/directions-map-directive';

@NgModule({
    imports: [
        CommonModule,
        HttpModule
    ],
    exports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        DirectionsMapDirective
    ],
    declarations: [
        DirectionsMapDirective
    ],
    providers: [
        StorageService,
        AuthService,
        HttpService
    ]
})
export class SharedModule { }