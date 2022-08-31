import Character from "../src/character";

describe('Character', () => {
  let character;

  beforeEach(() => {
    character = new Character("Flame-o", "fire");
  });

  test('should correctly create a character object', () => {
    expect(character.name).toEqual("Flame-o");
    expect(character.type).toEqual("fire");
  });

  test('should add stats to character object', () => {
    character.setStats([1, 2, 3, 4, 5]);
    expect(character.statsArray).toEqual([1, 2, 3, 4, 5]);
  });
});