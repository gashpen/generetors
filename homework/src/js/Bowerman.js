import MathGame from './Math';

export default class Bowerman extends MathGame {
  constructor(name) {
    super(name);

    this.name = name;
    this.type = 'Bowman';
    this.health = 100;
    this.level = 1;
    this.attack = 25;
    this.defence = 25;
  }
}
