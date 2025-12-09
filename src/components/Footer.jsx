import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css'; 

const Footer = () => {
  return (
    <footer expand="lg" className="text-center py-4 mt-4 bottom-0" >
      <Container expand="lg">
        <Row>
          <Col md={12}>
            <div>
              <p></p>
              <a href="#" className="text-white me-3">
                <i className="fa fa-facebook fa-2x"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="fa fa-twitter fa-2x"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fa fa-instagram fa-2x"></i>
              </a>
            </div>
          </Col>
          <Col md={12} className='mt-4'>
            <p className="mb-0 fs-6">Creado por Romina Ruiz</p>
            <p className="mb-0 text-center fs-6"> Copyright ohmhaus 2025. Todos los derechos reservados.</p>
          </Col>

        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
