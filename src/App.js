import React from 'react'
import Navbar from './components/Navbar';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import SignUp from './components/Pages/SignUp';

function App() {
  fetch('https://example.com/api/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
  return <>
  <Routes>
    <Route path='/' element={<Navbar/>}>
    <Route index element={<Home/>} />
    <Route path='services' element={<Services/>} />
    <Route path='products' element={<Products/>} />
    <Route path='sign-up' element={<SignUp/>} />
    </Route>
  </Routes>
  </>
}
export default App;
