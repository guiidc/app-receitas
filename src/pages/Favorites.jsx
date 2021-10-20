import React, { useState } from 'react';
import shareIcon from '../icons/share-icon.svg';
import favoriteIcon2 from '../icons/favorite2-icon.svg';
import copy from 'clipboard-copy';
import typeFilter from '../services/typeFilter';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './styles/Favorites.css';
import SearchBar from '../components/SearchBar';
import NoRecipesFound from '../components/NoRecipesFound';

function Favorites() {
  const [ copyMsg, setCopyMsg] = useState([]);
  const localFavorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const [ favorites, setfavorites] = useState(localFavorites);
  const [type, setType] = useState('')
  
  if (!favorites) return (
    <div>
      <Header />
      <SearchBar />
      <NoRecipesFound />
      <Footer />
    </div>
  );
  

  const handleClipBoard = (recipe, index) => {
    setCopyMsg([index]);
    if(recipe.idMeal) {
      copy(`https://appfoodproject.netlify.app/comidas/${recipe.idMeal}`);
    } else {
      copy(`https://appfoodproject.netlify.app/bebidas/${recipe.idDrink}`);
    }
    setTimeout(() => setCopyMsg([]), 2000)
  };
  
  const removeFavorite = (index) => {
    const newFavorites = [...favorites];
    newFavorites.splice(index, 1)
    setfavorites(newFavorites)
    if (!newFavorites.length) {
      return localStorage.removeItem('favoriteRecipes');
    }
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
  };

  return (
    <div className="favorites-container">
      <Header />
      <SearchBar />
      <div className="filter-buttons-container">
        <button type="button" onClick ={() => setType('meal')} className="orange-small-buttons">Comida</button>
        <button type="button" onClick ={() => setType('drink')}  className="orange-small-buttons">Bebidas</button>
        <button type="button" onClick ={() => setType('')}  className="orange-small-buttons">Mostrar todas</button>
      </div>
      <div className="favorites-card-wrapper">
        { typeFilter(favorites, type).map((recipe, index) => {
          const actualType = recipe.type;
          return (
            <div key={ actualType === 'meal' ? recipe.idMeal : recipe.idDrink } className="favorite-card">
              <div className="favorite-recipe-img">
                <img src={ actualType === 'meal' ? recipe.strMealThumb : recipe.strDrinkThumb} alt={ actualType === 'meal' ? recipe.strMeal : recipe.strDrink } />
              </div>
              <div className="favorite-card-info">
                  <p>{ recipe.strCategory }</p>
                  <h3>{ actualType === 'meal' ? recipe.strMeal : recipe.strDrink}</h3>
                <div className="recipe-share-container">
                  <img src={ shareIcon } alt="botão para compartilhar" onClick={ () => handleClipBoard(recipe, index) } />
                  <img
                    onClick={ () => removeFavorite(index) }
                    src={ favoriteIcon2 }
                    alt="botão para favoritar"
                    />
                </div>
                    { copyMsg.includes(index) && <p id="copy-msg">Link Copiado</p> }
              </div>
          </div>
          )
        })}
      </div>
      <Footer />
    </div>
  )
}

export default Favorites;