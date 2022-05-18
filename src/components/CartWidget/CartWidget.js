import React, {useContext} from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css';
import {CartContext} from '../../CartContext';

const CartWidget = () => {

    const { totalProductos } = useContext (CartContext)

    return (
        <div className='cart-widget'>
            { totalProductos() > 0 && <div className='cart-widget'><FaShoppingCart /> <p className='cart-text'>{totalProductos()}</p></div>}
        </div>
    )
}

export default CartWidget;