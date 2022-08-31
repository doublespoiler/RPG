export default class Character {
  constructor(name, type){
    this.name = name;
    this.type = type;
    this.statsArray = []; //this includes stats that will change when we level up: attack, defense, speed, accuracy, maxHp
    this.currentHp;
    this.currentXp = 0;
  }
  setStats(array) {
    array.forEach(element => {
      this.statsArray.push(element);
    });
  }
  setHp(setHpTo) {
    this.currentHp = setHpTo;
  }
  addXp(toAdd) {

  }
}

