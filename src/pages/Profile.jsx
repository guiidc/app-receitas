import React from 'react';
import Header from '../components/Header';
import perfilImage from '../icons/perfil-img-icon.svg';
import bookIcon from '../images/book.jpg';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import './styles/Profile.css';
import SearchBar from '../components/SearchBar';
import { userLogoutAction } from '../redux/actions';
import { useHistory } from 'react-router-dom';

function Profile({ email, logout }) {
  const history = useHistory();
  const handleLogout = () => {
    logout('');
    history.push('/')
  }
  return (
    <>
      <Header title={ 'Perfil '}/>
      <SearchBar />
      <div className="profile-container">
        <div className="profile-wrapper">
          <span>Olá, <b>seja bem-vindo(a)!</b></span>
          <img src={ perfilImage } alt="foto de perfil do usuário" className="perfil-img"/>
          <h2>{ email ?  email : 'Página de perfil' }</h2>
          <img id="book-img" src={ bookIcon } alt="ilustração de um caderno"/>
          <Link to="/receitas-feitas">
            <button className="perfil-button">Minhas Receitas</button>
          </Link>
          <Link to="/favoritos">
            <button className="perfil-button">Receitas Favoritas</button>
          </Link>
          <h4 onClick={ handleLogout }>Sair da conta</h4>
        </div>
      </div>
      <Footer />
    </>
  )
}

const mapStateToProps = (state) => ({
  email: state.userReducer,
})
const mapDispatchToProps = (dispatch) => ({
  logout: (payload) => dispatch(userLogoutAction(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
