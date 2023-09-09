import MathGame from './Math';

export default class Swordsman extends MathGame {
  constructor(name) {
    super(name);

    this.name = name;
    this.type = 'Swordsman';
    this.health = 100;
    this.level = 1;
    this.attack = 40;
    this.defence = 10;
  }
}
