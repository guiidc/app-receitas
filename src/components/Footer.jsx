import React from 'react';
import drinksIcon from '../icons/drinks-icon.svg';
import mealsIcon from '../icons/meals-icon.svg';
import exploreIcon from '../icons/explore-icon.svg';
import './styles/Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <img src={ drinksIcon } alt="Link para lista bebidas" />
      <img src={ mealsIcon } alt=" Link para lista de comidas" />
      <img src={ exploreIcon } alt="Link para explorar" />
    </div>
  )
}

export default Footer;
