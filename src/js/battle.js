export default class Battle {
  constructor(player, enemy) {
    this.player = player;
    this.enemy = enemy;
  }

  attack(attacker, target, type){
    if (type === "earth" && target.type === "fire") {
      target.currentHp -= 1.95;
    } else if (type === "fire" && target.type === "water") {
      target.currentHp -= 1.95;
    } else if (type === "water" && target.type === "earth") {
      target.currentHp -= 1.95;
    } else if (type === "fire" && target.type === "earth") {
      target.currentHp -= 6;
    } else if (type === "water" && target.type === "fire") {
      target.currentHp -= 6; 
    } else if (type === "earth" && target.type === "water") {
      target.currentHp -= 6;  
    } else {
      target.currentHp -= 3; //default neutral attack value
    }
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

