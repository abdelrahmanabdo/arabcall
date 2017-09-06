import { GroupPage } from './../group/group';
import { DatabaseProvider } from './../../providers/database/database';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';
/**
 * Generated class for the ChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
  styleUrls : ['./assets/main.css','./assets/ionicons.min.css']
})
export class ChatPage {
chats ; hidesearch = true ; 
  constructor(public events: Events,public navCtrl: NavController, public navParams: NavParams , public database : DatabaseProvider) {
 events.subscribe('clicked', (user) => {
    // user and time are the same arguments passed in `events.publish(user, time)`
    if (this.hidesearch) {
      this.hidesearch = false ; 
    }else {
      this.hidesearch = true ; 
    }
  });  
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
    this.database.getconvo.subscribe (data => {
this.chats = data ; 

      console.log(data) ; 
    })
  }
  group () {

    this.navCtrl.setRoot(GroupPage) ; 
  }

}
