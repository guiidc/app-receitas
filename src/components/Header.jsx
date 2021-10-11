import React from 'react';
import searchIcon from '../icons/search-icon.svg';
import perfilIcon from '../icons/perfil-icon.svg';
import './styles/Header.css';

function Header() {
  return(
    <div className="header-container">
      <img src={ perfilIcon } alt="botão entrar na página de perfil"/>
      <h2>Receitas</h2>
      <img src={ searchIcon } alt="botão para pesquisar receitas"/>
    </div>
  )
}

export default Header;
