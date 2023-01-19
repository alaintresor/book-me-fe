// src/HotelDetail.js
import React, { useEffect, useState } from 'react';
import TopNavbar from '../components/Nav/TopNavbar';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import Footer from "../components/Sections/Footer"
import Banner from '../components/Sections/Banner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

function HotelDetail() {
    const navigate = useNavigate()
    let { id } = useParams()
    const [hotel, setHotel] = useState({})
    console.log(id)

    useEffect(() => {
        axios
            .get(`https://bookme.up.railway.app/api/v1/accomodation/${id}`)
            .then((res) => {
                const { accomodation } = res.data.data
                console.log(accomodation)
                setHotel(accomodation)
            })
            .catch((err) => {
            });
    }, [])
    return (
        <>
            <TopNavbar />
            <Banner hotel={hotel} />

            <div className='container image-detail-section'>
                <div className='row mt-3'>
                    <div className='col-md-9 col-xs-12'>
                        <div className='flex'>
                            <div className='nav-item'><a href='#info' style={{ textDecoration: "none", color: "white" }}> Info & Price</a></div>

                            <div className='nav-item'> <a href='#facility' style={{ textDecoration: "none", color: "white" }}> Facilities</a></div>

                            <div className='nav-item'>House rules</div>

                        </div>
                        <img src={hotel.image} />
                        <div className='content' id='info'>

                            <h3>
                                Description

                            </h3>
                            <p>
                                {hotel.description}
                            </p>
                        </div>
                        <div className='facility' id='facility'>
                            <h3>
                                Hotel Facilities
                            </h3>

                            <hr />
                            <div className='items'>
                                {hotel.amenitiesList && hotel.amenitiesList.map(item => (
                                    <p>
                                        <span><FontAwesomeIcon icon={faCheck} size="1x" color="green" /> </span>
                                        {item}
                                    </p>
                                ))}

                            </div>
                        </div>
                        <div className='rooms'>
                            <h3>Rooms</h3>
                            <table className='responsive-table'>
                                <thead>

                                    <th>
                                        Type
                                    </th>
                                    <th>
                                        Capacity
                                    </th>
                                    <th>
                                        Available Rooms
                                    </th>
                                    <th>
                                        Rate
                                    </th>
                                    <th></th>
                                </thead>
                                <tbody>
                                    {hotel.rooms && hotel.rooms.map(room => (


                                        <tr>
                                            <td className='data'>
                                                {room.roomType}
                                            </td>
                                            <td className='data'>
                                                {room.children} children & {room.adults} adults
                                            </td>
                                            <td className='data'>
                                                {room.availableRooms}
                                            </td>
                                            <td className='data'>
                                                {room.roomCost}$
                                            </td>
                                            <td className='data' align='right'>
                                                <button onClick={() => navigate(`/checkout/${room.roomType}/${hotel.id}`)}>Book</button>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default HotelDetail;
