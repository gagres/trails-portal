import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Modules
import { ViewsModule } from './views/views.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app.routing.module';
// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
// Services
import { LoginGuard } from './login-guard/login-guard.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ViewsModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
