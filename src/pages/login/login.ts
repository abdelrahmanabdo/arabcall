import { DatabaseProvider } from './../../providers/database/database';
//import { FirebaseProvider } from './../../providers/firebase/firebase2';
import { CreataccountPage } from './../creataccount/creataccount';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FormControl , FormGroup , Validators } from '@angular/forms'
let firebase ; 
// import stylefile from '../assets/main.css' ; 
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls : ['./assets/main.css']
})
export class LoginPage {
email ; 
password ; 
  constructor(public database : DatabaseProvider,public navCtrl: NavController, public navParams: NavParams) {
  firebase = this.database ; 
}

  userForm = new FormGroup ({
     
      email : new FormControl (null , [Validators.required , Validators.email]) , 
      
      password : new FormControl (null , [Validators.required]) , 
     

  });

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login () {
      console.log(this.userForm.value)
    
    firebase.login(this.userForm.value.email,this.userForm.value.password) ; 
  }
creat () {
  this.navCtrl.push(CreataccountPage) ; 
  console.log("creat")
}
out() {

  firebase.signout () ; 
}
}
