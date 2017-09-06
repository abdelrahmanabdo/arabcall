import { ChatPage } from './../pages/chat/chat';
import { DatabaseProvider } from './../providers/database/database';
import { TabsPage } from './../pages/tabs/tabs';
import { LoginPage } from './../pages/login/login';
import { Component,ViewChild } from '@angular/core';
import { Platform , AlertController,NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';
import { HomePage } from '../pages/home/home';
let firebase ; 


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('myNav') nav : NavController
  rootPage = LoginPage ;

  constructor(public database:DatabaseProvider,public alertCtrl: AlertController,public network: Network,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.hide();
      setTimeout(function() {
        console.log("done")
        splashScreen.hide();
      }, 7000);
      
      
    });
    firebase = this.database ; 
     
    //network = this.network ; 
    this.init () ; 
    // this.test() ; 

  }

  init () {
    let connectSubscription = this.network.onConnect().subscribe(() => {
     console.log("connected")
 

});

// stop connect watch
connectSubscription.unsubscribe();
let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
  let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Check Your Internet Connection And Try Again',
      buttons: ['OK']
    });
    alert.present();
});

// stop disconnect watch
disconnectSubscription.unsubscribe();

  }

ngOnInit () {

  firebase.user.subscribe (snapshot => {

    if(snapshot == "logged") {

this.nav.setRoot (TabsPage);
    }else {

      this.nav.setRoot(TabsPage);
    }
  })
}
  
}

