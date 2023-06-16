import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-strenght-bar',
  templateUrl: './strenght-bar.component.html',
  styleUrls: ['./strenght-bar.component.css'],
})
export class StrenghtBarComponent implements OnChanges {
  colors = ['red', 'yellow', 'green', 'red'];
  bar0: string;
  bar1: string;
  bar2: string;
  message: string;

  @Input() passwordToCheck: any;

  checkStrength(password: string) {
    let strenght = 0;

    const letters = /[a-zA-Z]+/.test(password);
    const numbers = /[0-9]+/.test(password);
    const symbols =
      /[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g.test(
        password
      );

    const elements = [letters, numbers, symbols];

    let matchPassword = 0;
    for (const element of elements) {
      matchPassword += element === true ? 1 : 0;
    }

    if (password.length < 8) {
      strenght = 5;
    }
    strenght = matchPassword === 1 && password.length > 7 ? 10 : strenght;
    strenght = matchPassword === 2 && password.length > 7 ? 20 : strenght;
    strenght = matchPassword === 3 && password.length > 7 ? 30 : strenght;

    return strenght;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const password = changes['passwordToCheck'].currentValue;

    this.barColors(3, '#DDD');

    if (password) {
      const pwdStrength = this.checkStrength(password);
      const color = this.getColor(pwdStrength);

      this.barColors(color.index, color.color);

      switch (pwdStrength) {
        case 10:
          this.message = 'Easy';
          break;
        case 20:
          this.message = 'Medium';
          break;
        case 30:
          this.message = 'Strong';
          break;
      }
    } else {
      this.message = 'Min 8 characters required';
    }
  }

  getColor(strength: number) {
    let index = 0;

    if (strength === 10) {
      index = 0;
    } else if (strength === 20) {
      index = 1;
    } else if (strength === 30) {
      index = 2;
    } else if (strength === 5) {
      index = 3;
    }

    return {
      index: index + 1,
      color: this.colors[index],
    };
  }

  barColors(count: number, color: string) {
    for (let n = 0; n < count; n++) {
      (this as any)['bar' + n] = color;
    }
  }
}
