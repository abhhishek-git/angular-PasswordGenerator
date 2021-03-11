import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password='';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick(){
    console.log(`
      About to generate a password with the following:
      Include letters : ${this.includeLetters}
      Include numbers : ${this.includeNumbers}
      Include Symbols : ${this.includeSymbols}
    `);
    this.password='My Password!!';
  }

  getName(){
    return "Abhishek";
  }
}
