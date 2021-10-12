import React, { useEffect, useState } from 'react';
import { fetchById } from '../services/fetchMeals';
import shareIcon from '../icons/share-icon.svg';
import favoriteIcon from '../icons/favorite-icon.svg';
import ingredientsIcon from '../icons/ingredients-icon.svg';
import prepareIcon from '../icons/prepare-icon.svg';
import getIngredients from '../services/getIngredients';
import './styles/RecipeDetail.css';
import Footer from '../components/Footer';
import copy from 'clipboard-copy';

function RecipeDetail({ match }) {
  const [ selectedRecipe, setSelectedRecipe] = useState({});
  const [ copyMsg, setCopyMsg] = useState(false);

  useEffect(() => {
    fetchById(match.params.id)
      .then((data) => setSelectedRecipe(data[0]))
      .catch((err) => console.log(err));
  }, [match.params.id]);

  const handleClipBoard = () => {
    setCopyMsg(true);
    copy(`https://appfoodproject.netlify.app/receitas/${match.params.id}`);
    setTimeout(() => setCopyMsg(false), 2000)
  }

  const { 
    strMeal,
    strCategory,
    strMealThumb,
    strInstructions,
  } = selectedRecipe;

  return (
    <div className="recipe-detail-container">
      <img id="recipe-img" src={ strMealThumb } alt={ strMeal} />
      <div className="recipe-information-container">
        <div className="recipe-title-container">
          <h3>{ strMeal }</h3>
          <h4>{ strCategory }</h4>
        </div>
        <div className="recipe-share-container">
          <img src={ shareIcon } alt="botão para compartilhar" onClick={ handleClipBoard } />
          <img src={ favoriteIcon } alt="botão para favoritar" />
        </div>
      </div>
        <div className={ copyMsg ? 'clipboard-msg' : 'hidden'}>
          <span>Link Copiado!</span>
        </div>
      <div className="info-container">
        <div className="info-header">
          <img src={ ingredientsIcon } alt="Ícone de ingrediente" />
          <h3>Ingredientes</h3>
        </div>
        <div className="info-wrapper">
          <ul>
            { getIngredients(selectedRecipe).map((ingredient) => (
              <li key={ ingredient }>
                { ingredient }
              </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="info-container">
        <div className="info-header">
          <img src={ prepareIcon } alt="Ícone de preparo" />
          <h3>Modo de preparo</h3>
        </div>
        <div className="info-wrapper">
          <p>{ strInstructions }</p>
        </div>
      </div>
      <button className="large-orange-button">Iniciar receita</button>
      <Footer />
    </div>
  )
}

export default RecipeDetail;
