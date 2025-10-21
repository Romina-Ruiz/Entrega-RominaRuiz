import { Container, Row,Col,Button } from 'react-bootstrap'; 
import 'font-awesome/css/font-awesome.min.css'; 
import ReactIframe from 'react-iframe';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Contacto(){

return (

<Container className='mt-4'>
        
        <Row className='mt-4'>
           <Col>
                <div className='contact-text'>

                    <h2 className='mt-4 fs-2 fst-italic fw-bold'>Si tenes alguna duda o consulta:</h2>
                    <p className='ms-5'><i className="fa fa-whatsapp mt-5 ms-5"></i>  WhatsApp 11 4444-5555</p>
                    <p className='ms-5'><i className="fa fa-envelope ms-5"></i>  ohm@gmail.com</p>
                    <p className='ms-5'><i className="fa fa-home ms-2 ms-5"></i> Av. Centenario 250, San Isidro</p>
                </div>
            </Col> 
            <Col className='mt-5'>
                <ReactIframe
                    url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.151388557498!2d-58.514911954821414!3d-34.47368361693582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb035c807fd03%3A0xb0473b47d8bd08d6!2sMunicipalidad%20de%20San%20Isidro!5e0!3m2!1ses-419!2sar!4v1760843718102!5m2!1ses-419!2sar"
                    width="500px"
                    height="250px"
                    style="border 5%;" 
                    display="block"
                />
            </Col>        
           
        </Row>

        <Row>

            <h2 className='contact-text mt-5 fs-2 fst-italic fw-bold'>Unite a nuestro newsletter:</h2>
            
            <Form className='mt-4 ms-5 justify-content space-around'>
              <Col md={8}>  
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="email@ejemplo.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Consulta</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Col>  
                 <Button className='card-button align-items-center ms-5'> Enviar </Button>
            </Form>
               
        </Row>

    </Container>


);

}