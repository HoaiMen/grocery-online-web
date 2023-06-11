import { Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import List from './pages/List';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Home />}></Route>
      <Route path={'/about'} element={<About />}></Route>
      <Route path={'/list'} element={<List />}></Route>
      <Route path={'/contact'} element={<Contact />}></Route>
    </Routes>
  );
}

export default App;
