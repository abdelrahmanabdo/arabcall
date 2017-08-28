import { PhotoselectionPage } from './../pages/photoselection/photoselection';
import { ChatPage } from './../pages/chat/chat';
import { ContactsPage } from './../pages/contacts/contacts';
import { GroupPage } from './../pages/group/group';
import { HttpModule } from '@angular/http';
import { CreataccountPage } from './../pages/creataccount/creataccount';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Network } from '@ionic-native/network';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { DatabaseProvider } from '../providers/database/database';
import { PhotoLibrary } from '@ionic-native/photo-library';
import { CDVPhotoLibraryPipe } from '../providers/pipes/cdvphotolibrary.pipe';
import { ImagePicker } from '@ionic-native/image-picker';
export const firebaseConfig = {
   apiKey: "AIzaSyBt7QkH8xuPVP29slUrCQ2iUtE3-DXBH5g",
    authDomain: "inderm-11508.firebaseapp.com",
    databaseURL: "https://inderm-11508.firebaseio.com",
    projectId: "inderm-11508",
    storageBucket: "inderm-11508.appspot.com",
    messagingSenderId: "960511319068"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,LoginPage,TabsPage,CreataccountPage,GroupPage,ContactsPage,ChatPage,PhotoselectionPage
  ,CDVPhotoLibraryPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,LoginPage,TabsPage,CreataccountPage,GroupPage,ContactsPage,ChatPage,PhotoselectionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Network,
    DatabaseProvider,DatabaseProvider,PhotoLibrary,ImagePicker
    
  ]
})
export class AppModule {}
