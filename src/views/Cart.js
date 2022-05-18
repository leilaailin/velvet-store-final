import React, {useContext, useState} from 'react';
import { CartContext } from '../CartContext';
import CartItem from '../components/CartItem/CartItem';
import {Link} from 'react-router-dom';
import Form from '../components/Form/Form';
import {db} from '../firebase';
import firebase from 'firebase';


const Cart = () => {

    const { cart, totalPrecio, vaciarCarrito } = useContext (CartContext);
    const [showForm, setShowForm] = useState(false)
    const [orderId, setOrderId] = useState("")
    const [confirmation, setConfirmation] = useState(false)

    const handleFinalizer = () =>{
        setShowForm(true)
    }

    const createOrder = (buyer) => {

        const orders = db.collection('compras')

        const newOrder = {
            buyer,
            cart,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: totalPrecio()
        }
        orders.add(newOrder).then(({id}) => {
            setOrderId(id)
            setConfirmation(true)
            vaciarCarrito()
        }
        ).catch((e) => {console.log(e)})
    }


    if(cart.length === 0 && orderId === ""){
        return (
            <div className="cart">
                <div className="heading cf">
                    <h3>El carrito se encuentra vacio.</h3>
                    <Link to="/Productos">
                        <button>Continuar Comprando</button>
                    </Link>
                </div>
            </div>
        )
    }else if(orderId && confirmation){
        return(
            <div>
                <div>
                    <h3>Su orden con código {orderId} ha sido confirmada</h3>
                    <Link to="/" exact>
                        <button>Continuar Comprando</button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div>
                <h2>Carrito</h2>
            </div>
            <div className='carrito'>
                <div className='lista-productos'>
                    <Link to='/productos'>
                        <button> Continuar comprando</button>
                    </Link>
                    {cart.map ((prod) => (
                        <div>
                            <CartItem item={prod} key={prod.id}/>
                        </div>
                    ))}
                    <button onClick={handleFinalizer}>Iniciar Compra</button>
                </div>
                <div className='formulario'>
                    {showForm ? <Form createOrder={createOrder}/> : null}
                </div>
            </div>
        </div>
    )
}

export default Cart;