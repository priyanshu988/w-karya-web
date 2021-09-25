import React from 'react';
import Nav from './Nav.js';
import Banner from './Banner.js';
import Banner2 from './Banner2.js';
import Slider from './Slider.js';
import Banner3 from './Banner3.js';
import Footer from './Footer.js';


function HomeScreen() {
    return (
        <div>
            <Nav />
            
            <Banner />

            <Banner2 />

            <Slider />

            <Banner3 />

            <Footer />
        </div>
    )
}

export default HomeScreen
