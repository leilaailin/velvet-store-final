import React from 'react';
import './ItemList.css';
import Item from '../Item/Item';

const ItemList = ({productos}) =>{
    return (
        <div className='productos-container'>
            {productos.map( (product) => <Item product={product} key={product.id}/>)}
        </div>
    )
}

export default ItemList;