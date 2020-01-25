import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.page.html',
  styleUrls: ['./calculatrice.page.scss'],
})
export class CalculatricePage implements OnInit {
  display = 0;
  memory = 0;
  state = 'number';
  operator = '+';
  constructor() { }
  ngOnInit() {
  }
  clickNumber(n: number) {
    switch (this.state) {
      case 'number':
        this.display = this.display * 10 + n;

        break;
      case 'operator':
        this.display = n;
        this.state = 'number';
        break;
      case 'result':
        this.memory = 0;
        this.display = n;
        this.state = 'number';
    }
  }

  clickOperator(o: string) {
    this.calculate();
    this.operator = o;
    this.memory = this.display;
    this.state = 'operator';
  }

  calculate() {
    this.display = eval('' + this.memory + this.operator + '(' + this.display + ')');
    this.memory = 0;
    this.state = 'result';
    this.operator = '+';
  }

  reset() {
    this.display = 0;
    this.memory = 0;
    this.state = 'number';
    this.operator = '+';
  }
}


