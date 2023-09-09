/* eslint-disable no-unused-vars */
export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string') {
      throw new Error('Некорректное значение');
    }

    if (name.length < 2 || name.length > 10) {
      throw new Error('Минимальное кол-во символов 2, максимальное 10');
    }

    this.name = name;
    this.type = type;
  }

  levelUp() {
    if (this.health > 1) {
      this.level += 1;
      this.attack += Math.round(this.attack * 0.2);
      this.defence += Math.round(this.defence * 0.2);
      this.health = 100;
    } else {
      // eslint-disable-next-line no-alert
      alert(`Персонаж ${this.name} мертв, его уровень не может быть повышен`);
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= Math.round(points * 1 - this.defence / 100);
    }
  }
}
