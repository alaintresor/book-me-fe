import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import TopNavbar from "../components/Nav/TopNavbar";
import Footer from "../components/Sections/Footer";
import HotelSearchCard from "../components/HotelSearchCard";

export default function Search() {

  let { place, arrival, deperture, room, adult, child } = useParams()
  const [rooms, setRooms] = useState([])
  const [hotels, setHotel] = useState([])
  var data = JSON.stringify({
    "location": place,
    "children": child,
    "adults": adult,
    "roomsNber": room
  });
  var config = {
    method: 'post',
    url: 'https://bookme.up.railway.app/api/v1/search',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };
  useEffect(() => {
    axios(config)
      .then((res) => {
        res.data.result.map((element) => {
          axios
            .get(`https://bookme.up.railway.app/api/v1/accomodation/${element.accomodationId}`)
            .then((res) => {
              setHotel([...hotels, res.data.data])
              // const { accomodation } = res.data.data
              console.log(res.data.data)
              // setHotel(accomodation)
            })
            .catch((err) => {
            });

          // console.log(element.accomodationId)
        })
        setRooms(res.data.result)

      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])
  return (
    <>
      <TopNavbar />
      <div className="SearchContainer container" >
        <div className="searchLeft">

        </div>
        <div className="searchRight">
            {hotels && hotels.map((item) => (

              <HotelSearchCard hotel={item} />
            )
            )}
        </div>
      </div>
      <Footer />

    </>
  );
}