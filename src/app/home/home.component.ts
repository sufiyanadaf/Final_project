import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userScore = 0;
  compScore = 0;
  userSelected: any;
  compSelected: any;
  action: any;
  status: any;
  compWeapons = [
    'rock',
    'paper',
    'scissors'
  ];
  constructor() { }

  ngOnInit(): void {
  }
  userChoice(userWeapon: string): void {
    this.userSelected = userWeapon;
    console.log( this.userSelected);
    setTimeout( () => {
      const randomNum = Math.floor(Math.random() * 3);
      this.compSelected = this.compWeapons[randomNum];
      console.log(this.compSelected);
      this.checkResult();
    }, 1000);
  }

  clearField() {
    setTimeout(() => {
      this.status = '';
      this.userSelected = '';
      this.compSelected = '';
    }, 1500);
  }

  winning(user:any, comp:any) {
    this.userScore ++;
    this.userSelected = user;
    this.compSelected = comp;
    this.action = 'beats';
    this.status = '. You win!';
    this.clearField();
  }


  loosing(user:any, comp:any) {
    this.compScore ++;
    this.userSelected = user;
    this.compSelected = comp;
    this.action = 'loses to';
    this.status = '. You lose!';
    this.clearField();
  }

  drawing(user:any, comp:any) {
    this.userSelected = user;
    this.compSelected = comp;
    this.action = 'and';
    this.status = '. You draw!';
    this.clearField();
  }

  checkResult() {
    const userChoice = this.userSelected;
    const compChoice = this.compSelected;
    switch (userChoice + compChoice) {
      case 'rockscissors':
      case 'paperrock':
      case 'scissorspaper':
        this.winning(userChoice, compChoice);
        break;
      case 'rockpaper':
      case 'scissorsrock':
      case 'paperscissors':
        this.loosing(userChoice, compChoice);
        break;
      default:
        this.drawing(userChoice, compChoice);
        break;
    }

  }

}
