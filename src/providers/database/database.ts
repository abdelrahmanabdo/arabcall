import { Injectable } from '@angular/core';
import { Http , Headers , URLSearchParams } from '@angular/http';
import {AlertController} from 'ionic-angular'
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
declare var firebase ; 
let alert1,downloadURL,avatar,name ; 
let userID = "30" ; 
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
  response ; 

  constructor(public alertctrl:AlertController,public http: Http) {
    console.log('Hello DatabaseProvider Provider');
    this.init() ;
    firebase.initializeApp(config)
    alert1 = this.alertctrl ; 
    
  }
  login = (data) => {
    
    const url = 'http://nilemm.com/arabface/api/89129812/login?' + 'username=' + data.username + '&password=' + data.password;
     console.log(url)
     var headers = new Headers();
     headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post(url,headers).subscribe(data3 => {
      this.response = data3.text() ; 
     
      this.response = JSON.parse(this.response) ; 
      console.log(this.response)
    
      if(this.response.status == 1) {
      avatar = this.response.avatar ; 
      name = this.response.name ; 
        firebase.auth().signInWithEmailAndPassword(data.username, data.password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
 console.log(errorCode);
  if(errorCode == "auth/network-request-failed"){
    
     let alert = alert1.create({
      title: 'Error',
      subTitle: 'Check Your Internet Connection And Try Again',
      buttons: ['OK']
    });
    alert.present();
  }

    if(errorCode == "auth/user-not-found"){
     
    
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

    getFileObject(avatar, function(fileObject) {
        var uploadTask = storageRef.child('images/test.jpg').put(fileObject);

        uploadTask.on('state_changed', function(snapshot) {
            console.log(snapshot);
        }, function(error) {
            console.log(error);
        }, function() {
            downloadURL = uploadTask.snapshot.downloadURL;
            console.log(downloadURL);
               
    firebase.auth().createUserWithEmailAndPassword(data.username, data.password).then (() => {

       user = firebase.auth().currentUser;
       user.updateProfile({
  displayName: name,
  photoURL:downloadURL , 
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
        });
    });

 

  }

});
      }else {
         let alert = alert1.create({
      title: 'Error',
      subTitle: 'User Not Found',
      buttons: ['OK']
    });
    alert.present();
      }
    })
    

  }



 
  public creat1 (email,password,name,data) {

   let body = new URLSearchParams();
body.append('firstname', data.firstname);
body.append('lastname', data.lastname);
body.append('username', name);
body.append('email_address', data.email_address);
body.append('password', password);
 let body1 = body.toString () ; 


 
  let url = 'http://nilemm.com/arabface/api/89129812/signup?' + 'firstname=' + data.firstname + '&lastname=' + data.lastname + '&username=' + name + '&email_address=' + data.email_address + '&password='+password ;
let url2 = 'http://nilemm.com/arabface/api/89129812/signup' ; 

let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
this.http.post (url2,body1,{headers: headers}).subscribe(data => {
console.log(data);
let data1 = data.text() ; 
data = JSON.parse(data1) ; 
console.log(data) ; 

 if (data.status == 1) {
   console.log("condition true")
done () ; 

 }
});
function done () {
  console.log("in function")
firebase.auth().createUserWithEmailAndPassword(data.email_address, password).then (() => {

       user = firebase.auth().currentUser;
       user.updateProfile({
  displayName: data.username
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
    
  }

  _handleReaderLoaded(readerEvt) {
     var binaryString = readerEvt.target.result;
            
            console.log(btoa(binaryString));
    }
    public creat2 (email,password,name,photo,firstname,lastname) {
       let url = 'http://nilemm.com/arabface/api/89129812/signup?' + 'firstname=' + firstname + 'lastname=' + lastname + 'username=' + name + 'email_address=' + email + 'password='+password ;
var headers = new Headers();
     headers.append('Content-Type', 'application/x-www-form-urlencoded');
this.http.post (url,headers).subscribe(data => {

  console.log(data) ; 
});
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

  getconvo = new Observable (observer => {
    let body = new URLSearchParams() ; 
    body.append('userid' , userID )
    let body1 = body.toString() ; 
   let  headers = new Headers();
     headers.append('Content-Type', 'application/x-www-form-urlencoded');
this.http.post('http://nilemm.com/arabface/api/89129812/chat/conversations' , body1 , {headers : headers}).subscribe(data => {
let data1 = data.text() ;
data = JSON.parse(data1) ;  
  observer.next(data) ; 
})

  })

    getfriends = new Observable (observer => {
    let body = new URLSearchParams() ; 
    body.append('userid' , userID )
    let body1 = body.toString() ; 
   let  headers = new Headers();
     headers.append('Content-Type', 'application/x-www-form-urlencoded');
this.http.post('http://nilemm.com/arabface/api/89129812/profile/friends' , body1 , {headers : headers}).subscribe(data => {
let data1 = data.text() ;
data = JSON.parse(data1) ;  
  observer.next(data) ; 
})

  })


}
