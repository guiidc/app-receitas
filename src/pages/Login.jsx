import React, { useState } from 'react';
import logo from '../images/logo.svg';
import './styles/Login.css';
import Helmet from 'react-helmet';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRequirement = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  const handleChange = ({ target }) => {
    if ( target.name === 'email') return setEmail(target.value);
    setPassword(target.value);
  }

  const handleClick = () => {
    console.log('ok')
  }

  return(
    <div className="login-container" style={ { minHeight: window.innerHeight} }>
      <Helmet>
        <title>App Food</title>
      </Helmet>
      <img className="login-logo" src={ logo } alt="App Food logo" />
      <input
        className="login-input"
        name="email"
        placeholder="Email"
        type="text"
        onChange={ handleChange }
        value={email}
        />
      <input
        className="login-input"
        placeholder="Senha"
        name="password"
        type="password"
        onChange={ handleChange }
        value={password}
      />
      <button
        className="login-btn"
        type="button"
        onClick={ handleClick }
        disabled={ !(emailRequirement.test(email) && password.length > 5) }
      >
        Entrar
      </button>
      <span className="forget-password">Esqueci minha senha</span>
      <div className="create-acount">
        <span >Criar conta</span>
      </div>
    </div>
  )
}

export default Login;
