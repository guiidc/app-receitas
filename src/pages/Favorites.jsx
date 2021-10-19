import React, { useState } from 'react';
import shareIcon from '../icons/share-icon.svg';
import favoriteIcon2 from '../icons/favorite2-icon.svg';
import copy from 'clipboard-copy';
import typeFilter from '../services/typeFilter';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Favorites() {
  const [ copyMsg, setCopyMsg] = useState([]);
  const localFavorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const [ favorites, setfavorites] = useState(localFavorites);
  const [type, setType] = useState('')
  
  if (!favorites) return (<div><Header /><Footer /></div>);
  

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
    <div>
      <Header />
      <div>
        <button type="button" onClick ={() => setType('meal')}>Comida</button>
        <button type="button" onClick ={() => setType('drink')}>Bebidas</button>
        <button type="button" onClick ={() => setType('')}>Mostrar todas</button>
      </div>
      { typeFilter(favorites, type).map((recipe, index) => {
        const type = recipe.type;
        return (
          <div key={ type === 'meal' ? recipe.idMeal : recipe.idDrink }>
            <img src={ type === 'meal' ? recipe.strMealThumb : recipe.strDrinkThumb} alt={ type === 'meal' ? recipe.strMeal : recipe.strDrink } style={ { height: '150px'} }/>
            <h3>{ recipe.strMeal }</h3>
            <p>{ recipe.strCategory }</p>
            <p>{ recipe.strArea }</p>
            <p>{recipe.strTags}</p>
            <div className="recipe-share-container">
              <img src={ shareIcon } alt="botão para compartilhar" onClick={ () => handleClipBoard(recipe, index) } />
              { copyMsg.includes(index) && <p>Link Copiado</p> }
              <img
                onClick={ () => removeFavorite(index) }
                src={ favoriteIcon2 }
                alt="botão para favoritar"
              />
            </div>
        </div>
        )
      })}
      <Footer />
    </div>
  )
}

export default Favorites;