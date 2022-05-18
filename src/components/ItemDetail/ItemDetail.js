import React, { useState, useContext } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import { CartContext } from '../../CartContext';



function ItemDetail ({item}) {

    const {addToCart} = useContext(CartContext);

    const [counter, setCounter] = useState(1)

    const onAdd = (valor) =>{
        valor > 0
        ? setCounter(valor)
        : alert ("Debe ingresar una cantidad mayor a 0")

        addToCart(item, valor);
    }

    return(
        <div className='item-detail'>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>                    
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={item.picture} className="d-block w-100" alt={item.alt} />
                    </div>
                    <div className="carousel-item">
                        <img src={item.picture1} className="d-block w-100" alt={item.alt} />
                    </div>
                    <div className="carousel-item">
                        <img src={item.picture2} className="d-block w-100" alt={item.alt} />
                    </div>
                    <div className="carousel-item">
                        <img src={item.picture3} className="d-block w-100" alt={item.alt} />
                    </div>
                    <div className="carousel-item">
                        <img src={item.picture4} className="d-block w-100" alt={item.alt} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className='item-detail-info'>
                <h2 className='item-detail-title'>{item.title}</h2>
                <h3 className='item-detail-price'>${item.price}</h3>
                <p className='item-detail-description'>{item.description}</p>
                <div>
                    {counter === 1
                    ? <ItemCount stock={item.stock} onAdd={onAdd} />
                    : <Link to='/Cart'>
                        <button className='cart-boton'>Termina tu compra</button>
                      </Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;