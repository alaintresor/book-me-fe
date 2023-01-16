// src/HotelDetail.js
import React from 'react';
import TopNavbar from '../components/Nav/TopNavbar';

function HotelDetail() {
    return (
        <>
            <TopNavbar />
            <div className='container'>
                <div className='header'>
                    <h3>
                    MARRIOTT HOTEL KIGALI
                    </h3>
                    <h6>Rwanda</h6>
                </div>
            </div>
        </>
    );
}

export default HotelDetail;
