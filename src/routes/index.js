import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/about';
import Home from '../pages/home'
import Checkout from '../pages/checkout'
import Hotels from '../pages/hotels'
import HotelDetail from '../pages/hotel-detail';
import Search from '../pages/search';

const routes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/hotels" element={<Hotels />} />
            <Route exact path="/search" element={<Search />} />
            <Route exact path="/checkout/:roomType/:hotelId" element={<Checkout />} />
            <Route exact path="/search/:place/:arrival/:departure/:room/:adult/:child" element={<Search />} />
            <Route exact path="/hotel-detail/:id" element={<HotelDetail />} />
        </Routes>
    );
}
export default routes;