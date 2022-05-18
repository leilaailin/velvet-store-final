import React from 'react';
import {Link} from 'react-router-dom';
import './Categories.css'

const Categories = () => {
    return (
        <div className='categories'>
            <ul>
                <li><Link to='/Productos'>Todo</Link></li>
                <li><Link to='/Category/Pantalones'>Pantalones y polleras</Link></li>
                <li><Link to='/Category/Remeras'>Remeras, tops y camisas</Link></li>
                <li><Link to='/Category/Vestidos'>Vestidos</Link></li>
            </ul>        
        </div>
    )
}

export default Categories;


