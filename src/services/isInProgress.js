function isInProgress(id) {
  const recipesInProgress = JSON.parse(localStorage.getItem('recipesInProgress'));
  if (!recipesInProgress || !recipesInProgress.includes(id)) return false;
  return true;
}

export default isInProgress;
