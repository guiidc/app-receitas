export function isMealFavorite(id) {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (!favoriteRecipes) return false;
  if (!favoriteRecipes.filter(({ idMeal }) => idMeal === id).length) return false;
  return true;  
}

export function isDrinkFavorite(id) {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (!favoriteRecipes) return false;
  if (!favoriteRecipes.filter(({ idDrink }) => idDrink === id).length) return false;
  return true;  
}

