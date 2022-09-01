import Character from "../src/js/character";
import Battle from "../src/js/battle";

describe('Battle', () => {
  let battle;
  let flameO;
  let oceana;
  let dirtmetri;
  let enemyOne;

  beforeEach(() => {
    dirtmetri = new Character("dirtmetri", "earth");
    dirtmetri.setStats([5, 5, 5, 5, 10]);
    dirtmetri.setHp(dirtmetri.statsArray[4]);
    flameO = new Character("flameO", "fire");
    flameO.setStats([5, 5, 5, 5, 10]);
    flameO.setHp(flameO.statsArray[4]);
    oceana = new Character("oceana", "water");
    oceana.setStats([5, 5, 5, 5, 10]);
    oceana.setHp(oceana.statsArray[4]);
    battle = new Battle(dirtmetri, flameO);
  });

  test('should correctly create a battle object', () => {
    expect(battle.player).toEqual(dirtmetri);
    expect(battle.enemy).toEqual(flameO);
    expect(battle.playerDefault).toEqual(dirtmetri);
  });

  test('should make the enemy lose 3 currentHp', () => {
    battle.attack(battle.player, battle.enemy, "neutral");
    expect(battle.enemy.currentHp).toEqual(7);
  });

  test('should make the enemy lose 1.95 currentHp if the target has type advantage', () => {
    let earthFire = new Battle(dirtmetri, flameO);
    earthFire.attack(earthFire.player, earthFire.enemy, earthFire.player.type);
    let fireWater = new Battle(flameO, oceana);
    fireWater.attack(fireWater.player, fireWater.enemy, fireWater.player.type);
    let waterEarth = new Battle(oceana, dirtmetri);
    waterEarth.attack(waterEarth.player, waterEarth.enemy, waterEarth.player.type);
    expect(earthFire.enemy.currentHp).toEqual(8.05);
    expect(fireWater.enemy.currentHp).toEqual(8.05);
    expect(waterEarth.enemy.currentHp).toEqual(8.05);
  });

  test('should make the enemy lose 6 currentHp if the attacker has type advantage', () => {
    let fireEarth = new Battle(flameO, dirtmetri);
    fireEarth.attack(fireEarth.player, fireEarth.enemy, fireEarth.player.type);
    let waterFire = new Battle(oceana, flameO);
    waterFire.attack(waterFire.player, waterFire.enemy, waterFire.player.type);
    let earthWater = new Battle(dirtmetri, oceana);
    earthWater.attack(earthWater.player, earthWater.enemy, earthWater.player.type);
    expect(fireEarth.enemy.currentHp).toEqual(4);
    expect(waterFire.enemy.currentHp).toEqual(4);
    expect(earthWater.enemy.currentHp).toEqual(4);
  });

  test('should remove an item from the player inventory', () => {
    battle.player.addItem("potion");
    battle.player.addItem("other Item");
    battle.useItem(battle.player, battle.player, "potion");
    expect(battle.player.inventory).toEqual(["other Item"]);
  });

  test('should heal player 20 hp when item:potion is used', () => {
    battle.player.addItem("potion");
    battle.useItem(battle.player, battle.player, "potion");
    expect(battle.player.currentHp).toEqual(30);
  });

  test('should multiply user currentHp by 1.5 when item:armor is used', () => {
    battle.player.addItem("armor");
    battle.useItem(battle.player, battle.player, "armor");
    expect(battle.player.currentHp).toEqual(15);
  });

  test('should change player type to enemy weakness when item:switch type is used', () => {
    let rocky = new Character("rocky", "earth");
    rocky.setStats([5,5,5,5,10]);
    rocky.setHp(rocky.statsArray[4]);
    let misty = new Character("misty", "water");
    misty.setStats([5,5,5,5,10]);
    misty.setHp(misty.statsArray[4]);
    let waterEarth = new Battle(oceana, rocky);
    let fireWater = new Battle(flameO, misty);
    let earthFire = new Battle(dirtmetri, flameO);
    dirtmetri.addItem("switch type");
    earthFire.useItem(earthFire.player, earthFire.enemy, "switch type");
    oceana.addItem("switch type");
    waterEarth.useItem(waterEarth.player, waterEarth.enemy, "switch type");
    flameO.addItem("switch type");
    fireWater.useItem(fireWater.player, fireWater.enemy, "switch type");
    expect(earthFire.player.type).toEqual("water");
    expect(waterEarth.player.type).toEqual("fire");
    expect(fireWater.player.type).toEqual("earth");
  });

  test('should reset player stats to default after battle', () => {
    battle.player.type = "fire";
    battle.player.currentHp = 4;
    battle.winFight();
    expect(battle.player).toEqual(battle.playerDefault);
  });
});