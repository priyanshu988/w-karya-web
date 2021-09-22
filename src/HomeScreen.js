import React from 'react';
import Nav from './Nav.js';
import Banner from './Banner.js';
import Banner2 from './Banner2.js';
import Slider from './Slider.js';


function HomeScreen() {
    return (
        <div>
            <Nav />
            
            <Banner />

            <Banner2 />

            <Slider />
        </div>
    )
}

export default HomeScreen
