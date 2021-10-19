export default function typeFilter(array, type) {
  if(!type) return array;
  return array.filter((recipe) => (
    recipe.type === type
  ));
}