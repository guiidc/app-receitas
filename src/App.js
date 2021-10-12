import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import './App.css';
import RecipesList from './pages/RecipesList';
import RecipeDetail from './pages/RecipesDetail';


function App() {
  return (
  <Switch>
    <Route exact path="/" component={ Login } />
    <Route exact path="/receitas" component={ RecipesList } />
    <Route exact path="/receitas/:id" component={ RecipeDetail} />
  </Switch>
  );
}



export default App;
