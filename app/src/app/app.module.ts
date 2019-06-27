import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AboutPage } from './about/about.page.html';
import { MenuPage } from './menu/menu.page.html';
import { ContactPage } from './contact/contact.page.html';

@NgModule({
  declarations: [
    AppComponent,
    // AboutPage,
    // MenuPage,
    // ContactPage
  ],
  entryComponents: [
    // AboutPage,
    // MenuPage,
    // ContactPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
