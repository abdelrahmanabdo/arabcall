import { DatabaseProvider } from './../../providers/database/database';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CreatbcPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-creatbc',
  templateUrl: 'creatbc.html',
  styleUrls : ['./assets/main.css']
})
export class CreatbcPage {
friends;myInput ;friendsnames = []; names = [] ; 
  constructor(public navCtrl: NavController, public navParams: NavParams,public database : DatabaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatbcPage');
     this.database.getfriends.subscribe (data => {
this.friends = data ; 



      
    })
    
   
  }
  

 

onInput(evt) {
this.names = this.friends;
let val = evt.target.value ; 


if (val && val.trim() != '') {
for(let i = 0 ; i < this.names.length ; i ++) {

     if(this.names[i].name.toLowerCase().indexOf(val.toLowerCase()) == 0) {
this.friendsnames.push(this.names[i]) ; 
     }else {
       this.friendsnames.splice(i,1)
     }
    }
    console.log(this.names)
}
if(!val) {

  this.friendsnames = this.names;
}


}

}
