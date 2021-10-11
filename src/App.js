import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import './App.css';
import RecipesList from './pages/RecipesList';


function App() {
  return (
  <Switch>
    <Route exact path="/" component={ Login } />
    <Route exact path="/receitas" component={ RecipesList } />
  </Switch>
  );
}



export default App;
