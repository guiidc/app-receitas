import { ADD_RECIPES } from "../actions";

const INITIAL_STATE = [];

export default function recipesReducer (state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_RECIPES:
      return action.payload;
    default:
      return state;
  }
}