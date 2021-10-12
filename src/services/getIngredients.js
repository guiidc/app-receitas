export default function getIngredients(recipe) {
  const ingredients = []
  const keys = Object.keys(recipe);
  keys.forEach((key) => {
    if (recipe[key] && /strIngredient/ig.test(key)) {
      const finalNumber = key.match(/\d/g);
      ingredients.push(`${recipe[key]} - ${recipe[`strMeasure${finalNumber}`]}`)
    }
  })
  return ingredients;
}