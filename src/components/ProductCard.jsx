import React from 'react';
import { Card, Button, Container,Row } from 'react-bootstrap';


import "../styles/paginas.css"
import "animate.css/animate.min.css"

const ProductCard = ({ product, agregarAlCarrito }) => {
  return (


    <div>

      <Card className="card h-100 d-flex justify-content-center align-items-center animate__animated animate__fadeIn">
        <div className='overflow'>
        <Card.Img
          variant="top"
          src={product.images}
          alt={product.title}
          className="card-img-top" 
          style={{objectFit: 'cover' }} 
        />
        </div>
        <Card.Body className="card-body">
          <Card.Title className='card-title'>{product.title}</Card.Title>
          <Card.Text className='fs-5 text-center'>
            <strong>${product.price}</strong>
          </Card.Text>
          <Button className='card-button fw-bolder align-items-center' onClick={() => agregarAlCarrito(product)}>
            Agregar al carrito
          </Button>
        </Card.Body>
      </Card>
    </div>
    

  );
};

export default ProductCard;
