import React from 'react';
import Productos from './Productos';

const Fragancias = () => {
  return (
    <div className="container" expand="lg">
      <h1 className="titulos-paginas text-center mt-4" expand="lg">Fragancias</h1>
      <Productos category="fragrances" />
    </div>
  );
}

export default Fragancias;