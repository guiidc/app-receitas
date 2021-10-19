export function isMealInProgress(id) {
  const recipesInProgress = JSON.parse(localStorage.getItem('recipesInProgress'));
  if (!recipesInProgress || !recipesInProgress.meals) return false;
  if (!Object.keys(recipesInProgress.meals).includes(id)) return false;
  return true;
}

export function isDrinkInProgress(id) {
  const recipesInProgress = JSON.parse(localStorage.getItem('recipesInProgress'));
  if (!recipesInProgress || !recipesInProgress.drinks) return false;
  if (!Object.keys(recipesInProgress.drinks).includes(id)) return false;
  return true;
}
