import React, {useState} from 'react';
import './ItemCount.css';

const ItemCount = ({item, stock, onAdd}) => {
    const [counter, setCounter] = useState(1);

    const agregar = (maximo) => {
        counter < maximo 
        ? setCounter (counter+1)
        : alert ('No hay stock suficiente')
    }

    const quitar = () => {
        counter > 0
        ? setCounter(counter-1)
        : alert ('Debe incrementar el número para agregar productos al carrito')
    }
    

    return (
        <div className='item-count'>
            <p>Stock disponible: {stock}</p>
            <div className='item-count-botones'>
                <button onClick={quitar} className='item-count-botones-componente'> - </button>
                <p> {counter} </p>
                <button onClick={() => agregar(stock)} className='item-count-botones-componente'> + </button>
                <button onClick={ () => onAdd(counter)} className='item-count-botones-componente'>Añadir al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;