import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// ROUTES
import {APP_ROUTES} from './app.routes';
// Modulos
import {PagesModule} from './pages/pages.module';


import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
// componentes
import {RegisterComponent} from './login/register.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
