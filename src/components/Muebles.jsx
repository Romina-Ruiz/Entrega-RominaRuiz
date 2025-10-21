import React from 'react';
import Productos from './Productos';

const Muebles = () => {
  return (
    <div className="container" expand="lg">
      <h1 className="titulos-paginas text-center mt-4" expand="lg">Muebles</h1>
      <Productos category="furniture" />
    </div>
  );
}

export default Muebles;