export const ADD_RECIPES = 'ADD_RECIPES';
export const SHOW_SEARCHBAR = 'SHOW_SEARCHBAR';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

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

export function userLoginAction(payload) {
  return {
    type: USER_LOGIN,
    payload,
  }
}
export function userLogoutAction(payload) {
  return {
    type: USER_LOGOUT,
    payload,
  }
}