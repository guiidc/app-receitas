function addRemoveFavorite(id) {
  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (!favorites) {
    const newFavorite = [id];
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorite));
    return true;
  }

  if(!favorites.includes(id)) {
    const newFavorites = [...favorites, id];
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
    return true;
  }

  const newFavorites = [...favorites];
  newFavorites.splice(newFavorites.indexOf(id), 1);
  if (!newFavorites.length) {
    localStorage.removeItem('favoriteRecipes')
    return false;
  } 
  localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
  return false; 
}

export default addRemoveFavorite;
