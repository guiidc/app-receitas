import React, { useState, useEffect } from 'react';
import { fetchCategories } from '../services/fetchMeals';
import './styles/CategoriesButtons.css';

function CategoriesButtons() {
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    fetchCategories()
    .then((data) => setCategoriesList(data.slice(0, 7)))
  }, []);

  return (
    <div className="categories-btn-container">
      { categoriesList.map(({ strCategory }) => (
        <button key={ strCategory }>{ strCategory }</button>
      ))}
    </div>
  )
}

export default CategoriesButtons;
