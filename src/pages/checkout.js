import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TopNavbar from '../components/Nav/TopNavbar';
import axios from 'axios';

function CheckOut() {
  let { roomType, hotelId } = useParams()

  const [hotel, setHotel] = useState({})

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/accomodation/${hotelId}`)
      .then((res) => {
        const { accomodation } = res.data.data
        setHotel(accomodation)
      })
      .catch((err) => {
      });
  }, [])

  const hideSecond = () => {
    document.getElementById('first').style.display = "none"
    document.getElementById('second').style.display = "block"
    document.getElementById('third').style.display = "none"
    console.log("hello")
  }

  const hideFirst = () => {
    document.getElementById('first').style.display = "block"
    document.getElementById('second').style.display = "none"
    document.getElementById('third').style.display = "none"
    console.log("hello")
  }
  const hideThird = () => {
    document.getElementById('first').style.display = "none"
    document.getElementById('second').style.display = "none"
    document.getElementById('third').style.display = "block"
    console.log("hello")
  }

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
        </div>
      </div>
      <br></br>
      <div >
        <div className='stepper'>
          <div className='step-one'>
            <div onClick={hideFirst} className='step-number'>
              <p>1</p>
            </div>
            <p>Personal Information</p>
          </div>
          <div className='step-one'>
            <div onClick={hideSecond} className='step-number'>  <p>2</p></div>
            <p>Contacts Information</p>

          </div>
          <div className='step-one'>
            <div className='step-number' onClick={hideThird}>  <p>3</p></div>
            <p>Final</p>

          </div>
        </div>
        <hr></hr>
        <div style={{ marginLeft: "100px" }}>
          <div id='first' className='form-first'>
            <br></br>
            <p><h3>Enter Details</h3></p>
            <br></br>

            <form>
              <div className='form'>
                <div className='form-names'>
                  <div className='form-group'>
                    <label>Title</label>

                    <select type="text" className='form-control'>
                      <option selected disabled>select Title</option>
                      <option>Mr</option>
                      <option>Mrs</option>
                      <option>Ms</option>
                      <option>Prefer not say</option>
                    </select>

                  </div>
                  <div className='form-group'>
                    <label>Fisrt Name</label>
                    <input type="text" placeholder='Enter Your Fisrt Name' className='form-control' />



                  </div>
                  <div className='form-group'>
                    <label>Second Name</label>
                    <input type="text" placeholder='Enter Your Second Name' className='form-control' />
                  </div>
                </div>
                <div className='group-email'>

                  <div className='form-group'>
                    <label>Title</label>
                    <input type="email" placeholder='Enter Your Email' className='form-control' />



                  </div>
                </div>
                <br></br>
                <button className='btn-c'>Continue</button>
              </div>
            </form>
          </div>
          <div id='second' className='form-second' style={{ display: "none" }}>
            <p><h3>Enter Contact Information</h3></p>
            <form>
              <div className='form'>

                <div className='group-email'>

                  <div className='form-group'>
                    <label>Country</label>
                    <input type="text" placeholder='Enter Your Country' className='form-control' />



                  </div>
                  <div className='form-group'>
                    <label>Telephone</label>
                    <input type="text" placeholder='ex +167.....' className='form-control' />



                  </div>
                </div>
                <br></br>
                <button className='btn-c'>Continue</button>
              </div>
            </form>
          </div>

          <div id='third' className='form-first' style={{ display: "none" }}>
            <p><h3>How Do You Want To Pay.</h3></p>
            <form>
              <div className='form'>

                <div className='group-email'>

                  <div className='form-group'>
                    <label>Payment Option</label>
                    <select type="text" placeholder='Enter Your Country' className='form-control'>
                      <option selected disabled>Select Option</option>
                      <option>Visa Card</option>
                      <option>Master Card</option>
                      <option>Bank Transfer</option>

                    </select>



                  </div>
                </div>
                <br></br>
                <button type='submit' className='btn-c'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
