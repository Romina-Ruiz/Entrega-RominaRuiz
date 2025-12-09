import React, { useContext, useEffect, useState } from 'react';
import { Row, Col, Form} from 'react-bootstrap';
import ProductCard from './ProductCard';
import Spinner from 'react-bootstrap/Spinner';
import {CartContext} from './CartContext';

const ProductList = ({ category = null }) => 
    {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const {agregarAlCarrito}= useContext(CartContext);
  const [barraDeBusqueda, setBarraDeBusqueda] = useState("");

    useEffect(() => 
    {
    let url =`https://69364bfbf8dc350aff30623b.mockapi.io/Productos`;
    if (category) 
    {
      url = `https://dummyjson.com/products/category/${category}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.products)) {
          setProducts(data.products);
        } else if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("Formato desconocido:", data);
          setProducts([]);
        }

      setLoading(false);
    })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [category]);

   if (loading) {
    return <div className='mt-4 fs-2 text-center fst-italic fw-bold'>
      <Spinner animation="grow" variant="danger" size="sm" className='m-2' />
      Loading...
      </div>;
  }  

  const filteredProducts=products.filter(product=>
      product.title.toLowerCase().includes(barraDeBusqueda.toLowerCase()) ||
      product.description.toLowerCase().includes(barraDeBusqueda.toLowerCase())
    );


  return (

 <>



    <div className="container" expand="lg">
      {!category && (
            <h1 className="titulos-paginas text-center mt-4" expand="lg">Nuestros Productos</h1>
        )}

      <Row className="col-4 position-relative top-0 start-50 translate-middle-x " >
        <Form.Control
          type="text"
          placeholder="Buscar Producto"
          className="mb-4"
          value={barraDeBusqueda}
          onChange={(e) =>setBarraDeBusqueda(e.target.value)}>
        
        </Form.Control>
      </Row>  
      <Row >

          
        <Col>

          <Row className='mt-6'>  
      
            {filteredProducts.map((product) => (
              <Col md={4} key={product.id} className="mb-4">
              <ProductCard product={product} agregarAlCarrito={agregarAlCarrito} />

              </Col>

            ))}
            
          </Row>   
        </Col>   
      </Row>

    </div>

  </>
  );
}

export default ProductList;
