import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  randomNumber;
  constructor(public navCtrl: NavController) {

  }
  getRandomNumber(){
    var maxV = 6;
    var minV = 1;
    this.randomNumber = Math.floor(Math.random ()*(maxV-minV)+minV)
  }

}
