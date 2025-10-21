import React, { useEffect, useState } from 'react';
import { Row, Col} from 'react-bootstrap';
import ProductCard from './Producto';
import Spinner from 'react-bootstrap/Spinner';

const ProductList = ({ category = null }) => 
    {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => 
    {
    let url ='https://dummyjson.com/products';
    if (category) 
    {
      url = `https://dummyjson.com/products/category/${category}`;
    }

      fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [category]);

    const handleAgregarAlCarrito = (product) => {
    alert(`Producto ${product.title} agregado al carrito`);
  };


  if (loading) {
    return <div className='mt-4 fs-2 text-center fst-italic fw-bold'>
      <Spinner animation="grow" variant="danger" size="sm" className='m-2' />
      Loading...
      </div>;
  }  

  
  return (


    <div className="container" expand="lg">
      {!category && (
            <h1 className="titulos-paginas text-center mt-4" expand="lg">Nuestros Productos</h1>
        )}
      <Row >

        <Col md={2}>

          <p><a className="links ms-2" href="/Belleza">Belleza</a></p>
          <p><a className="links ms-2" href="/Fragancias">Frangancias</a></p>
          <p><a className="links ms-2" href="/Muebles">Muebles</a></p>
          
        </Col >
          
        <Col md={10}>

          <Row className='mt-6'>  
      
            {products.map((product) => (
              <Col key={product.id} className="mb-4">
                <ProductCard product={product} agregarAlCarrito={handleAgregarAlCarrito} />
              </Col>

            ))}
            
          </Row>   
        </Col>   
      </Row>

    </div>
  );
}

export default ProductList;
