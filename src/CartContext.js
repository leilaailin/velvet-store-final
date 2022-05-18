import React, {useState, createContext} from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {

    const [cart, setCart] = useState([]);

    const isInCart = (id) => cart.some((item)=> item.id === id);

    const addToCart = (item, quantity) => {
        if (isInCart(item.id)) {
            const newCart = cart.map((cartElement) => {
                if (cartElement.id === item.id) {
                    return { ...cartElement, quantity: cartElement.quantity + quantity};
                } else return cartElement;
            });
            setCart(newCart);
        } else {
            setCart((prev) => [...prev, {...item, quantity}]);
        }
    };

    const removeItem = (itemId) => {
        setCart(cart.filter((elem) => elem.id !== itemId));
    }

    const vaciarCarrito = () => setCart([]);

    const totalProductos = () => {
        let total = 0
        cart.map ((prod) => {
            return (
                total += prod.quantity
            )
        })
        return total
    }

    const totalPrecio = () => {
        let totalPrecio = 0
        cart.map((prod) => {
            return (
                totalPrecio += (prod.price * prod.quantity)
            )
        })
        return `$${totalPrecio}`
    }

    return(
        <CartContext.Provider value={{cart, setCart, addToCart, removeItem, vaciarCarrito, totalProductos, totalPrecio}}>
            {props.children}
        </CartContext.Provider>
    )
}


