import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Peticiones HTTP
import { HttpClientModule } from "@angular/common/http";

// Componentes
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { UsersPageComponent } from './users-page/users-page.component';

// Rutas
import { RouterModule } from "@angular/router";
import { ROUTES } from './app.routes';

// Importacion para que los fomularios no refresquen cada vez que submitea
import {  FormsModule} from "@angular/forms";

// Importacion de los servicios (única instancia para todo el proyecto)
import { MobileAppService } from './services/mobile-app.service';
import { ModifyPageComponent } from './modify-page/modify-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignUpPageComponent,
    LogoutPageComponent,
    UsersPageComponent,
    ModifyPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [MobileAppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
