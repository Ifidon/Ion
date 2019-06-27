import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AboutPage } from './about/about.page.html';
import { MenuPage } from './menu/menu.page.html';
import { ContactPage } from './contact/contact.page.html';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    // {
    //   title: 'List',
    //   url: '/list',
    //   icon: 'list'
    // },
    {
      title: 'About Us',
      url: '/about',
      icon: 'information-circle',
      component: AboutPage
    },
    {
      title: 'Menu',
      url: '/menu',
      icon: 'list-box',
      component: MenuPage
    },
    {
      title: 'Contact Us',
      url: '/contact',
      icon: 'contact',
      component: ContactPage
    },
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
