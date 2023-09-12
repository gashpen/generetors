/* eslint-disable no-return-assign */
import Daemon from './Daemon';
import Magician from './Magician';
import Bowerman from './Bowerman';
import Swordsman from './Swordsman';
import Undead from './Undead';
import Zombie from './Zombie';

export default class Team {
  constructor() {
    this.enemyTeam = [this.zombie = new Zombie('Eva'),
      this.undead = new Undead('Ivan'),
      this.swordsman = new Swordsman('Oleg'),
      this.bowman = new Bowerman('Petr'),
      this.daemon = new Daemon('John'),
      this.mag = new Magician('Jack'),
    ];
  }

  * [Symbol.iterator]() {
    for (const member of this.enemyTeam) {
      yield member;
    }
  }
}
