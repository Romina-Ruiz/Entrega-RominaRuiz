import { Container, Row, Col, Image } from 'react-bootstrap'; 
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from "./ExampleCarouseImage";
import 'font-awesome/css/font-awesome.min.css'; 



 const Home = () => {

  return (
    
    <Container className='mt-4'>

        <Row>
          <Col md={12} > 
            
             <h2 className='home-text text-center '>La tendencia del verano</h2>
              <Carousel>
                <Carousel.Item >
                    
                    <ExampleCarouselImage src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
                    
                    />
                        <Carousel.Caption className='home-box-text'>
                          <h3>Mascara Lash Princess</h3>
                          <p>A prueba de agua e hipoelergenico.</p>
                        </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel-box'>
                    <ExampleCarouselImage src="https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp"  />
                        <Carousel.Caption className='home-box-text'>
                          <h3>Paleta de sombras</h3>
                          <p>Los colores nuevos del verano.</p>
                        </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel-box'>
                        <ExampleCarouselImage src="https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp"  />
                        <Carousel.Caption className='home-box-text'>
                          <h3>Rubor traslucido</h3>
                          <p>El mejor sellador de maquillaje.</p>
                          
                    </Carousel.Caption>
              </Carousel.Item>
              </Carousel>
            
         </Col>
        </Row>
        <Row className='mt-6'>
              <h2 className='home-text text-center'>OHM Productos Exclusivos para vos </h2>
                 
        
        </Row>
        <Row >
         
            <Col md={4} >
              <p className='box-home ms-5'><i className="fa fa-truck "></i> Envios a todo el país</p>
                     
            </Col>

            <Col md={4}>
              <p className='box-home ms-5'><i className="fa fa-credit-card"></i> Métodos de pago</p>
                     
            </Col>

            <Col md={4} >
              <p className='box-home ms-5'><i className="fa fa-shopping-bag"></i> Promociones</p>
                    
            </Col>
          
          </Row>
          <Row className='img-home'>
              <Col md= {4}>
                 <Image src='https://images.unsplash.com/photo-1759526997116-c8f4f2431869?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=532'
                  className="img-home" alt="foto"></Image>
                
              </Col>
              <Col md= {4}>
                <Image src='https://plus.unsplash.com/premium_photo-1758726036561-890cb6bd2b54?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=465' 
                className="img-home" alt="foto" ></Image>
              </Col>

              <Col md= {3}>
              
                <Image src='https://images.unsplash.com/photo-1599137936830-6b98fef428e8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=419' 
                className="img-home" alt="foto" ></Image>

              </Col>      
                    
                    
             
            

          </Row>
    </Container>

  );
}
export default Home;

