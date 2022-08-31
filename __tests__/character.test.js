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

  test('should add experience to character object', () => {
    character.experience(1, 1, 1, 1);
    expect(character.experience.attack).toEqual(1);
    expect(character.experience.defense).toEqual(1);
    expect(character.experience.speed).toEqual(1);
    expect(character.experience.accuracy).toEqual(1);
  });
});