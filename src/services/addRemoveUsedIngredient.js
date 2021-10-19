export function addRemoveMealIngredient (recipe, ingredient) {
  const storagedRecipes = JSON.parse(localStorage.getItem('recipesInProgress'));
  let actualRecipe = storagedRecipes.meals[recipe.idMeal]
  if (!actualRecipe.includes(ingredient)) {
    actualRecipe = [...actualRecipe, ingredient];
  } else {
    actualRecipe.splice(actualRecipe.indexOf(ingredient), 1)
  }
  const newStorage = {
    ...storagedRecipes,
    meals: {
      ...storagedRecipes.meals,
      [recipe.idMeal]: actualRecipe,
    }
  }
  localStorage.setItem('recipesInProgress', JSON.stringify(newStorage));
  return actualRecipe;
}

export function addRemoveDrinkIngredient (recipe, ingredient) {
  const storagedRecipes = JSON.parse(localStorage.getItem('recipesInProgress'));
  let actualRecipe = storagedRecipes.drinks[recipe.idDrink]
  if (!actualRecipe.includes(ingredient)) {
    actualRecipe = [...actualRecipe, ingredient];
  } else {
    actualRecipe.splice(actualRecipe.indexOf(ingredient), 1)
  }
  const newStorage = {
    ...storagedRecipes,
    drinks: {
      ...storagedRecipes.drinks,
      [recipe.idDrink]: actualRecipe,
    }
  }
  localStorage.setItem('recipesInProgress', JSON.stringify(newStorage));
  return actualRecipe;
}
