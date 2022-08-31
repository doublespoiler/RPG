import Character from "../src/js/character";
import Battle from "../src/js/battle";

describe('Battle', () => {
  let battle;
  let playerOne;
  let enemyOne;

  beforeEach(() => {
    playerOne = new Character("Rock-y", "earth");
    playerOne.setStats([5, 5, 5, 5, 10]);
    playerOne.setHp(playerOne.statsArray[4]);
    enemyOne = new Character("Lava-Gurl", "fire");
    enemyOne.setStats([5, 5, 5, 5, 10]);
    enemyOne.setHp(enemyOne.statsArray[4]);
    battle = new Battle(playerOne, enemyOne);
  });

  test('should correctly create a battle object', () => {
    expect(battle.player).toEqual(playerOne);
    expect(battle.enemy).toEqual(enemyOne);
  });

  test('should make the enemy lose 3 currentHp', () => {
    battle.attack(battle.player, battle.enemy, "neutral");
    expect(battle.enemy.currentHp).toEqual(7);
  });

  test('should make the enemy lose 1.95 currentHp', () => {
    battle.attack(battle.player, battle.enemy, battle.player.type);
    expect(battle.enemy.currentHp).toEqual(8.05);
  });

});