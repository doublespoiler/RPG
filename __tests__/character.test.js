import Character from "../src/character";

describe('Character', () => {
  let character;

  beforeEach(() => {
    character = new Character("Flame-o", "fire");
    character.setStats([1, 2, 3, 4, 5]);
  });

  test('should correctly create a character object', () => {
    expect(character.name).toEqual("Flame-o");
    expect(character.type).toEqual("fire");
  });

  test('should add stats to character object', () => {
    expect(character.statsArray).toEqual([1, 2, 3, 4, 5]);
  });

  test('should set current HP to MaxHP (statsArray[4])', () => {
    character.setHp(character.statsArray[4]);
    expect(character.currentHp).toEqual(character.statsArray[4]);
  });

  test('should add to the currentXp of the character', () => {
    character.addXp(5);
    expect(character.currentXp).toEqual(5);
  });
});