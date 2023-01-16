import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/about';
import Home from '../pages/home'
import Checkout from '../pages/checkout'
import HotelDetail from '../pages/hotel-detail';

const routes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/hotel-detail" element={<HotelDetail />} />
        </Routes>
    );
}
export default routes;