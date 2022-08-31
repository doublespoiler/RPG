import Character from "../src/character";

describe('Character', () => {

  test('should correctly create a character object', () => {
    let character = new Character("Flame-o", "fire");
    expect(character.name).toEqual("Flame-o");
    expect(character.type).toEqual("fire");
  });
})