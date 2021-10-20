import React from 'react';
import drinksIcon from '../icons/drinks-icon.svg';
import mealsIcon from '../icons/meals-icon.svg';
import exploreIcon from '../icons/explore-icon.svg';
import './styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer-container">
      <Link to="/comidas">
        <img src={ mealsIcon } alt=" Link para lista de comidas" />
      </Link>
      <img src={ exploreIcon } alt="Link para explorar" />
      <Link to="/bebidas">
        <img src={ drinksIcon } alt="Link para lista bebidas" />
      </Link>
    </div>
  )
}

export default Footer;
