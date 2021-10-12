import React, { useState } from 'react';
import './styles/SearchBar.css';
import { connect } from 'react-redux';
import { fetchByIngredient, fetchByRecipe } from '../services/fetchMeals';
import  { showSearchBarAction, addRecipesAction } from '../redux/actions';

function SearchBar({ showSearchBar, addRecipes, setSearchBar}) {
  const [radioValue, setRadioValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleRadio = ({ target }) => {
    setRadioValue(target.value)
  }

  const handleInput = ({ target }) => {
    setInputValue(target.value);
  }

  const handleClick = () => {
    if (!inputValue.trim()) return;

    if (radioValue === 'recipes') {
      fetchByRecipe(inputValue)
      .then((data) => {
        if (data) {
          addRecipes(data.splice(0, 12));
          setSearchBar(false);
        } else {
          addRecipes(data);
          setSearchBar(false);
        }
          })
        .catch((err) => console.log(err));
        return;
    }

    fetchByIngredient(inputValue)
    .then((data) => {
      if (data) {
        addRecipes(data.splice(0, 12));
        setSearchBar(false);
      } else {
        addRecipes(data);
        setSearchBar(false);
      }
    })
    .catch((err) => console.log(err));    
  }


  return (
    <div className={ showSearchBar ? 'search-bar-container' : 'hidden'}>
      <input
        type="text"
        id="search-bar"
        placeholder="Procurar receitas"
        onChange={ handleInput }
        value={ inputValue }
      />
      <div className="search-bar-buttons-container" onChange={ handleRadio }>
        <label>
          <input
            type="radio" 
            name="searchType"
            className="radio-search"
            value="recipes"
            />
          Receitas
        </label>
        <label>
          <input 
            type="radio"
            name="searchType"
            className="radio-search"
            value="ingredients"
          />
          Ingredientes
        </label>
        <button
          id="search-btn"
          type="button"
          onClick={ handleClick }
        >
          Pesquisar
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  showSearchBar: state.searchBarReducer.showSearchBar,
})

const mapDispatchToProps = (dispatch) => ({
  addRecipes: (payload) => dispatch(addRecipesAction(payload)),
  setSearchBar: (payload) => dispatch(showSearchBarAction(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
