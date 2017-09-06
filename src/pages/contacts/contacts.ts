import { DatabaseProvider } from './../../providers/database/database';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams,public database:DatabaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsPage');
       this.database.getfriends.subscribe (data => {
this.friends = data ; 

      console.log(data) ; 
    })
  }

}
