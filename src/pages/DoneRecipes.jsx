import React, { useState } from 'react';
import shareIcon from '../icons/share-icon.svg';
import copy from 'clipboard-copy';
import typeFilter from '../services/typeFilter';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './styles/Favorites.css';
import './styles/DoneRecipes.css';
import SearchBar from '../components/SearchBar';
import NoRecipesFound from '../components/NoRecipesFound';

function DoneRecipes() {
  const [ copyMsg, setCopyMsg] = useState([]);
  const localDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  const [type, setType] = useState('')
  const doneRecipes = localDoneRecipes;
  
  if (!doneRecipes) return (
    <div>
      <Header />
      <SearchBar />
      <NoRecipesFound />
      <Footer />
    </div>
  );
  

  const handleClipBoard = (id, type, index) => {
    setCopyMsg([index]);
    if(type === 'meal') {
      copy(`https://appfoodproject.netlify.app/comidas/${id}`);
    } else {
      copy(`https://appfoodproject.netlify.app/bebidas/${id}`);
    }
    setTimeout(() => setCopyMsg([]), 2000)
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
        { typeFilter(doneRecipes, type).map((recipe, index) => {
          return (
            <div key={ recipe.id } className="favorite-card">
              <div className="favorite-recipe-img">
                <img src={ recipe.image } alt={ recipe.name } />
              </div>
              <div className="done-card-info">
                <div className="done-card-info-wrapper">
                  <div>
                    <p>{ recipe.category }</p>
                    <h3>{ recipe.name}</h3>
                  </div>
                  <img src={ shareIcon } alt="botão para compartilhar"  onClick={ () => handleClipBoard(recipe.id, recipe.type, index) }/>
                </div>
                <div className="recipe-share-container">
                    { copyMsg.includes(index) && <p id="copy-msg">Link Copiado</p> }
                </div>
                  <span className="done-date">{recipe.doneDate}</span>
              </div>
          </div>
          )
        })}
      </div>
      <Footer />
    </div>
  )
}

export default DoneRecipes;