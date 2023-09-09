/* eslint-disable no-unused-vars */
import MathGame from './Math';

export default class Daemon extends MathGame {
  constructor(name) {
    super(name);

    this.name = name;
    this.type = 'Daemon';
    this.health = 100;
    this.level = 1;
    this.attack = 25;
    this.defence = 40;
  }
}
