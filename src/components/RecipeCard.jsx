import React from 'react';
import { connect } from 'react-redux';
import './styles/RecipeCard.css';

function RecipeCard({ recipes}) {
  return (
    <div className="card-container">
      { recipes.map((recipe) => (
        <div className="recipe-card" key={ recipe.idMeal }>
          <img src={recipe.strMealThumb} alt={ recipe.strMeal} />
          <div className="card-title-container">
            <h4>{ recipe.strMeal }</h4>
          </div>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  recipes: state.recipesReducer,
});

export default connect(mapStateToProps)(RecipeCard);
