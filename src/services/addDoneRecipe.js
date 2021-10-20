export function addDoneMealRecipe(recipe) {
  const newRecipe = {
    id: recipe.idMeal,
    type: 'meal',
    area: recipe.strArea,
    category: recipe.strCategory,
    name: recipe.strMeal,
    image: recipe.strMealThumb,
    doneDate: new Date().toLocaleDateString('pt-BR'),
    tags: recipe.strTags,
  };

  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));

  if(!doneRecipes || !doneRecipes.length) {
      localStorage.setItem('doneRecipes', JSON.stringify([newRecipe]));
      return;
  }

  const teste = doneRecipes.map(({id}) => id);
  if (!teste.includes(recipe.idMeal)) {
    localStorage.setItem('doneRecipes', JSON.stringify([...doneRecipes, newRecipe]))
  };
}

export function addDoneDrinkRecipe(recipe) {
  const newRecipe = {
    id: recipe.idDrink,
    type: 'drink',
    area: recipe.strArea,
    category: recipe.strCategory,
    name: recipe.strDrink,
    image: recipe.strDrinkThumb,
    doneDate: new Date().toLocaleDateString('pt-BR'),
    tags: recipe.strTags,
  };

  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));

  if(!doneRecipes || !doneRecipes.length) {
      localStorage.setItem('doneRecipes', JSON.stringify([newRecipe]));
      return;
  }

  const teste = doneRecipes.map(({id}) => id);
  if (!teste.includes(recipe.idMeal)) {
    localStorage.setItem('doneRecipes', JSON.stringify([...doneRecipes, newRecipe]))
  };
}
