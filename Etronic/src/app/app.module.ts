import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexaComponent } from './component/indexa/indexa.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { PlayComponent } from './component/play/play.component';
import { AboutusMostrarComponent } from './component/aboutus/aboutus-mostrar/aboutus-mostrar.component';
import { FooterMostrarComponent } from './component/footer/footer-mostrar/footer-mostrar.component';
import { HeaderMostrarComponent } from './component/header/header-mostrar/header-mostrar.component';
import { IndexaMostrarComponent } from './component/indexa/indexa-mostrar/indexa-mostrar.component';
import { LoginMostrarComponent } from './component/login/login-mostrar/login-mostrar.component';
import { LoginRegistrarComponent } from './component/login/login-registrar/login-registrar.component';
import { PlayMostrarComponent } from './component/play/play-mostrar/play-mostrar.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexaComponent,
    AboutusComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    PlayComponent,
    AboutusMostrarComponent,
    FooterMostrarComponent,
    HeaderMostrarComponent,
    IndexaMostrarComponent,
    LoginMostrarComponent,
    LoginRegistrarComponent,
    PlayMostrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
