import React, { useContext } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { CartContext } from './CartContext';

const Carrito = () => {
  const { carrito, setCarrito } = useContext(CartContext);

  const eliminarDelCarrito = (id) => {
    setCarrito(prev => prev.filter(producto => producto.id !== id));
  };

  const total = carrito.reduce((acc, item) => acc + Number(item.price) * item.cantidad, 0);

  if (carrito.length === 0) {
    return (
      <Container className="mt-6" style={{ minHeight: '60vh' }}>
        <h3 className="titulos-paginas text-center mt-6">Tu carrito está vacío</h3>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h3 className="titulos-paginas text-center mt-4">Carrito de compras</h3>
      <Table striped bordered hover responsive className="mt-3">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Imagen</th>
            <th>Precio unitario</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>
              {/* Determina la URL: Si es un array, toma el primer elemento, si no, usa el valor tal cual */}
              {(() => {
                let imagenSrc = item.images;

                if (Array.isArray(imagenSrc) && imagenSrc.length > 0) {
                  imagenSrc = imagenSrc[0]; // Toma la primera imagen del array
                }
                
                // Muestra la imagen solo si el resultado final es una cadena y parece una URL válida
                if (typeof imagenSrc === 'string' && imagenSrc.startsWith("http")) {
                  return (
                    <img
                      src={imagenSrc}
                      alt={item.title}
                      width={50}
                      height={50}
                      style={{ objectFit: "cover" }}
                    />
                  );
                }
                
                // Opción de reserva si no hay imagen válida
                return <span>{item.title}</span>; 
              })()}
            </td>
              <td>${Number(item.price).toFixed(2)}</td>
              <td>{item.cantidad}</td>
              <td>${(Number(item.price) * item.cantidad).toFixed(2)}</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => eliminarDelCarrito(item.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h5 className="titulos-paginas text-end mt-3">Total a pagar: ${total.toFixed(2)}</h5>
    </Container>
  );
};

export default Carrito;
