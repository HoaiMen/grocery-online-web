import { Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import List from './pages/List';
import ProductDetail from './pages/ProductDetail';
import SignIn from './pages/SignIn';
import Cart from './pages/Cart';
import SignUp from './pages/SignUp';
import AddProduct from './pages/AddProduct';
import GridBlurredBackdrop from './components/comment/mainComment';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Home />}></Route>
      <Route path="/product-detail/:id" element={<ProductDetail />} />
      <Route path={'/about'} element={<About />}></Route>
      <Route path={'/list'} element={<List />}></Route>
      <Route path={'/contact'} element={<Contact />}></Route>
      <Route path={'/signIn'} element={<SignIn />}></Route>
      <Route path={'/cart'} element={<Cart />}></Route>
      <Route path={'/signUp'} element={<SignUp />}></Route>
      <Route path={'/add-product'} element={<AddProduct />}></Route>
      <Route path={'/comment'} element={<GridBlurredBackdrop />}></Route>

    </Routes>
  );
}

export default App;
