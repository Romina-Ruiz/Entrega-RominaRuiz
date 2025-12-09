import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Contacto from './components/Contacto';
import Productos from './components/Productos';
import Sale from './components/Sale';
import Carrito from './components/Carrito';
import Home from './components/Home';
import RutaProtegida from './components/RutaProtegida';
import { CartProvider } from "./components/CartContext";
import Login from './components/Login';
import Crudproduct from './components/CrudProduct';

import { ToastContainer } from 'react-toastify';

function App() {
  

  return (

     <CartProvider>
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Productos" element={<Productos />} />
            <Route path="/Sale" element={<Sale />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/Carrito" element={<Carrito />} />
            <Route path="/Crud" element={<Crudproduct />} />
            <Route path="/Login" element={<Login />} />
                    
      </Routes>
        <Footer/>
    </Router>
          <ToastContainer position="top-right" autoClose={2000} />  
    </CartProvider>


      
    
  )
}

export default App
