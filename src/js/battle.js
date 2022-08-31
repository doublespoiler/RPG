export default class Battle {
  constructor(player, enemy) {
    this.player = player;
    this.enemy = enemy;
  }

  attack(attacker, target, type){
    target.currentHp -= 3; //default neutral attack value
  }
}

//attacker       target         result
// type             type            
//-----------------------------------------
// fire           water          less effective (x0.65)
// fire            earth          more effective (x2)
// fire            fire          normal (x1)
// earth          fire           less effective
// earth         water            more effective
// earth         earth            normal
// water         earth           less effective
// water         fire            more effective
// water        water             normal

