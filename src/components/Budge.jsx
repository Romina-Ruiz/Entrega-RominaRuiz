import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { FaShoppingCart } from 'react-icons/fa';

const Budge = () => {
 
    //  1. CONSUMIR EL CONTEXTO Y EXTRAER totalArticulos
        const { totalArticulos } = useContext(CartContext);

    // 2. No mostrar el badge si el carrito está vacío
        if (totalArticulos === 0) {
            return <FaShoppingCart size={40} />;
        }

        return (
            <div style={{ position: 'relative', display: 'inline-block' }}>
            <FaShoppingCart size={40} />
            
            <span className='BadgeCarrito'
            >
                {totalArticulos}
            </span>
            </div>
        );
};

export default Budge;