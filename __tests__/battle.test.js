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
    battle = new Battle(dirtmetri, flameO); //
  });

  test('should correctly create a battle object', () => {
    expect(battle.player).toEqual(dirtmetri);
    expect(battle.enemy).toEqual(flameO);
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
});