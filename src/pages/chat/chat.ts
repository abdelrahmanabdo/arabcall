import { CreatbcPage } from './../creatbc/creatbc';
import { CreatgroupPage } from './../creatgroup/creatgroup';
import { GroupPage } from './../group/group';
import { DatabaseProvider } from './../../providers/database/database';
import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController } from 'ionic-angular';
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
  constructor(public events: Events,public navCtrl: NavController, public navParams: NavParams , public database : DatabaseProvider,public loadingctrl : LoadingController) {
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
      let loading = this.loadingctrl.create({
    showBackdrop : false 
  });
loading.present() ; 
    console.log('ionViewDidLoad ChatPage');
    this.database.getconvo.subscribe (data => {
      loading.dismiss();
this.chats = data ; 

      console.log(data) ; 
    })
  }
  group () {

    this.navCtrl.setRoot(GroupPage) ; 
  }
  newbc () {
this.navCtrl.push(CreatbcPage);

  }
  newgroup () {

this.navCtrl.push(CreatgroupPage)
  }
  search () {

    (this.hidesearch == true)?(this.hidesearch=false):(this.hidesearch=true) ; 
  }
}
