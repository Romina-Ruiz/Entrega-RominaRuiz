import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Contacto from './components/Contacto';
import Productos from './components/Productos';
import Sale from './components/Sale';
import Carrito from './components/Carrito';
import Home from './components/Home';
import Belleza from './components/Belleza';
import Fragancias from './components/Fragancias';
import Muebles from './components/Muebles';
import RutaProtegida from './components/RutaProtegida';



function App() {
  

  return (

     
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Productos" element={<Productos />} />
            <Route path="/Sale" element={<Sale />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/Carrito" element={<Carrito />} />
            <Route path="/Belleza" element={<Belleza/>} />
            <Route path="/Muebles" element={<Muebles />} />
            <Route path="/Fragancias" element={<Fragancias />} />
                     
      </Routes>
        <Footer/>
    </Router>


      
    
  )
}

export default App
