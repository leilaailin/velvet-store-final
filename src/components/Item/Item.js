import React from 'react';
import './Item.css';
import {Link} from 'react-router-dom'

const Item = ({product}) => {
    return(
        <Link to={`/Detail/${product.id}`}>
            <div className='item-producto'>
                <img src={product.picture} alt={product.alt}/>
                <h2 className='item-producto-title'>{product.title}</h2>
                <p className='item-producto-price'>${product.price}</p>
                <p className='item-producto-stock'>Stock disponible: {product.stock}</p>
            </div>
        </Link>
    )
}

export default Item;