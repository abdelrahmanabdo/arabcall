import { MorePage } from './../more/more';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GroupPage } from '../group/group';
import { ChatPage } from '../chat/chat';
import { ContactsPage } from '../contacts/contacts';
import { Events } from 'ionic-angular';
/**
 * Generated class for the TabsPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  groupRoot = GroupPage
  chatRoot = ChatPage
  contactsRoot = ContactsPage


  constructor(public navCtrl: NavController,public events: Events) {}
onclick () {

  this.events.publish('clicked', "user");
}

more () {

  this.navCtrl.push(MorePage) ; 
}
}
