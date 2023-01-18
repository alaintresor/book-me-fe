import HotelImage from '../assets/img/2000.jpg'
import { Link } from "react-router-dom";
import { useNavigate, useParams } from 'react-router';
const HotelSearchCard = ({hotel}) => {
    const navigate = useNavigate()
  return (
    <>
      <div className="HotelCard">
        
        <img src={HotelImage} className="HotelImage" alt="image"/>
        <div className='HotelDescription'>
       <p className='hotelName'>{hotel.accomodation.name}</p>
       <p className='discription'>{hotel.accomodation.description}</p>
       <br/>
        <h3>Facilities</h3>
       <div className='Facility'>
     
       <div className='left'>
          <div >
            <p>Internet</p>
            <p>Bar</p>
            <p>Terrace</p>
          </div>
       </div>
       <div className='left'>
       <div >
            <p>Parking</p>
            <p>Garden</p>
            <p>Family rooms</p>
          </div>
       </div>
       </div>
        </div>
        <div className='HotelPrice'>
            <br></br>
            <p>from</p>
            <h2>$ 180</h2>
            <p>/ night</p>
           <span style={{cursor:"pointer"}} onClick={(e)=>navigate(`/hotel-detail/${hotel.accomodation.id}`)}>See pricing</span>
        </div>
      </div>
    </>
  )
}

export default HotelSearchCard
