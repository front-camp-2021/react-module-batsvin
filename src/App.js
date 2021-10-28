import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Header from './components/Header';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
