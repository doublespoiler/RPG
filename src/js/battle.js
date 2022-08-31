export default class Battle {
  constructor(player, enemy) {
    this.player = player;
    this.enemy = enemy;
  }

  attack(attacker, target, type){
    target.currentHp -= 3; //default neutral attack value
  }
}
