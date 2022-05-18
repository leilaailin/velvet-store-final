import React, { useState} from 'react';
import {FaUserAlt, FaPhone, FaEnvelope, FaEnvelopeOpen } from 'react-icons/fa';
import './Form.css';

const Form = ({ createOrder }) => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        emailConfirmation: ''
    })

    const getContactData = (e) => {
        const { name, value } = e.target
        setForm((state) => {
            return { ...state, [name]: value }
        })
    }

    const finalizePurchase = () => {
        const { name, email, phone } = form
        createOrder({ name, email, phone })
    }
    const disabled = !(
        form.email.length &&
        form.name.length &&
        form.emailConfirmation.length &&
        form.phone.length > 0 &&
        form.email === form.emailConfirmation
    )

    return (
        <div>
        <h2 className='datos-contacto'>Datos de Contacto</h2>
        <form>
            <div>
                <label><FaUserAlt /></label>
                <input placeholder="Nombre y Apellido" name="name" value={form.name} onChange={getContactData} type="text"/>
            </div>
            <div>
                <label><FaEnvelope /></label>
                <input placeholder="Email" name="email" value={form.email} onChange={getContactData} type="email"/>
            </div>
            <div>
                <label><FaPhone/></label>
                <input placeholder="Teléfono" name="phone" value={form.phone} onChange={getContactData} type="text"/>
            </div>
            <div>
                <label><FaEnvelopeOpen /></label>
                <input placeholder="Confirma Email" name="emailConfirmation" value={form.emailConfirmation} onChange={getContactData} type="email"/>
            </div>
        </form>
        <button className='finalizar-compra' type="submit" disabled={disabled} onClick={finalizePurchase}>Finalizar</button>   
        </div>
    )
}

export default Form;