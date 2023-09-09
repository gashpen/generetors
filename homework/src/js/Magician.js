/* eslint-disable no-unused-vars */
import MathGame from './Math';

export default class Magican extends MathGame {
  constructor(name) {
    super(name);

    this.name = name;
    this.type = 'Magican';
    this.health = 100;
    this.level = 1;
    this.attack = 10;
    this.defence = 40;
  }
}
