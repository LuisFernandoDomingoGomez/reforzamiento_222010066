import React from 'react';
import Header from './components/common/Header';
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/common/Home';
import MainTypeScript from './components/typescript/MainTypeScript';
import Default from './components/common/Default';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={ <Home/> }></Route>
        <Route path='typescript'  element={ <MainTypeScript /> } />
        <Route path='default'  element={ <Default /> } />
        <Route path='/*'  element={ <Navigate to={ 'default' } /> }></Route>
      </Routes>
    </div>
  );
}

export default App;
