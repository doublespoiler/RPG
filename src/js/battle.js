export default class Battle {
  constructor(player, enemy) {
    this.player = player;
    this.enemy = enemy;
    this.playerType = player.type;
  }

  attack(attacker, target, type){
    //attacker attack
    //defender defense
    //critmod
    //crit multiplier
    //type advantage
    //supereffectivesum 
    //noteffectivesum
    //sum
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

  winFight() {
    this.player.type = this.playerType;
    this.player.currentHp = this.player.statsArray[4];
    //Battle tournamentArc(deku, todoroki)
      //this.player = deku;
      //this.enemy  = totoroki;
      //tournamentArc.winFight
        //this.player.type

    //Battle Dragonball
      //this.player = goku;
      //this.enemy = vegeta;
      //dragonball.winFight
        //this.player.type

    //Battle class
      //this.player = player1;
      //this.enemy = player2;
      //Battle.prototype.winFight()
        //this.player.type

    //add random item to inventory
    //math.random 1-100
    //50% potion
    //35% type switch
    //15% armor
    //add xp for defeating enemy
  }

  loseFight() {
    //game over?
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

