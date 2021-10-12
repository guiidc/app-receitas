export const ADD_RECIPES = 'ADD_RECIPES';
export const SHOW_SEARCHBAR = 'SHOW_SEARCHBAR';

export function addRecipesAction(payload) {
  return {
    type: ADD_RECIPES,
    payload,
  }
}

export function showSearchBarAction(payload) {
  return {
    type: SHOW_SEARCHBAR,
    payload,
  }
}