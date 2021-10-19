export function addRemoveFavoriteMeals(recipe, id) {
  const {idMeal, strMeal, strMealThumb, strCategory, strArea, strTags } = recipe;
  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (!favorites) {
    const newFavorite = [{ idMeal, strMeal, strMealThumb, strCategory, strArea, strTags, type: 'meal' }];
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorite));
    return true;
  }
  if(!favorites.filter(({ idMeal }) => idMeal === id).length) {
    const newFavorites = [...favorites, { idMeal, strMeal, strMealThumb, strCategory, strArea, strTags, type: 'meal' }];
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
    return true;
  }
  const newFavorites = [...favorites];
  newFavorites.forEach(({idMeal}, index) => {
    if (idMeal === id) newFavorites.splice(index, 1);
  });
  if (!newFavorites.length) {
    localStorage.removeItem('favoriteRecipes')
    return false;
  } 
  localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
  return false; 
}

export function addRemoveFavoriteDrinks(recipe, id) {
  const {idDrink, strDrink, strDrinkThumb, strCategory, strArea, strTags } = recipe;
  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (!favorites) {
    const newFavorite = [{ idDrink, strDrink, strDrinkThumb, strCategory, strArea, strTags, type: 'drink' }];
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorite));
    return true;
  }
  if(!favorites.filter(({ idDrink }) => idDrink === id).length) {
    const newFavorites = [...favorites, { idDrink, strDrink, strDrinkThumb, strCategory, strArea, strTags, type: 'drink' }];
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
    return true;
  }
  const newFavorites = [...favorites];
  newFavorites.forEach(({idDrink}, index) => {
    if (idDrink === id) newFavorites.splice(index, 1);
  });
  if (!newFavorites.length) {
    localStorage.removeItem('favoriteRecipes')
    return false;
  } 
  localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
  return false; 
}

