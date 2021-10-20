import React, { useEffect } from 'react';
import CategoriesDrinksButtons from '../components/CategoriesDrinksButtons';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import { fetchInitialDrinks } from '../services/fetchDrinks';
import { connect } from 'react-redux';
import { addRecipesAction } from '../redux/actions';
import Footer from '../components/Footer';
import './styles/RecipesList.css';
import SearchBar from '../components/SearchBar';
import NoRecipesFound from '../components/NoRecipesFound';


function DrinksList({ recipesList, addRecipes }) {
  useEffect(() => {
    fetchInitialDrinks()
    .then((data) => addRecipes(data.slice(0, 12)));
  }, [addRecipes]);

  return (
    <div className="recipes-list-container">
      <Header />
      <SearchBar />
      <CategoriesDrinksButtons />
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

export default connect(mapStateToProps, mapDispatchToProps)(DrinksList);