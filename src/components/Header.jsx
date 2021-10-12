import React from 'react';
import searchIcon from '../icons/search-icon.svg';
import perfilIcon from '../icons/perfil-icon.svg';
import './styles/Header.css';
import { connect } from 'react-redux';
import { showSearchBarAction } from '../redux/actions';

function Header({ searchBarStatus, showSearchBar}) {
  const handleClick = () => {
    showSearchBar(!searchBarStatus);
  }

  return(
    <div className="header-container">
      <img
        src={ perfilIcon }
        alt="botão entrar na página de perfil"
        />
      <h2>Receitas</h2>
      <img
        onClick={ handleClick }
        src={ searchIcon }
        alt="botão para pesquisar receitas"
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  searchBarStatus: state.searchBarReducer.showSearchBar,
})

const mapDispatchToProps = (dispatch) => ({
  showSearchBar: (payload) => dispatch(showSearchBarAction(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);