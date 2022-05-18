import React, {useContext} from 'react';
import { CartContext } from '../../CartContext';
import './CartItem.css';

const CartItem = ({item}) => {
    const {removeItem} = useContext(CartContext)

    return (
        <div className='carrito-producto'>
            <img src={item.picture} alt={item.alt} className='carrito-foto'/>
            <p className='carrito-cantidad'>{item.quantity}</p>
            <h3 className='carrito-titulo'>{item.title}</h3>
            <button onClick={() => removeItem (item.id)} className='carrito-boton'>Eliminar</button>
        </div>
    )
}

export default CartItem