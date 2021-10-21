import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { fetchById } from '../services/fetchMeals';
import shareIcon from '../icons/share-icon.svg';
import favoriteIcon from '../icons/favorite-icon.svg';
import favoriteIcon2 from '../icons/favorite2-icon.svg';
import ingredientsIcon from '../icons/ingredients-icon.svg';
import prepareIcon from '../icons/prepare-icon.svg';
import { addRemoveFavoriteMeals } from '../services/addRemoveFavorite';
import copy from 'clipboard-copy';
import Footer from '../components/Footer';
import getIngredients from '../services/getIngredients';
import { addRemoveMealIngredient } from '../services/addRemoveUsedIngredient';
import { isMealFavorite } from '../services/isFavorite';
import './styles/InProgress.css';
import { addDoneMealRecipe } from '../services/addDoneRecipe';


function MealInProgress() {
  const { id } = useParams();
  const { push } = useHistory();
  const [ selectedRecipe, setSelectedRecipe] = useState({});
  const [ copyMsg, setCopyMsg] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const localStorageUsedIngredients = JSON.parse(localStorage.getItem('recipesInProgress'))['meals'][id]
  const [usedIngredients, setUsedIngredients] = useState(localStorageUsedIngredients);
  
  useEffect(() => {
    fetchById(id)
    .then((data) => setSelectedRecipe(data[0]))
    .catch((err) => console.log(err));
  }, [id])

  useEffect(() => {
    setFavorite(isMealFavorite(id))
  }, [id])
  
  const handleFavorite = () => {
    setFavorite(addRemoveFavoriteMeals(selectedRecipe, id))
  };
  
  const handleClipBoard = () => {
    setCopyMsg(true);
    copy(`https://appfoodproject.netlify.app/comidas/${id}`);
    setTimeout(() => setCopyMsg(false), 2000)
  };

  const handleIngredients = (ingredient) => {
    setUsedIngredients(addRemoveMealIngredient(selectedRecipe, ingredient))
  }

  const handleFinishRecipe = () => {
    addDoneMealRecipe(selectedRecipe)
    push('/comidas')
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
          <p id="copy-msg-detail">Link Copiado!</p>
        </div>
      <div className="info-container">
        <div className="info-header">
          <img src={ ingredientsIcon } alt="Ícone de ingrediente" />
          <h3>Ingredientes</h3>
        </div>
        <div className="info-wrapper" style={ { display: 'flex', flexDirection: 'column' }}>
          { getIngredients(selectedRecipe).map((ingredient) => (
            <label className={usedIngredients.includes(ingredient) ? 'line-through' : ''} key={ ingredient }>
              <input
                type="checkbox"
                onClick={ () => handleIngredients(ingredient) }
                checked = { usedIngredients.includes(ingredient) }
                readOnly
              />
              { ingredient }
            </label>
            ))}
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
        onClick={ () => handleFinishRecipe() }
        disabled={ usedIngredients.length !== getIngredients(selectedRecipe).length }
      >
        Finalizar receita
      </button>
      <Footer />
    </div>
  )
}

export default MealInProgress;
