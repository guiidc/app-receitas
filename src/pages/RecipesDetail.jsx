import React, { useEffect, useState } from 'react';
import { fetchById } from '../services/fetchMeals';
import shareIcon from '../icons/share-icon.svg';
import favoriteIcon from '../icons/favorite-icon.svg';
import favoriteIcon2 from '../icons/favorite2-icon.svg';
import ingredientsIcon from '../icons/ingredients-icon.svg';
import prepareIcon from '../icons/prepare-icon.svg';
import getIngredients from '../services/getIngredients';
import './styles/RecipeDetail.css';
import Footer from '../components/Footer';
import copy from 'clipboard-copy';
import isFavorite from '../services/isFavorite';
import addRemoveFavorite from '../services/addRemoveFavorite';
import isInProgress from '../services/isInProgress';
import { useHistory } from 'react-router-dom';
import addRecipeInProgress from '../services/addRecipeInProgress';

function RecipeDetail({ match }) {
  const [ selectedRecipe, setSelectedRecipe] = useState({});
  const [ copyMsg, setCopyMsg] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const { push } = useHistory();
  const id = match.params.id

  useEffect(() => {
    fetchById(id)
      .then((data) => setSelectedRecipe(data[0]))
      .catch((err) => console.log(err));
  }, [id])

  useEffect(() => {
    setFavorite(isFavorite(id))
  }, [id])

  const handleClipBoard = () => {
    setCopyMsg(true);
    copy(`https://appfoodproject.netlify.app/receitas/${id}`);
    setTimeout(() => setCopyMsg(false), 2000)
  };

  const handleFavorite = (id) => {
    setFavorite(addRemoveFavorite(id))
  };

  const handleStartRecipe = (id) => {
    addRecipeInProgress(id);
    push(`/receitas/em-progresso/${id}`);
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
          <img
            onClick={ () => handleFavorite(id) }
            src={ favorite ? favoriteIcon2 : favoriteIcon }
            alt="botão para favoritar"
          />
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
      <button
        className="large-orange-button"
        onClick={ () => handleStartRecipe(id) }
      >
        { isInProgress() ? 'Iniciar Receita' : 'Continuar Receita'}
      </button>
      <Footer />
    </div>
  )
}

export default RecipeDetail;
