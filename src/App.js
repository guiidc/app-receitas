import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import './App.css';
import MealsList from './pages/MealsList';
import MealDetail from './pages/MealDetail';
import Favorites from './pages/Favorites';
import DrinksList from './pages/DrinksList';
import DrinkDetail from './pages/DrinkDetail';
import MealInProgress from './pages/MealInProgress';
import DrinkInProgress from './pages/DrinkInProgress'


function App() {
  return (
  <Switch>
    <Route exact path="/" component={ Login } />
    <Route exact path="/comidas" component={ MealsList } />
    <Route exact path="/comidas/:id" component={ MealDetail} />
    <Route exact path="/bebidas" component={ DrinksList } />
    <Route exact path="/bebidas/:id" component={ DrinkDetail} />
    <Route exact path="/favoritos" component={ Favorites } />
    <Route exact path="/comidas/:id/em-progresso" component={ MealInProgress } />
    <Route exact path="/bebidas/:id/em-progresso" component={ DrinkInProgress } />
  </Switch>
  );
}



export default App;
