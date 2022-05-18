import React, {useEffect, useState} from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

// Firebase
import { db } from '../../firebase';

const ItemDetailContainer = () => {

    const [datosDelItem, setDatosDelItem] = useState({});
    const {detailId} = useParams ();

    const getProduct = async (id) => {
        db.collection('products').onSnapshot((querySnapshot) => {
            const prod = [];
            querySnapshot.forEach((doc) => {
                prod.push({...doc.data(), id: doc.id});
            });
            const filteredProduct = prod.find((product) => {
                return product.id === detailId;
            });
            setDatosDelItem(filteredProduct);
        })
    }

    useEffect(() => {
        getProduct(detailId)
    }, [detailId]);

    return(
            <div>
                <ItemDetail item={datosDelItem}/>
            </div>
    )
}

export default ItemDetailContainer;