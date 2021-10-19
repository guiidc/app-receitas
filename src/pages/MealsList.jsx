import React, { useEffect } from 'react';
import CategoriesMealsButtons from '../components/CategoriesMealsButtons';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import { fetchInitialMeals } from '../services/fetchMeals';
import { connect } from 'react-redux';
import { addRecipesAction } from '../redux/actions';
import Footer from '../components/Footer';
import './styles/RecipesList.css';
import SearchBar from '../components/SearchBar';
import NoRecipesFound from '../components/NoRecipesFound';


function MealsList({ recipesList, addRecipes }) {
  useEffect(() => {
    fetchInitialMeals()
    .then((data) => addRecipes(data.slice(0, 12)));
  }, [addRecipes]);

  return (
    <div className="recipes-list-container">
      <Header />
      <SearchBar />
      <CategoriesMealsButtons />
      { recipesList ?  <RecipeCard /> : <NoRecipesFound />} 
      <Footer />
    </div>
  )
}

const mapStateToProps = (state) => ({
  recipesList: state.recipesReducer,
});

const mapDispatchToProps = (dispatch) => ({
  addRecipes: (payload) => dispatch(addRecipesAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MealsList);
