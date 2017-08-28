import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {AlertController} from 'ionic-angular'

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
declare var firebase ; 
let alert1 ; 
let config = {
    apiKey: "AIzaSyBt7QkH8xuPVP29slUrCQ2iUtE3-DXBH5g",
    authDomain: "inderm-11508.firebaseapp.com",
    databaseURL: "https://inderm-11508.firebaseio.com",
    projectId: "inderm-11508",
    storageBucket: "inderm-11508.appspot.com",
    messagingSenderId: "960511319068"
  };
  let user ; 
/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  constructor(public alertctrl:AlertController,public http: Http) {
    console.log('Hello DatabaseProvider Provider');
    this.init() ;
    firebase.initializeApp(config)
    alert1 = this.alertctrl ; 
    
  }
  login (email,password) {
    
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  if(errorCode == "auth/network-request-failed"){
    
     let alert = alert1.create({
      title: 'Error',
      subTitle: 'Check Your Internet Connection And Try Again',
      buttons: ['OK']
    });
    alert.present();
  }

});

  }
  creat1 (email,password,name) {

    firebase.auth().createUserWithEmailAndPassword(email, password).then (() => {

       user = firebase.auth().currentUser;
       user.updateProfile({
  displayName: name
}).then(function() {
  // Update successful.
}).catch(function(error) {
  // An error happened.
});
    }).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  let alert = alert1.create({
      title: 'Error',
      subTitle: errorMessage,
      buttons: ['OK']
    });
    alert.present();
});

  }

  _handleReaderLoaded(readerEvt) {
     var binaryString = readerEvt.target.result;
            
            console.log(btoa(binaryString));
    }
    creat2 (email,password,name,photo) {
var storageRef = firebase.storage().ref();

// Create a reference to 'mountains.jpg'
var mountainsRef = storageRef.child('mountains.png');

// Create a reference to 'images/mountains.jpg'
// var mountainImagesRef = storageRef.child('images/mountains.jpg');

// While the file names are the same, the references point to different files
// mountainsRef.name === mountainImagesRef.name            // true
// mountainsRef.fullPath === mountainImagesRef.fullPath    // false
var file = photo.changingThisBreaksApplicationSecurity ; 
console.log(file)

file = "http://www.collegedegreesearch.net/wp-content/uploads/2014/02/search.png" ; 
//  var reader = new FileReader();
// reader.onload =this._handleReaderLoaded.bind(this);

        //reader.readAsBinaryString(file);

      var metadata = {
  contentType: 'image/png',
};
console.log(typeof(file));
 // use the Blob or File API .changingThisBreaksApplicationSecurity
mountainsRef.put(file , metadata).then(function(snapshot) {
  console.log('Done');
});
    firebase.auth().createUserWithEmailAndPassword(email, password).then (() => {

       user = firebase.auth().currentUser;
       user.updateProfile({
  displayName: name,
  photoURL:photo , 
}).then(function() {
  // Update successful.
}).catch(function(error) {
  // An error happened.
});
    }).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  let alert = alert1.create({
      title: 'Error',
      subTitle: errorMessage,
      buttons: ['OK']
    });
    alert.present();
});

  }
 user = new Observable(observer => {
 firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    console.log(displayName)
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    console.log(user.email);
    observer.next("logged")
  } else {
 
   observer.next("not here")
  }
});

}) ;
  
  init() {


 
  }

  signout () {

    firebase.auth().signOut().then(function() {
  console.log("success")
}).catch(function(error) {
  console.log("error" + error)
});
  }


}
