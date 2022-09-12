import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './views/HomePage/HomePage';
import Login from './views/Login/Login';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='login' element={<Login />} />
    </Routes>
  )
}

export default App