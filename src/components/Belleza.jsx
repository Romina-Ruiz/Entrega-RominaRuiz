import React from 'react';
import Productos from './Productos';

const Belleza = () => {
  return (
    <div className="container" expand="lg">
      <h1 className="titulos-paginas text-center mt-4" expand="lg">Belleza</h1>
      <Productos category="beauty" />
    </div>
  );
}

export default Belleza;
