import characters_json from '../Data/characters.json';
import { ADD_CHARACTER, REMOVE_CHARACTER } from '../Actions';
import { createCharacter } from './Helpers';


function characters(state = characters_json, action) {
  switch(action.type) {
    case ADD_CHARACTER:
      let characters = state.filter(item => item.id !== action.id);
      return characters;
    case REMOVE_CHARACTER:
      characters = [...state, createCharacter(action.id)];
      return characters;
    default:
      return state;
  }
}

export default characters;