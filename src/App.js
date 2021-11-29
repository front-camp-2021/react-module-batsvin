import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';
import Pages from './components/pages/pages';

const App = () => {
  return (
    <BrowserRouter>
      <div class='container'>
        <Header />
        <NavBar />
        <AppRouter />
        <Pages />
      </div>
    </BrowserRouter>
  );
}

export default App;
