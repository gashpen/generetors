/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
import Character from './Chararcter';

export default class MathGame extends Character {
  get hit() {
    return this.attack;
  }

  set hit(value) {
    if (this.dope === true) {
      if (value === 5) {
        this.attack = 60 * (this.attack / 100) - Math.log2(5) * 5;
      }
      if (value === 4) {
        this.attack = 70 * (this.attack / 100) - Math.log2(4) * 5;
      }
      if (value === 3) {
        this.attack = 80 * (this.attack / 100) - Math.log2(3) * 5;
      }
      if (value === 2) {
        this.attack = 90 * (this.attack / 100) - Math.log2(2) * 5;
      }
      if (value === 1) {
        this.attack = 100 * (this.attack / 100) - Math.log2(1) * 5;
      }

      if (this.dope === false) {
        if (value === 5) {
          this.attack = 60 * (this.attack / 100);
        }
        if (value === 4) {
          this.attack = 70 * (this.attack / 100);
        }
        if (value === 3) {
          this.attack = 80 * (this.attack / 100);
        }
        if (value === 2) {
          this.attack = 90 * (this.attack / 100);
        }
        if (value === 1) {
          this.attack = 100 * (this.attack / 100);
        }
      }
    }
  }

  set stoned(stoned) {
    this.dope = stoned;
  }

  get stoned() {
    return this.dope;
  }
}
