import React from 'react'
import Navbar from './components/Navbar';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import SignUp from './components/Pages/SignUp';

function App() {
  return <>
  <Routes>
    <Route path='/' element={<Navbar/>}>
    <Route index element={<Home/>} />
    <Route path='/services' element={<Services/>} />
    <Route path='/products' element={<Products/>} />
   <Route path='/sign-up' element={<SignUp/>} />
    </Route>
  </Routes>
  </>
}
export default App;
