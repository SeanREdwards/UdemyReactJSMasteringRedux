import {combineReducers} from 'redux';
import recipes from './RecipesReducer'
import favoriteRecipes from './FavoriteRecipesReducer'

const rootReducer = combineReducers({ recipes, favoriteRecipes });

export default rootReducer;