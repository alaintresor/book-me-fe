// src/HotelDetail.js
import React, { useEffect, useState } from 'react';
import TopNavbar from '../components/Nav/TopNavbar';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
function HotelDetail() {
    const navigate = useNavigate()
    let { id } = useParams()
    const [hotel, setHotel] = useState({})

    useEffect(() => {
        axios
            .get(`https://bookme.up.railway.app/api/v1/accomodation/${id}`)
            .then((res) => {
                const { accomodation } = res.data.data
                setHotel(accomodation)
            })
            .catch((err) => {
            });
    }, [])
    return (
        <>
            <TopNavbar />
            <div className='container-fluid'>
                <div className='header row' style={{ background: `url('${hotel.image}')`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>

                    <h1>
                        {hotel.name}
                    </h1>
                    <h3>{hotel.location}</h3>
                    <p className='desc'>{hotel.highlight}</p>
                    <span>Read More</span>
                </div>
            </div>
            <div className='container image-detail-section'>
                <div className='row mt-3'>
                    <div className='col-lg-9'>
                        <div className='row'>
                            <div className='nav-item'>Info & Price</div>

                            <div className='nav-item'>Facilities</div>

                            <div className='nav-item'>House rules</div>

                        </div>
                        <img src={hotel.image} />
                        <div className='content'>

                            <h3>
                                Description

                            </h3>
                            <p>
                                {hotel.description}
                            </p>
                        </div>
                        <div className='facility'>
                            <h3>
                                Hotel Facilities
                            </h3>

                            <hr />
                            <div className='items'>
                                <p>
                                    <span></span>
                                    Languages : English, French, Kinyarwanda, Swahili
                                </p>
                                <p>
                                    <span></span>
                                    Languages : English, French, Kinyarwanda, Swahili
                                </p>

                            </div>
                        </div>
                        <div className='rooms'>
                            <h3>Rooms</h3>
                            <table>
                                <thead>

                                    <th>
                                        Type
                                    </th>
                                    <th>
                                        Description
                                    </th>
                                    <th>
                                        Available Rooms
                                    </th>
                                    <th>
                                        Rate
                                    </th>
                                    <th>
                                    </th>
                                </thead>
                                <tbody>
                                    {hotel.rooms && hotel.rooms.map(room => (


                                        <tr>
                                            <td>
                                                {room.roomType}
                                            </td>
                                            <td>
                                                {room.roomDescription}
                                            </td>
                                            <td>
                                                {room.availableRooms}
                                            </td>
                                            <td>
                                                {room.roomCost}
                                            </td>
                                            <td>
                                                <button onClick={()=>navigate(`/checkout/${room.roomType}/${hotel.id}`)}>Book</button>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HotelDetail;
