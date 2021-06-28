import { combineReducers } from 'redux';

import characters from './CharactersReducer';
import heroes from './HeroesReducer';

const rootReducer = combineReducers({
  characters,
  heroes
})

export default rootReducer;