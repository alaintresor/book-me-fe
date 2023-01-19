import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TopNavbar from '../components/Nav/TopNavbar';
import axios from 'axios';
import Footer from "../components/Sections/Footer"
import { useDispatch, useSelector } from 'react-redux';
import { alertActions } from "../redux/alertSlice";
import Swal from 'sweetalert2'
import ConfirmDialog from '../components/Modal/ConfirmDialog';
import Banner from '../components/Sections/Banner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'

function CheckOut() {
  const Checkout = window.Checkout;




  const dispatch = useDispatch()

  let { roomType, hotelId } = useParams()
  const [title, setTitle] = useState('')
  const [roomMain, setRoomMain] = useState({})
  const [rooms, setRoom] = useState('1')
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [emailMe, setEmailMe] = useState('')
  const [isGuest, setIsGuest] = useState(true)
  const [fullnameOther, setFullnameOther] = useState('')
  const [emailOther, setEmailOther] = useState('')
  const [country, setCountry] = useState('')
  const [tel, setTel] = useState('')
  const [attendingEvent, setAttendingEvent] = useState(false)
  const [event, setEvent] = useState('')
  const [promo, setPromo] = useState('')
  const [paymentOption, setPaymentOption] = useState('')
  const [arriveTime, setArriveTime] = useState('')
  const [arriveDate, setArriveDate] = useState('')
  const [question, setQuestion] = useState('')
  const [purpose, setPurpose] = useState('')
  const [open, setOpen] = useState(false)
  const [isSubmit, setIsSubmit] = useState(false)
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')
  const [dayNumber, setDayNumber] = useState(1)
  const [stepOne, setSteOne] = useState(false)
  const [stepTwo, setSteTwo] = useState(false)
  const [stepThree, setStepThree] = useState(false)




  const [hotel, setHotel] = useState({})

  let [events, setEvents] = useState([])

  useEffect(() => {
    axios
      .get(`https://bookme.up.railway.app/api/v1/accomodation/${hotelId}`)
      .then((res) => {
        const { accomodation } = res.data.data
        setHotel(accomodation)
      })
      .catch((err) => {
      });

  }, [])

  useEffect(() => {
    var data = JSON.stringify({
      "roomType": `${roomType}`,
      "accomodationId": `${hotelId}`
    });

    var config = {
      method: 'post',
      url: 'https://bookme.up.railway.app/api/v1/rooms',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (res) {
        setRoomMain(res.data.data)
        console.log(roomMain);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])
  useEffect(() => {

    axios
      .get(`https://bookme.up.railway.app/api/v1/event`)
      .then((res) => {
        const { events } = res.data.data
        setEvents(events)
      })
      .catch((err) => {
        console.log(err)
      });
  }, [])

  const hideSecond = (e) => {
    e.preventDefault()
    document.getElementById('first').style.display = "none"
    document.getElementById('second').style.display = "block"
    document.getElementById('third').style.display = "none"

    var step1 = document.getElementById('step1');
    var step2 = document.getElementById('step2');
    var step3 = document.getElementById('step3');
    step1.style.background = "#990f0f80"
    // step2.style.background = "transparent"
    // step3.style.background = "transparent"
    setSteOne(true)

  }

  const hideFirst = (e) => {
    e.preventDefault()
    document.getElementById('first').style.display = "block"
    document.getElementById('second').style.display = "none"
    document.getElementById('third').style.display = "none"
    var step1 = document.getElementById('step1');
    var step2 = document.getElementById('step2');
    var step3 = document.getElementById('step3');
    // step1.style.background = "#990f0f80"
   

  }
  const hideThird = (e) => {
    e.preventDefault()
    document.getElementById('first').style.display = "none"
    document.getElementById('second').style.display = "none"
    document.getElementById('third').style.display = "block"

    var step2 = document.getElementById('step2');
    step2.style.background = "#990f0f80"
    setSteTwo(true)
  }

  const showField1 = () => {
    setIsGuest(true)
    var ref = document.getElementById('fieldBook')
    ref.style.display = "none"
  }

  const showField = () => {
    setIsGuest(false)
    var ref = document.getElementById('fieldBook')
    ref.style.display = "flex"
  }

  const pay = () => {
    Checkout.showLightbox()
  }
  function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xx-xxxx-4xxx-yxxx-xxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16;//random number between 0 and 16
      if (d > 0) {//Use timestamp until depleted
        r = (d + r) % 16 | 0;
        d = Math.floor(d / 16);
      } else {//Use microseconds since page-load if supported
        r = (d2 + r) % 16 | 0;
        d2 = Math.floor(d2 / 16);
      }
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    Swal.getTimerProgressBar({
      timer: 39
    })
    const uid = Math.floor(Math.random() * 1000000);

    setIsSubmit(true)
    const data = {
      title,
      fname,
      lname,
      email: emailMe,
      bookingForName: fullnameOther,
      bookingForEmail: emailOther,
      country,
      phone: tel,
      eventId: event,
      promotionCode: promo,
      paymentMethod: paymentOption,
      roomType,
      accomodationId: hotelId,
      purpose,
      arriveDate,
      arriveTime,
      question,
      dayNumber: dayNumber


    }
    axios
      .post(`https://bookme.up.railway.app/api/v1/book`, {
        ...data
      })
      .then((res) => {
        const amount = roomMain?.room?.roomCost * rooms * dayNumber;
        console.log(amount)
        var data1 = JSON.stringify({
          "amount": `${amount}`
        });

        var config = {
          method: 'post',
          url: 'https://bookme.up.railway.app/api/v1/payment/',
          headers: {
            'Content-Type': 'application/json'
          },
          data: data1
        };

        axios(config)
          .then(function (response) {
            Checkout.configure({
              session: {
                id: `${response.data.data.session.id}`
              },
              merchant: "8206000697",
              order: {
                amount: `${amount}`,
                currency: "USD",
                description: `Book ${roomType}`,
                id: uid,
                reference: uid
              },
              transaction: {
                reference: uid
              },
              interaction: {
                operation: "PURCHASE",
                merchant: {
                  name: "GODISCOVER AFRICA LTD",
                  address: {
                    line1: "kicukiro",
                    line1: "",
                  }
                },
              },
            });
            pay()
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });

        setOpen(true)
        setIsSubmit(false)

        Swal.fire({
          title: 'Thank for Booking with us!',
          text: 'Your request sent successfull',
          icon: 'success',
          confirmButtonText: 'ok'
        })
      })
      .catch((err) => {
        console.log(err)
      });
  }

  const getDates = () => {
    if (toDate != '' && fromDate != '') {
      const date1 = new Date(`${fromDate}`);
      const date2 = new Date(`${toDate}`);
      var diff = date2 - date1; // difference in milliseconds
      var diffDays = diff / (1000 * 60 * 60 * 24); // convert to number of days

      console.log(diffDays)
      if (diffDays <= 0) {
        alert("error")
        return 0
      }

      setDayNumber(diffDays)
      return 0
    }
    return 0
  }

  return (
    <>

      <TopNavbar />
      <Banner hotel={hotel} />
      <ConfirmDialog title={"booking confirmation"} children={`Thank you for booking ${hotel.name} with Go Discover Africa, a leading event organizing and tour company in Rwanda. We are pleased to confirm that your reservation has been received and is being processed. Your booking will be confirmed after review within the with in 2 hours.\n waiting to pay to get receipt or pay later at hotel.`} open={open} setOpen={setOpen} />
      <br></br>
      <div className='container'>
        <div className='stepper'>
          <div className='step-one'>
            <div id='step1' onClick={hideFirst} className='step-number'>
              <p>1</p>
            </div>
            <p>Personal Information</p>
          </div>
          <div className='step-one'>
            <div id='step2' onClick={stepOne === true ? hideSecond : null} className='step-number'>  <p>2</p></div>
            <p>Contacts Information</p>

          </div>
          <div className='step-one'>
            <div id='step3' className='step-number' onClick={stepTwo === true ? hideThird : null}>  <p>3</p></div>
            <p>Final</p>

          </div>
        </div>

        <hr></hr>

        <div className='row'>
          <div className='col-lg-7'>
            <div className='ClassRoom'>
              <div className='form-step'>
                <div>
                  <div id='first' className='form-first'>
                    <br></br>
                    <p><h4>Enter Details</h4></p>
                    <br></br>

                    <form onSubmit={hideSecond}>
                      <div className='form'>
                        <div className=' form-names'>
                          <div className='form-group'>
                            <label>Title <span className='required'>*</span></label>
                            <select type="text" value={title} onChange={(e) => setTitle(e.target.value)} className='form-control'>
                              <option selected disabled>select Title</option>
                              <option>Mr</option>
                              <option>Mrs</option>
                              <option>Ms</option>
                              <option>Prefer not say</option>
                            </select>

                          </div>

                          <div className='form-group'>
                            <label>Fisrt Name <span className='required'>*</span></label>
                            <input type="text" name='firstname' value={fname} onChange={(e) => setFname(e.target.value)} placeholder='Enter Your Fisrt Name' required className='form-control' />

                          </div>

                          <div className='form-group'>
                            <label>Second Name <span className='required'>*</span></label>
                            <input type="text" name='secondname' value={lname} onChange={(e) => setLname(e.target.value)} placeholder='Enter Your Second Name' required className='form-control' />

                          </div>
                        </div>
                        <div className='group-email'>

                          <div className='form-group'>
                            <label>Email <span className='required'>*</span></label>
                            <input type="email" value={emailMe} onChange={(e) => setEmailMe(e.target.value)} placeholder='Enter Your Email' required className='form-control' />
                          </div>
                        </div>

                        <p>Who want to book? <span className='required'>*</span></p>

                        <p><input checked type="radio" name="who" onClick={showField1} /> I'm the main guest</p>
                        <p><input type="radio" name="who" onClick={showField} /> I'm booking for someone else</p>

                        <div className='form-names' id='fieldBook' style={{ display: "none" }} >
                          <div className='form-group'>
                            <label>Full Name <span className='required'>*</span></label>
                            {isGuest === false ? (
                              <input type="text" value={fullnameOther} onChange={(e) => setFullnameOther(e.target.value)} placeholder='Enter Full Name' required className='form-control' />
                            ) : ""}

                          </div>
                          <div className='form-group'>
                            <label>Email <span className='required'>*</span></label>
                            {isGuest === false ? (
                              <input value={emailOther} onChange={(e) => setEmailOther(e.target.value)} type="email" placeholder='Enter Email' required className='form-control' />
                            ) : ""}
                          </div>
                        </div>
                        <p><h4>Ask a question <span>(optional)</span></h4> </p>
                        <p className='ask'>
                          Type your requests in English here – we'll share them with the property.<br />
                          Special requests cannot be guaranteed – but the property will do its best to meet your needs.<br />
                          You can always make a special request after your booking is complete!<br />
                        </p>
                        <textarea rows="5" cols="40" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="type here ..."></textarea>
                        <p className='ask'>
                          Let the property know when you plan to arrive (optional)

                        </p>
                        <p className='ask'>
                          You might hear back from the property about your arrival time.

                        </p>
                        <h4>
                          Arrival time <span>(optional)</span>:
                        </h4>
                        <p className='ask'>
                          Check-in time: Your room will be ready for check-in between 14:00 PM and 14:00
                        </p>

                        <div className='flex time-date'>
                          <input type="date" name="date" value={arriveDate} onChange={(e) => setArriveDate(e.target.value)} />
                          <input type="time" name="time" value={arriveTime} onChange={(e) => setArriveTime(e.target.value)} />
                        </div>
                        <p className='ask'>
                          Time is for  <b> {hotel.name}</b> time zone</p>
                        <br />
                        <br />
                        <button style={{ cursor: "pointer" }} className='btn-c'  >Continue</button>
                      </div>
                    </form>
                  </div>
                  <div id='second' className='form-second' style={{ display: "none" }}>
                    <p><h4>Enter Contact Information</h4></p>
                    <form onSubmit={hideThird}>
                      <div className='form'>

                        <div className='group-email'>

                          <div className='form-group'>

                            <label for="country">Country <span className='required'>*</span></label>

                            <select id="country" value={country} onChange={(e) => setCountry(e.target.value)} name="country" class="form-control">
                              <option value="Afghanistan">Afghanistan</option>
                              <option value="Åland Islands">Åland Islands</option>
                              <option value="Albania">Albania</option>
                              <option value="Algeria">Algeria</option>
                              <option value="American Samoa">American Samoa</option>
                              <option value="Andorra">Andorra</option>
                              <option value="Angola">Angola</option>
                              <option value="Anguilla">Anguilla</option>
                              <option value="Antarctica">Antarctica</option>
                              <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                              <option value="Argentina">Argentina</option>
                              <option value="Armenia">Armenia</option>
                              <option value="Aruba">Aruba</option>
                              <option value="Australia">Australia</option>
                              <option value="Austria">Austria</option>
                              <option value="Azerbaijan">Azerbaijan</option>
                              <option value="Bahamas">Bahamas</option>
                              <option value="Bahrain">Bahrain</option>
                              <option value="Bangladesh">Bangladesh</option>
                              <option value="Barbados">Barbados</option>
                              <option value="Belarus">Belarus</option>
                              <option value="Belgium">Belgium</option>
                              <option value="Belize">Belize</option>
                              <option value="Benin">Benin</option>
                              <option value="Bermuda">Bermuda</option>
                              <option value="Bhutan">Bhutan</option>
                              <option value="Bolivia">Bolivia</option>
                              <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                              <option value="Botswana">Botswana</option>
                              <option value="Bouvet Island">Bouvet Island</option>
                              <option value="Brazil">Brazil</option>
                              <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                              <option value="Brunei Darussalam">Brunei Darussalam</option>
                              <option value="Bulgaria">Bulgaria</option>
                              <option value="Burkina Faso">Burkina Faso</option>
                              <option value="Burundi">Burundi</option>
                              <option value="Cambodia">Cambodia</option>
                              <option value="Cameroon">Cameroon</option>
                              <option value="Canada">Canada</option>
                              <option value="Cape Verde">Cape Verde</option>
                              <option value="Cayman Islands">Cayman Islands</option>
                              <option value="Central African Republic">Central African Republic</option>
                              <option value="Chad">Chad</option>
                              <option value="Chile">Chile</option>
                              <option value="China">China</option>
                              <option value="Christmas Island">Christmas Island</option>
                              <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                              <option value="Colombia">Colombia</option>
                              <option value="Comoros">Comoros</option>
                              <option value="Congo">Congo</option>
                              <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                              <option value="Cook Islands">Cook Islands</option>
                              <option value="Costa Rica">Costa Rica</option>
                              <option value="Cote D'ivoire">Cote D'ivoire</option>
                              <option value="Croatia">Croatia</option>
                              <option value="Cuba">Cuba</option>
                              <option value="Cyprus">Cyprus</option>
                              <option value="Czech Republic">Czech Republic</option>
                              <option value="Denmark">Denmark</option>
                              <option value="Djibouti">Djibouti</option>
                              <option value="Dominica">Dominica</option>
                              <option value="Dominican Republic">Dominican Republic</option>
                              <option value="Ecuador">Ecuador</option>
                              <option value="Egypt">Egypt</option>
                              <option value="El Salvador">El Salvador</option>
                              <option value="Equatorial Guinea">Equatorial Guinea</option>
                              <option value="Eritrea">Eritrea</option>
                              <option value="Estonia">Estonia</option>
                              <option value="Ethiopia">Ethiopia</option>
                              <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                              <option value="Faroe Islands">Faroe Islands</option>
                              <option value="Fiji">Fiji</option>
                              <option value="Finland">Finland</option>
                              <option value="France">France</option>
                              <option value="French Guiana">French Guiana</option>
                              <option value="French Polynesia">French Polynesia</option>
                              <option value="French Southern Territories">French Southern Territories</option>
                              <option value="Gabon">Gabon</option>
                              <option value="Gambia">Gambia</option>
                              <option value="Georgia">Georgia</option>
                              <option value="Germany">Germany</option>
                              <option value="Ghana">Ghana</option>
                              <option value="Gibraltar">Gibraltar</option>
                              <option value="Greece">Greece</option>
                              <option value="Greenland">Greenland</option>
                              <option value="Grenada">Grenada</option>
                              <option value="Guadeloupe">Guadeloupe</option>
                              <option value="Guam">Guam</option>
                              <option value="Guatemala">Guatemala</option>
                              <option value="Guernsey">Guernsey</option>
                              <option value="Guinea">Guinea</option>
                              <option value="Guinea-bissau">Guinea-bissau</option>
                              <option value="Guyana">Guyana</option>
                              <option value="Haiti">Haiti</option>
                              <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                              <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                              <option value="Honduras">Honduras</option>
                              <option value="Hong Kong">Hong Kong</option>
                              <option value="Hungary">Hungary</option>
                              <option value="Iceland">Iceland</option>
                              <option value="India">India</option>
                              <option value="Indonesia">Indonesia</option>
                              <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                              <option value="Iraq">Iraq</option>
                              <option value="Ireland">Ireland</option>
                              <option value="Isle of Man">Isle of Man</option>
                              <option value="Israel">Israel</option>
                              <option value="Italy">Italy</option>
                              <option value="Jamaica">Jamaica</option>
                              <option value="Japan">Japan</option>
                              <option value="Jersey">Jersey</option>
                              <option value="Jordan">Jordan</option>
                              <option value="Kazakhstan">Kazakhstan</option>
                              <option value="Kenya">Kenya</option>
                              <option value="Kiribati">Kiribati</option>
                              <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                              <option value="Korea, Republic of">Korea, Republic of</option>
                              <option value="Kuwait">Kuwait</option>
                              <option value="Kyrgyzstan">Kyrgyzstan</option>
                              <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                              <option value="Latvia">Latvia</option>
                              <option value="Lebanon">Lebanon</option>
                              <option value="Lesotho">Lesotho</option>
                              <option value="Liberia">Liberia</option>
                              <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                              <option value="Liechtenstein">Liechtenstein</option>
                              <option value="Lithuania">Lithuania</option>
                              <option value="Luxembourg">Luxembourg</option>
                              <option value="Macao">Macao</option>
                              <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                              <option value="Madagascar">Madagascar</option>
                              <option value="Malawi">Malawi</option>
                              <option value="Malaysia">Malaysia</option>
                              <option value="Maldives">Maldives</option>
                              <option value="Mali">Mali</option>
                              <option value="Malta">Malta</option>
                              <option value="Marshall Islands">Marshall Islands</option>
                              <option value="Martinique">Martinique</option>
                              <option value="Mauritania">Mauritania</option>
                              <option value="Mauritius">Mauritius</option>
                              <option value="Mayotte">Mayotte</option>
                              <option value="Mexico">Mexico</option>
                              <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                              <option value="Moldova, Republic of">Moldova, Republic of</option>
                              <option value="Monaco">Monaco</option>
                              <option value="Mongolia">Mongolia</option>
                              <option value="Montenegro">Montenegro</option>
                              <option value="Montserrat">Montserrat</option>
                              <option value="Morocco">Morocco</option>
                              <option value="Mozambique">Mozambique</option>
                              <option value="Myanmar">Myanmar</option>
                              <option value="Namibia">Namibia</option>
                              <option value="Nauru">Nauru</option>
                              <option value="Nepal">Nepal</option>
                              <option value="Netherlands">Netherlands</option>
                              <option value="Netherlands Antilles">Netherlands Antilles</option>
                              <option value="New Caledonia">New Caledonia</option>
                              <option value="New Zealand">New Zealand</option>
                              <option value="Nicaragua">Nicaragua</option>
                              <option value="Niger">Niger</option>
                              <option value="Nigeria">Nigeria</option>
                              <option value="Niue">Niue</option>
                              <option value="Norfolk Island">Norfolk Island</option>
                              <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                              <option value="Norway">Norway</option>
                              <option value="Oman">Oman</option>
                              <option value="Pakistan">Pakistan</option>
                              <option value="Palau">Palau</option>
                              <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                              <option value="Panama">Panama</option>
                              <option value="Papua New Guinea">Papua New Guinea</option>
                              <option value="Paraguay">Paraguay</option>
                              <option value="Peru">Peru</option>
                              <option value="Philippines">Philippines</option>
                              <option value="Pitcairn">Pitcairn</option>
                              <option value="Poland">Poland</option>
                              <option value="Portugal">Portugal</option>
                              <option value="Puerto Rico">Puerto Rico</option>
                              <option value="Qatar">Qatar</option>
                              <option value="Reunion">Reunion</option>
                              <option value="Romania">Romania</option>
                              <option value="Russian Federation">Russian Federation</option>
                              <option value="Rwanda">Rwanda</option>
                              <option value="Saint Helena">Saint Helena</option>
                              <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                              <option value="Saint Lucia">Saint Lucia</option>
                              <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                              <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                              <option value="Samoa">Samoa</option>
                              <option value="San Marino">San Marino</option>
                              <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                              <option value="Saudi Arabia">Saudi Arabia</option>
                              <option value="Senegal">Senegal</option>
                              <option value="Serbia">Serbia</option>
                              <option value="Seychelles">Seychelles</option>
                              <option value="Sierra Leone">Sierra Leone</option>
                              <option value="Singapore">Singapore</option>
                              <option value="Slovakia">Slovakia</option>
                              <option value="Slovenia">Slovenia</option>
                              <option value="Solomon Islands">Solomon Islands</option>
                              <option value="Somalia">Somalia</option>
                              <option value="South Africa">South Africa</option>
                              <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                              <option value="Spain">Spain</option>
                              <option value="Sri Lanka">Sri Lanka</option>
                              <option value="Sudan">Sudan</option>
                              <option value="Suriname">Suriname</option>
                              <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                              <option value="Swaziland">Swaziland</option>
                              <option value="Sweden">Sweden</option>
                              <option value="Switzerland">Switzerland</option>
                              <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                              <option value="Taiwan">Taiwan</option>
                              <option value="Tajikistan">Tajikistan</option>
                              <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                              <option value="Thailand">Thailand</option>
                              <option value="Timor-leste">Timor-leste</option>
                              <option value="Togo">Togo</option>
                              <option value="Tokelau">Tokelau</option>
                              <option value="Tonga">Tonga</option>
                              <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                              <option value="Tunisia">Tunisia</option>
                              <option value="Turkey">Turkey</option>
                              <option value="Turkmenistan">Turkmenistan</option>
                              <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                              <option value="Tuvalu">Tuvalu</option>
                              <option value="Uganda">Uganda</option>
                              <option value="Ukraine">Ukraine</option>
                              <option value="United Arab Emirates">United Arab Emirates</option>
                              <option value="United Kingdom">United Kingdom</option>
                              <option value="United States">United States</option>
                              <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                              <option value="Uruguay">Uruguay</option>
                              <option value="Uzbekistan">Uzbekistan</option>
                              <option value="Vanuatu">Vanuatu</option>
                              <option value="Venezuela">Venezuela</option>
                              <option value="Viet Nam">Viet Nam</option>
                              <option value="Virgin Islands, British">Virgin Islands, British</option>
                              <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                              <option value="Wallis and Futuna">Wallis and Futuna</option>
                              <option value="Western Sahara">Western Sahara</option>
                              <option value="Yemen">Yemen</option>
                              <option value="Zambia">Zambia</option>
                              <option value="Zimbabwe">Zimbabwe</option>
                            </select>



                          </div>
                          <div className='form-group'>
                            <label>Telephone <span className='required'>*</span></label>

                            <input type="text" value={tel} onChange={(e) => setTel(e.target.value)} required placeholder='ex +250.....' className='form-control' />



                          </div>
                        </div>

                        <p>
                          <h4>What's the purpose of visit? <span className='required'>*</span></h4>

                        </p>
                        <br />
                        <hr></hr>
                        <br />
                        <p><input checked type="radio" name="purpose" value={"Personal reason"} onChange={(e) => setPurpose(e.target.value)} /> Personal reason</p>
                        <p><input type="radio" name="purpose" value={"I am attending an event"} onChange={(e) => setPurpose(e.target.value)} /> I am attending an event </p>
                        <p><input type="radio" name="purpose" value={"Personal reason but i have a promotion code"} onChange={(e) => setPurpose(e.target.value)} /> Personal reason but i have a promotion code </p>


                        <br></br>
                        <div className='form-names'>
                          <div className='form-group'>
                            <label>Select your event <span className='required'>*</span></label>

                            <select value={event} onChange={(e) => setEvent(e.target.value)} required className='form-control'>
                              <option>
                                Select Event
                              </option>
                              {events && events.map(item => (

                                <option value={item.id} key={item.id}>
                                  {item.name}
                                </option>
                              ))}


                            </select>

                          </div>
                          <div className='form-group'>
                            <label>Your promotion code <span>(optional)</span></label>
                            <input value={promo} onChange={(e) => setPromo(e.target.value)} type="text" placeholder='promo code.' className='form-control' />

                          </div>

                        </div>
                        <br />
                        <br />
                        <button style={{ cursor: "pointer" }} className='btn-c' >Continue</button>

                      </div>
                    </form>
                  </div>

                  <div id='third' className='form-first' style={{ display: "none" }}>

                    <div className='selectRoom hiden'>
                      <h3>Room</h3>
                      <div className='group-email'>

                        <div className='room'>
                          <label>Enter Number of Room <span className='required'>*</span></label>
                          <input type="number" min="1" value={rooms} onChange={(e) => setRoom(e.target.value)} placeholder='Enter Number of Room' required className='form-control' />



                        </div>
                        <div className='fromDate'>

                          <div className='form-group'>
                            <label>from <span className='required'>*</span></label>
                            <input type="date" value={fromDate} onChange={(e) => { setFromDate(e.target.value) }} onBlur={() => getDates()} required className='form-control' />

                          </div>
                          <div className='form-group'>
                            <label>to <span className='required'>*</span></label>
                            <input type="date" value={toDate} onChange={(e) => { setToDate(e.target.value) }} onBlur={() => getDates()} required className='form-control' />
                          </div>
                        </div>
                      </div>
                      <div className='includesRoom'>
                        <p className='amount'>Amount To Pay {roomMain?.room?.roomCost * rooms * dayNumber}$</p>
                      </div>
                      <div className='includesRoom'>
                        <div className='facility' id='facility'>
                          <h3>
                            Room Facilities
                          </h3>

                          <hr />
                          <div className='items'>
                            {roomMain.room && roomMain.room.facilities.map(item => (
                              <p>
                                <span><FontAwesomeIcon icon={faCheck} size="1x" color="green" /> </span>
                                {item}
                              </p>
                            ))}

                          </div>

                        </div>
                      </div>
                      <br />
                      <br />
                      <br />
                    </div>

                    <p><h4>How Do You Want To Pay.</h4></p>
                    <form onSubmit={handleSubmit}>
                      <div className='form'>

                        <div className='group-email'>

                          <div className='form-group'>
                            <label>Payment Option</label>
                            <select type="text" placeholder='Enter Your Country' className='form-control' onChange={(e) => setPaymentOption(e.target.value)} required>
                              <option selected disabled>Select Option</option>
                              <option>Visa Card</option>
                              <option>Master Card</option>
                              <option>Bank Transfer</option>

                            </select>
                          </div>
                        </div>
                        <br></br>
                        <button type='submit' className='btn-c' >{isSubmit ? "Loading..." : "Submit"} </button>
                      </div>
                    </form>

                  </div>
                </div>


              </div>





            </div>

          </div>



          <div className='col-lg-5 show'>
            <div className='selectRoom'>
              <h3>Room</h3>
              <div className='group-email'>

                <div className='room'>
                  <label>Enter Number of Room <span className='required'>*</span></label>
                  <input type="number" min="1" value={rooms} onChange={(e) => setRoom(e.target.value)} placeholder='Enter Number of Room' required className='form-control' />



                </div>
                <div className='fromDate'>

                  <div className='form-group'>
                    <label>from <span className='required'>*</span></label>
                    <input type="date" value={fromDate} onChange={(e) => { setFromDate(e.target.value) }} onBlur={() => getDates()} required className='form-control' />

                  </div>
                  <div className='form-group'>
                    <label>to <span className='required'>*</span></label>
                    <input type="date" value={toDate} onChange={(e) => { setToDate(e.target.value) }} onBlur={() => getDates()} required className='form-control' />
                  </div>
                </div>
              </div>
              <div className='includesRoom'>
                <p className='amount'>Amount To Pay {roomMain?.room?.roomCost * rooms * dayNumber}$</p>
              </div>
              <div className='includesRoom'>
                <div className='facility' id='facility'>
                  <h3>
                    Room Facilities
                  </h3>

                  <hr />
                  <div className='items'>
                    {roomMain.room && roomMain.room.facilities.map(item => (
                      <p>
                        <span><FontAwesomeIcon icon={faCheck} size="1x" color="green" /> </span>
                        {item}
                      </p>
                    ))}

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <Footer />
    </>
  );
}

export default CheckOut;