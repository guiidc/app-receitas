import React from 'react';
import { connect } from 'react-redux';
import './styles/RecipeCard.css';
import { Link } from 'react-router-dom';

function RecipeCard({ recipes }) {
  return (
    <div className="card-container">
      { recipes.map((recipe) => (
        <Link to={`/receitas/${recipe.idMeal}`} key={ recipe.idMeal }>
          <div className="recipe-card" >
            <img src={recipe.strMealThumb} alt={ recipe.strMeal} />
            <div className="card-title-container">
              <h4>{ recipe.strMeal }</h4>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  recipes: state.recipesReducer,
});

export default connect(mapStateToProps)(RecipeCard);
