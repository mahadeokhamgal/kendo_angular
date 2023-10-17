import { Component } from '@angular/core';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.css']
})
export class SumComponent {
  leftVal : number;
  rightVal : number;
  result : number;
  constructor(){
    this.leftVal = 0;
    this.rightVal = 0;
    this.result = 0;
  }
  calculate (){
    console.log("log called");

    this.result = this.leftVal + this.rightVal;
  }
}
