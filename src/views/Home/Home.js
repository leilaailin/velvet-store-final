import React from 'react';
import banner from './home-banner.jpg';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <img src={banner} className="banner" alt="banner" />
        </div>
    )
}

export default Home;