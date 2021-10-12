import React, { useState, useEffect } from 'react';
import { fetchCategories } from '../services/fetchMeals';
import './styles/CategoriesButtons.css';
import { connect } from 'react-redux';
import { fetchByCategory } from '../services/fetchMeals';
import { addRecipesAction } from '../redux/actions';

function CategoriesButtons({ showSearchBar, addRecipes }) {
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    fetchCategories()
      .then((data) => setCategoriesList(data.slice(0, 7)))
      .catch((err => console.log(err)));
    }, []);
    
    const handleClick = (category) => {
      fetchByCategory(category)
      .then((data) => addRecipes(data.slice(0, 12)))
      .catch((err => console.log(err)));
  }

  return (
    <div className={ showSearchBar ? 'hidden' : 'categories-btn-container'}>
      { categoriesList.map(({ strCategory }) => (
        <button
          key={ strCategory }
          onClick={ () => handleClick(strCategory) }
        >
          { strCategory }
        </button>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  showSearchBar: state.searchBarReducer.showSearchBar,
})

const mapDispatchToProps = (dispatch) => ({
  addRecipes: (payload) => dispatch(addRecipesAction(payload)),
})


export default connect(mapStateToProps, mapDispatchToProps)(CategoriesButtons);
