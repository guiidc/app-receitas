function addRecipeInProgress(id) {
  const recipesInProgress = JSON.parse(localStorage.getItem('recipesInProgress'));
  if (!recipesInProgress) {
    const recipesInProgress = [id]
    localStorage.setItem('recipesInProgress', JSON.stringify(recipesInProgress));
    return;
  }

  const newRecipesInProgress = [...recipesInProgress, id];
  localStorage.setItem('recipesInProgress', JSON.stringify(newRecipesInProgress));
}

export default addRecipeInProgress;
