import getIngredients from "./getIngredients";

export function addMealInProgress(recipe) {
  const recipesInProgress = JSON.parse(localStorage.getItem('recipesInProgress'));
  if (!recipesInProgress) {
    const recipesInProgress = { meals: { [recipe.idMeal]: []} }
    localStorage.setItem('recipesInProgress', JSON.stringify(recipesInProgress));
    return;
  }

  const newRecipesInProgress = {...recipesInProgress, meals: { ...recipesInProgress.meals, [recipe.idMeal]: []}};
  localStorage.setItem('recipesInProgress', JSON.stringify(newRecipesInProgress));
}

export function addDrinkInProgress(recipe) {
  const recipesInProgress = JSON.parse(localStorage.getItem('recipesInProgress'));
  if (!recipesInProgress) {
    const recipesInProgress = { drinks: { [recipe.idDrink]: []} }
    localStorage.setItem('recipesInProgress', JSON.stringify(recipesInProgress));
    return;
  }

  const newRecipesInProgress = {...recipesInProgress, drinks: { ...recipesInProgress.drinks, [recipe.idDrink]: []}};
  localStorage.setItem('recipesInProgress', JSON.stringify(newRecipesInProgress));
}
