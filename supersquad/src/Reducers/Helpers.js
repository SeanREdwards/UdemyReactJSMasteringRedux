import characters_json from '../Data/characters.json';

export function createCharacter(id) {
  let character = characters_json.find(c => c.id === id);
  return character;
}