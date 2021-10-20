export const ADD_RECIPES = 'ADD_RECIPES';
export const SHOW_SEARCHBAR = 'SHOW_SEARCHBAR';
export const USER_LOGIN = 'USER_LOGIN';

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

export default function userLoginAction(payload) {
  return {
    type: USER_LOGIN,
    payload,
  }
}