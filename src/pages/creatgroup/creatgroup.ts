import { DatabaseProvider } from './../../providers/database/database';
import { Component } from '@angular/core';
import { NavController, NavParams , LoadingController } from 'ionic-angular';
import {FormControl , FormGroup , Validators } from '@angular/forms'
/**
 * Generated class for the CreatgroupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-creatgroup',
  templateUrl: 'creatgroup.html',
  styleUrls : ['./assets/main.css']
})
export class CreatgroupPage {
friends;myInput ;friendsnames = []; names = [] ; pepperoni ; message ; 
  constructor(public navCtrl: NavController, public navParams: NavParams,public database:DatabaseProvider,public loadingctrl : LoadingController) {
  
}


  
  ionViewDidLoad() {
      let loading = this.loadingctrl.create({
    showBackdrop : false 
  });
loading.present() ; 
    
    console.log('ionViewDidLoad CreatbcPage');
     this.database.getfriends.subscribe (data => {
       loading.dismiss();
this.friends = data ; 
this.friendsnames = this.friends ; 


      
    })
    
   
  }
  

 

onInput(evt) {
this.names = this.friends;
let val = evt.target.value ; 


if (val && val.trim() != '') {
  this.friendsnames = [];
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
console.log('da5l')
  this.friendsnames = this.friends;
  console.log(this.friends)
}




}


onclick (value) {
value.users = [] ; 
var arr = Object.keys(value).map(function (key) { return value[key]; });
for(let i = 0 ; i < arr.length ; i ++) {

  if(arr[i]==true) {
    console.log(this.friendsnames[i].userid)
    // if(value.users){
    //  value.users.push(this.friendsnames[i].userid) ;  
    // }else{
    //   value.users = "" ; 
    //   value.users += this.friendsnames[i].userid ; 
    // }
    value.users.push(this.friendsnames[i].userid);
  
  }
}
console.log(value)
}
}
