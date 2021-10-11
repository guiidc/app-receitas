export const ADD_RECIPES = 'ADD_RECIPES';

export function addRecipesAction(payload) {
  return {
    type: ADD_RECIPES,
    payload,
  }
}