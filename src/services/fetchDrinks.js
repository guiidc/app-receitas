export async function fetchInitialDrinks() {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const data = await response.json();
    return data.drinks;
  } catch (err) {
    console.log(err);
  }
}

export async function fetchCategories() {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    const data = await response.json();
    return data.drinks;
  } catch (err) {
    console.log(err);
  }
}

export async function fetchByCategory(category) {
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
    const data = await response.json();
    return data.drinks;
  } catch (err) {
    console.log(err);
  }
}

// export async function fetchByRecipe(name) {
//   try {
//     const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
//     const data = await response.json();
//     return data.drinks;
//   } catch (err) {
//     console.log(err);
//   }
// }

// export async function fetchByIngredient(ingredient) {
//   try {
//     const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
//     const data = await response.json();
//     return data.meals;
//   } catch (err) {
//     console.log(err);
//   }
// }

export async function fetchById(id) {
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    return data.drinks;
  } catch (err) {
    console.log(err);
  }
}