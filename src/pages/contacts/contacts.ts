import { DatabaseProvider } from './../../providers/database/database';
import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController } from 'ionic-angular';

/**
 * Generated class for the ContactsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
    styleUrls : ['./assets/main.css']
})
export class ContactsPage {
friends ;
hidesearch = true ;  
  constructor(public navCtrl: NavController, public navParams: NavParams,public database:DatabaseProvider,public loadingctrl:LoadingController) {
  }

  ionViewDidLoad() {
      let loading = this.loadingctrl.create({
    showBackdrop : false 
  });
loading.present() ; 
    console.log('ionViewDidLoad ContactsPage');
       this.database.getfriends.subscribe (data => {
         loading.dismiss();
this.friends = data ; 

      console.log(data) ; 
    })
  }

}
