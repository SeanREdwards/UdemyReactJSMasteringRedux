import { SET_RECIPES } from "../Actions";

export default function recipes(state = [], action){
    switch(action.type){
        case SET_RECIPES:
            return action.items
        default:
            return state;
    }
}