
import { Navbar, Container, Nav, Button, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Budge from './Budge';


export default function Header() 
{
  const navigate = useNavigate();
  const isAuth = localStorage.getItem('auth') === 'true';

  const cerrarSesion = () => 
    {
    localStorage.removeItem('auth');
    navigate('/login');
  };

  return (
    <Navbar className='header-color' expand="lg">
      <Container>

        <Col md={3}>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="https://dcdn-us.mitiendanube.com/stores/004/242/368/themes/common/logo-390669964-1706721815-c1d2767924b0da9cf2344a3e2851b50b1706721815-640-0.webp" 
            alt="Logo"
            className="d-inline-block align-top me-2 w-25"
          />
        </Navbar.Brand>
        </Col>

        <Col md={7}>
          <Nav className="text-start  fs-2">
            <Nav.Link as={Link} to="/" className='links'>Home</Nav.Link>
            <Nav.Link as={Link} to="/Productos" className='links'>Productos</Nav.Link>
            <Nav.Link as={Link} to="/Sale" className='links'>Sale</Nav.Link>
            <Nav.Link as={Link} to="/Contacto" className='links'>Contacto</Nav.Link>
            
            {/* Enlaces que solo se muestran si el usuario está autenticado */}
            {isAuth && (
              <>
                <Nav.Link as={Link} to="/Admin" className='links'>Admin</Nav.Link>
              </>
            )}
          </Nav>
          </Col>

          <Col md={1}>
              <Nav className="p-2 ">
                {/* Mostrar botón de login o logout según autenticación */}
                {!isAuth ? (
                  <Nav.Link as={Link} to="/Login" className='links'>Login</Nav.Link>
                ) : (
                  <Button variant="outline-light" onClick={cerrarSesion}>Cerrar sesión</Button>
                )}
              </Nav>
          </Col>
          <Col  md={1}>
              <Link to="/Carrito" className="icono-carrito mt-3 ms-5">
                 
                  <Budge />
               </Link>       
          </Col>

         </Container>
     
    </Navbar>
  );
}
