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

  useItem(user, target, item){
    let typeWeakness;
    if (target.type === "water") {
      typeWeakness = "earth"; 
    } else if (target.type === "earth") {
      typeWeakness = "fire";
    } else {
      typeWeakness = "water";
    }
    switch(item){
      case "potion":
        target.currentHp += 20;
        break;
      case "armor":
        target.currentHp *= 1.5;
        break;
      case "switch type":
        user.type = typeWeakness;
        break;
    }
    const toRemove = user.inventory.indexOf(item);
    user.inventory.splice(toRemove, 1);
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

