
import React from 'react';
import Productos from './Productos';

const Sale = () => {
  return (
    <div className="container mt-4" expand="lg">
      <h1 className="titulos-paginas text-center mt-4" expand="lg">Sale</h1>
          <Productos category="groceries" />
    </div>
  );
}

export default Sale;
