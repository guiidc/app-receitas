const isFavorite = (id) => {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (!favoriteRecipes || !favoriteRecipes.includes(id)) return false;
  return true;  
}

export default isFavorite;
