import React from 'react';
import foto from './nosotros.jpg';
import './Nosotros.css';

const Nosotros = () => {
    return (
        <div className='nosotros'>
            <img src={foto} alt='Imagen representativa de la marca' className='nosotros-img' />
            <div className='nosotros-texto'>
                <h2>NOSOTROS</h2>
                <p>Somos diseñadores, soñadores, fabricantes, emprenderores y personas con muchas muchas ganas de aprender y crecer. Empezamos hace 9 años, diseñando calzas, únicamente esa tipología! Inclusive nos llamabamos MOOD (humor en inglés) y aludiamos a que depende a tu humor, tenías una calza para cada día. Con el paso de los años fuimos incorporando diferentes tipologías y hoy en día abarcamos gran cantidad de categorías de prendas! Siempre pensamos en que las prendas tienen su historia y que cada una de ellas es un mundo! Entendemos el producto final como una totalidad y suma de procesos que llevan a que esa idea que en algun momento pensamos.. se materialice! </p>
                <p>Fabricamos y diseñamos ropa para TODOS las mujeres, consideramos que cada mujer es única e irrepetible. Es importante destacar que todxs somos REALES, con nuestras diferencias y similitudes.</p>
                <p>¿Cuál es nuestro concepto de cabecera? BE YOU.. Ser vos! Ese es nuestro puntapié inicial para diseñar y ofrecerte variedad en estilos, diseños, géneros, texturas y colores. Te invitamos a conocer nuestra nueva colección Otoño Invierno 21. En Say Mood todxs somos IGUALES, todos somos HERMOSOS, hacemos a un lado los prejuicios y los estereotipos de que cierto corte de prenda es para cierto tipo de cuerpo, o que cierta paleta de color es para cierto tipo de piel.. Mmm si a VOS te gusta, te identifica y te sentís comoda, es para VOS.</p>
                <p>Trabajamos con géneros textiles de alta calidad, amplia variedad de paletas de colores, diferentes líneas, que se adaptan en el día a día de cada mujer.  Nos inspiran las mujeres y la diversidad de gustos, intereses y estilos. </p>
                <p>Velvet trabaja para que TODOS puedan sentirse COMODAS Y HERMOSAS TAL Y COMO SON, REALES! Queremos seguir creciendo y sumando líneas y propuestas para nuestras clientas. Nos orientamos al cliente 100 %. Vendemos en tienda física y online. </p>
            </div>
            
        </div>
    )
}

export default Nosotros;