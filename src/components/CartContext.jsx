import React, { createContext, useState } from 'react';
import { mostrarToast } from './BotonToast'

// Crear el contexto
export const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  // Agregar producto al carrito
  const agregarAlCarrito = (producto) => {
  // 1. Preparamos variables por defecto para el Toast (para nuevo producto)
  let tipoToast = 'success';
  let mensajeToast = `¡${producto.title} agregado al carrito!`;
  
  // 2. Ejecutamos la función de actualización de estado
  setCarrito((prevCarrito) => {
    const existe = prevCarrito.find(item => item.id === producto.id);

    if (existe) {
      // Si ya existe, cambiamos el mensaje para el caso de actualización
      tipoToast = 'info'; 
      mensajeToast = `¡Cantidad de ${producto.title} actualizada!`; 

      return prevCarrito.map(item =>
        item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
      );
    } 
    
    // Si no existe, usamos los valores iniciales de tipoToast/mensajeToast

    return [...prevCarrito, { ...producto, cantidad: 1 }];
  });
  
    // 3. LLAMADA AL TOAST: 
    mostrarToast(mensajeToast, tipoToast);
};

  // Eliminar producto por ID
  const eliminarDelCarrito = (id) => {
    setCarrito((prevCarrito) => prevCarrito.filter(item => item.id !== id));
  };

  // Vaciar el carrito (opcional)
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  // Contador de items
  const totalArticulos = carrito.reduce((acumulador, producto) => {
    // Suma la cantidad de cada producto al acumulador
    return acumulador + producto.cantidad;
  }, 0); // El 0 es el valor inicial del acumulador

  return (
    <CartContext.Provider
      value={{
        carrito,
        setCarrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        vaciarCarrito,
        totalArticulos
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
