
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SignInPage } from '../sign-in/sign-in';
import { HomePage } from '../home/home';
import { YouTouchPage } from '../you-choose/you-choose';
import { UpdateProfilePage } from './../update-profile/update-profile';

import { Facebook } from '@ionic-native/facebook';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  isLoggedIn:boolean = false;
  users: any;
  youTouchPage: any;
  homePage: any;
  updateProfilePage: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: Facebook) {
    this.youTouchPage = YouTouchPage;
    this.homePage = HomePage;
    this.updateProfilePage = UpdateProfilePage;
    // fb.getLoginStatus()
    // .then(res => {
    //   console.log(res.status);
    //   if(res.status === "connect") {
    //     this.isLoggedIn = true;
    //   } else {
    //     this.isLoggedIn = false;
    //   }
    // })
    // .catch(e => console.log(e));
  }
  loginWithFacebook() {}
 /*  loginWithFacebook() {
    alert("asdf");
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then(res => {
        if(res.status === "connected") {
          this.isLoggedIn = true;
          this.getUserDetail(res.authResponse.userID);
        } else {
          this.isLoggedIn = false;
        }
      })
      .catch(e => console.log('Error logging into Facebook', e));
  }
  getUserDetail(userid) {
    this.fb.api("/"+userid+"/?fields=id,email,name,picture,gender",["public_profile"])
      .then(res => {
        console.log(res);
        this.users = res;
      })
      .catch(e => {
        console.log(e);
      });
  } */
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  signIn(){
    this.navCtrl.push(SignInPage);
  }
  logIn(){
    this.navCtrl.push(HomePage);
  }
  
  /*  */
}
