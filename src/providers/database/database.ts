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



 var getFileBlob = function(url, cb) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.responseType = "blob";
        xhr.addEventListener('load', function() {
            cb(xhr.response);
        });
        xhr.send();
    };

    var blobToFile = function(blob, name) {
        blob.lastModifiedDate = new Date();
        blob.name = name;
        return blob;
    };

    var getFileObject = function(filePathOrUrl, cb) {
        getFileBlob(filePathOrUrl, function(blob) {
            cb(blobToFile(blob, 'test.jpg'));
        });
    };

    getFileObject(photo, function(fileObject) {
        var uploadTask = storageRef.child('images/test.jpg').put(fileObject);

        uploadTask.on('state_changed', function(snapshot) {
            console.log(snapshot);
        }, function(error) {
            console.log(error);
        }, function() {
            var downloadURL = uploadTask.snapshot.downloadURL;
            console.log(downloadURL);
            // handle image here
        });
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
