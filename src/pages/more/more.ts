import { DatabaseProvider } from './../../providers/database/database';
import { ProfilePage } from './../profile/profile';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MorePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
  styleUrls : ['./assets/main.css']
})
export class MorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public database:DatabaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');
  }

  openaccount () {

    this.navCtrl.push(ProfilePage) ; 
  }
  signout () {
this.database.signout() ; 

  }

}
