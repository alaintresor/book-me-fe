import React from 'react';
import TopNavbar from '../components/Nav/TopNavbar';
import '../style/assets/css/bootstrap.min.css'
function CheckOut() {
    return (
        <>
            
            <section class="header header-bg-5"
                style={{background:"url(../gallery/hotels/1616404998.jpg)",backgroundPosition: "center",backgroundSize: "cover",backgroundRepeat: "no-repeat"}}>
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2">
                            <div class="header-content" style={{height: "35vh"}}>
                                <div class="header-content-inner">
                                    <h1 class="h3">
                                        MARRIOTT HOTEL KIGALI <small>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </small>
                                    </h1>
                                    <div class="ui breadcrumb">
                                        <div class="active section"> Booking Form</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="blog-details-inner">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-sm-8">
                            <div class="stepwizard">
                                <div class="stepwizard-row setup-panel">
                                    <div class="stepwizard-step">
                                        <a href="#step-1" type="button" class="btn btn-primary btn-circle">1</a>
                                        <p>Choose your rooms</p>
                                    </div>
                                    <div class="stepwizard-step">
                                        <a href="#step-2" type="button" class="btn btn-default btn-circle"
                                            disabled="disabled">2</a>
                                        <p>Enter your details</p>
                                    </div>
                                    <div class="stepwizard-step">
                                        <a href="#step-3" type="button" class="btn btn-default btn-circle"
                                            disabled="disabled">3</a>
                                        <p>Final details</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="row setup-content" id="step-1">
                                    <div class="col-md12">
                                        <div class="col-md-12">
                                            <div class="col-md-12">
                                                <h3> Enter your details</h3>
                                                <hr />
                                            </div>
                                            <div class="row col-md-12">
                                                <div class="form-group col-md-4">
                                                    <label class="control-label">Title <span
                                                        class="text-danger">*</span></label>
                                                    <select required="required" id="title" class="form-control col-md-12">
                                                        <option value="">[Select]</option>
                                                        <option value="Mr"> Mr. </option>
                                                        <option value="Ms"> Ms.</option>
                                                        <option value="Mrs"> Mrs. </option>
                                                    </select>
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label class="control-label">First Name <span
                                                        class="text-danger">*</span></label>
                                                    <input id="firstname" maxlength="100" type="text" required="required"
                                                        class="form-control col-md-12" placeholder="First Name" />
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label class="control-label">Last Name <span
                                                        class="text-danger">*</span></label>
                                                    <input id="lastname" maxlength="100" type="text" required="required"
                                                        class="form-control col-md-12" placeholder="Last Name" />
                                                </div>
                                            </div>
                                            <div class="row col-md-12">
                                                <div class="form-group col-md-6">
                                                    <label class="control-label">Email <span
                                                        class="text-danger">*</span></label>
                                                    <input type="email" onfocusout="compareemails()" id="email"
                                                        required="required" class="form-control col-md-12"
                                                        placeholder="Email" />
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <p style={{marginTop: "29px",color: "green"}}><em> Confirmation email sent
                                                        to this address </em></p>
                                                </div>
                                            </div>
                                            <div class="row col-md-12">
                                                <div class="form-group col-md-6">
                                                    <label class="control-label">Confirm Email <span
                                                        class="text-danger">*</span></label>
                                                    <input type="email" id="confirmemail" required="required"
                                                        onfocusout="compareemails()" class="form-control col-md-12"
                                                        placeholder="Email" />
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <p id="erromemailmsg" style={{marginTop: "16px",color: "red",display:"none"}}>
                                                        <em> Please make
                                                            sure the "Email address" and "Confirm email address" fields
                                                            match </em>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="row col-md-12">
                                                <div class="form-group col-md-12">
                                                    <label class="control-label">Who are your booking for? </label>
                                                </div>
                                                <div class="form-group col-md-12">
                                                    <label class="control-label col-md-12" for="mainguest">
                                                        <input id="mainguest" onclick="managedisp('hide')" type="radio"
                                                            checked name="bookingfor" />
                                                        I'm the main guest
                                                    </label>
                                                    <label class="control-label col-md-12" for="someoneelse">
                                                        <input id="someoneelse" onclick="managedisp('show')" type="radio"
                                                            name="bookingfor" />
                                                        I'm booking for someone else
                                                    </label>
                                                </div>
                                            </div>
                                            <div id="fieldtobookfor" class="row col-md-12" style={{display:"none"}}>
                                                <div class="form-group col-md-6">
                                                    <label class="control-label">Full Name <span
                                                        class="text-danger">*</span></label>
                                                    <input type="text" id="othername" class="form-control col-md-12"
                                                        placeholder="Full Name" />
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label class="control-label">Email <span
                                                        class="text-danger">*</span></label>
                                                    <input type="email" id="otheremail" class="form-control col-md-12"
                                                        placeholder="Email" />
                                                </div>
                                            </div>
                                            <div class="form-group col-md-12">
                                                <div class="row form-group col-md-12">
                                                    <label class="control-label">Ask a question</label>
                                                    <br />
                                                    <small>
                                                        Type your requests in English here – we'll share them with the
                                                        property.<br />
                                                        Special requests cannot be guaranteed – but the property will do its
                                                        best to meet your needs.<br />
                                                        You can always make a special request after your booking is
                                                        complete! <br />
                                                    </small>
                                                    <br />
                                                    <textarea class="form-control col-md-12" id="askquestion"
                                                        placeholder="Type here ..."></textarea>
                                                </div>
                                            </div>
                                            <div class="row col-md-12" style={{marginBottom:"20px"}}>
                                                <div class="m-l-1 col-md-12">
                                                    <p class="row col-md-12">Let the property know when you plan to arrive
                                                        (optional)</p>
                                                    <p class="row col-md-12">You might hear back from the property about
                                                        your arrival time.</p>
                                                    <p class="row col-md-12">Check-in time: Your room will be ready for
                                                        check-in between 14:00 PM and
                                                        14:00</p>
                                                    <div style={{display: "inline-flex",width: "100%"}}>
                                                        <p style={{marginTop: "4px"}}>Arrival time: </p>
                                                        <div class="controls col-md-5 input-append date form_datetime"
                                                            data-date="1979-09-16T05:25:07Z"
                                                            data-date-format="dd MM yyyy - HH:ii p"
                                                            data-link-field="dtp_input1" style={{display: "inline-flex"}}>
                                                            <input size="16" type="text" id="datearr" required="required"
                                                                class="form-control" style={{fontSize:"12px !important"}} />
                                                            <div
                                                                style={{display: "inline-flex",padding: "5px 8px",height: "34px",background: "#ccc",marginLeft: "-5px"}}>
                                                                <span class="add-on"><i class="fa fa-close"></i></span>
                                                                &nbsp;|&nbsp;
                                                                <span class="add-on"><i class="fa fa-calendar"></i></span>
                                                            </div>
                                                        </div>
                                                        <p style={{marginTop: "4px"}}>- Time is for MARRIOTT HOTEL KIGALI time
                                                            zone</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <button class="btn btn-primary nextBtn btn-lg" type="button">Next</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row setup-content" id="step-2">
                                    <div class="col-md12">
                                        <div class="col-md-12">
                                            <div class="col-md-12">
                                                <h3> Enter your Info</h3>
                                                <hr />
                                            </div>
                                            <div class="row col-md-12">
                                                <div class="form-group col-md-6">
                                                    <label class="control-label">Country <span
                                                        class="text-danger">*</span></label>
                                                    <select required="required" id="countrylist"
                                                        class="form-control col-md-12">
                                                        <option value="">[Select]</option>
                                                        <option value="Afghanistan">Afghanistan</option>
                                                        <option value="Åland Islands">Aland Islands</option>
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
                                                        <option value="Bosnia and Herzegovina">Bosnia and Herzegovina
                                                        </option>
                                                        <option value="Botswana">Botswana</option>
                                                        <option value="Bouvet Island">Bouvet Island</option>
                                                        <option value="Brazil">Brazil</option>
                                                        <option value="British Indian Ocean Territory">British Indian Ocean
                                                            Territory</option>
                                                        <option value="Brunei Darussalam">Brunei Darussalam</option>
                                                        <option value="Bulgaria">Bulgaria</option>
                                                        <option value="Burkina Faso">Burkina Faso</option>
                                                        <option value="Burundi">Burundi</option>
                                                        <option value="Cambodia">Cambodia</option>
                                                        <option value="Cameroon">Cameroon</option>
                                                        <option value="Canada">Canada</option>
                                                        <option value="Cape Verde">Cape Verde</option>
                                                        <option value="Cayman Islands">Cayman Islands</option>
                                                        <option value="Central African Republic">Central African Republic
                                                        </option>
                                                        <option value="Chad">Chad</option>
                                                        <option value="Chile">Chile</option>
                                                        <option value="China">China</option>
                                                        <option value="Christmas Island">Christmas Island</option>
                                                        <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands
                                                        </option>
                                                        <option value="Colombia">Colombia</option>
                                                        <option value="Comoros">Comoros</option>
                                                        <option value="Congo">Congo</option>
                                                        <option value="Congo, The Democratic Republic of The">Congo, The
                                                            Democratic Republic of The</option>
                                                        <option value="Cook Islands">Cook Islands</option>
                                                        <option value="Costa Rica">Costa Rica</option>
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
                                                        <option value="Falkland Islands (Malvinas)">Falkland Islands
                                                            (Malvinas)</option>
                                                        <option value="Faroe Islands">Faroe Islands</option>
                                                        <option value="Fiji">Fiji</option>
                                                        <option value="Finland">Finland</option>
                                                        <option value="France">France</option>
                                                        <option value="French Guiana">French Guiana</option>
                                                        <option value="French Polynesia">French Polynesia</option>
                                                        <option value="French Southern Territories">French Southern
                                                            Territories</option>
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
                                                        <option value="Heard Island and Mcdonald Islands">Heard Island and
                                                            Mcdonald Islands</option>
                                                        <option value="Holy See (Vatican City State)">Holy See (Vatican City
                                                            State)</option>
                                                        <option value="Honduras">Honduras</option>
                                                        <option value="Hong Kong">Hong Kong</option>
                                                        <option value="Hungary">Hungary</option>
                                                        <option value="Iceland">Iceland</option>
                                                        <option value="India">India</option>
                                                        <option value="Indonesia">Indonesia</option>
                                                        <option value="Iran, Islamic Republic of">Iran, Islamic Republic of
                                                        </option>
                                                        <option value="Iraq">Iraq</option>
                                                        <option value="Ireland">Ireland</option>
                                                        <option value="Isle of Man">Isle of Man</option>
                                                        <option value="Israel">Israel</option>
                                                        <option value="Italy">Italy</option>
                                                        <option value="Ivory Coast">Ivory Coast</option>
                                                        <option value="Jamaica">Jamaica</option>
                                                        <option value="Japan">Japan</option>
                                                        <option value="Jersey">Jersey</option>
                                                        <option value="Jordan">Jordan</option>
                                                        <option value="Kazakhstan">Kazakhstan</option>
                                                        <option value="Kenya">Kenya</option>
                                                        <option value="Kiribati">Kiribati</option>
                                                        <option value="Korea, Democratic People's Republic of">Korea,
                                                            Democratic People's Republic of</option>
                                                        <option value="Korea, Republic of">Korea, Republic of</option>
                                                        <option value="Kuwait">Kuwait</option>
                                                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                        <option value="Lao People's Democratic Republic">Lao People's
                                                            Democratic Republic</option>
                                                        <option value="Latvia">Latvia</option>
                                                        <option value="Lebanon">Lebanon</option>
                                                        <option value="Lesotho">Lesotho</option>
                                                        <option value="Liberia">Liberia</option>
                                                        <option value="Libya">Libya</option>
                                                        <option value="Liechtenstein">Liechtenstein</option>
                                                        <option value="Lithuania">Lithuania</option>
                                                        <option value="Luxembourg">Luxembourg</option>
                                                        <option value="Macao">Macao</option>
                                                        <option value="Macedonia, The Former Yugoslav Republic of">
                                                            Macedonia, The Former Yugoslav Republic of</option>
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
                                                        <option value="Micronesia, Federated States of">Micronesia,
                                                            Federated States of</option>
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
                                                        <option value="Northern Mariana Islands">Northern Mariana Islands
                                                        </option>
                                                        <option value="Norway">Norway</option>
                                                        <option value="Oman">Oman</option>
                                                        <option value="Pakistan">Pakistan</option>
                                                        <option value="Palau">Palau</option>
                                                        <option value="Palestinian Territory, Occupied">Palestinian
                                                            Territory, Occupied</option>
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
                                                        <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon
                                                        </option>
                                                        <option value="Saint Vincent and The Grenadines">Saint Vincent and
                                                            The Grenadines</option>
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
                                                        <option value="South Georgia and The South Sandwich Islands">South
                                                            Georgia and The South Sandwich Islands</option>
                                                        <option value="Spain">Spain</option>
                                                        <option value="Sri Lanka">Sri Lanka</option>
                                                        <option value="Sudan">Sudan</option>
                                                        <option value="South Sudan">South Sudan</option>
                                                        <option value="Suriname">Suriname</option>
                                                        <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen
                                                        </option>
                                                        <option value="Swaziland">Swaziland</option>
                                                        <option value="Sweden">Sweden</option>
                                                        <option value="Switzerland">Switzerland</option>
                                                        <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                                                        <option value="Taiwan, Province of China">Taiwan, Province of China
                                                        </option>
                                                        <option value="Tajikistan">Tajikistan</option>
                                                        <option value="Tanzania, United Republic of">Tanzania, United
                                                            Republic of</option>
                                                        <option value="Thailand">Thailand</option>
                                                        <option value="Timor-leste">Timor-leste</option>
                                                        <option value="Togo">Togo</option>
                                                        <option value="Tokelau">Tokelau</option>
                                                        <option value="Tonga">Tonga</option>
                                                        <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                                        <option value="Tunisia">Tunisia</option>
                                                        <option value="Turkey">Turkey</option>
                                                        <option value="Turkmenistan">Turkmenistan</option>
                                                        <option value="Turks and Caicos Islands">Turks and Caicos Islands
                                                        </option>
                                                        <option value="Tuvalu">Tuvalu</option>
                                                        <option value="Uganda">Uganda</option>
                                                        <option value="Ukraine">Ukraine</option>
                                                        <option value="United Arab Emirates">United Arab Emirates</option>
                                                        <option value="United Kingdom">United Kingdom</option>
                                                        <option value="United States">United States</option>
                                                        <option value="United States Minor Outlying Islands">United States
                                                            Minor Outlying Islands</option>
                                                        <option value="Uruguay">Uruguay</option>
                                                        <option value="Uzbekistan">Uzbekistan</option>
                                                        <option value="Vanuatu">Vanuatu</option>
                                                        <option value="Venezuela">Venezuela</option>
                                                        <option value="Viet Nam">Viet Nam</option>
                                                        <option value="Virgin Islands, British">Virgin Islands, British
                                                        </option>
                                                        <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                                                        <option value="Wallis and Futuna">Wallis and Futuna</option>
                                                        <option value="Western Sahara">Western Sahara</option>
                                                        <option value="Yemen">Yemen</option>
                                                        <option value="Zambia">Zambia</option>
                                                        <option value="Zimbabwe">Zimbabwe</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="row col-md-12">
                                                <div class="form-group col-md-6">
                                                    <label class="control-label">Phone Number <span
                                                        class="text-danger">*</span></label>
                                                    <input type="text" maxlength="13" id="phone" required="required"
                                                        class="form-control col-md-12" />
                                                </div>
                                            </div>
                                            <div class="row col-md-12">
                                                <div class="form-group col-md-12">
                                                    <h3>What's the purpose of your visit ? </h3>
                                                    <hr />
                                                </div>
                                                <div class="form-group col-md-12">
                                                    <label for="personal" class="control-label col-md-12">
                                                        <input id="personal" onclick="managepromdiv('personal')"
                                                            type="radio" checked name="promotioncode" />
                                                        Personal reason
                                                    </label>
                                                    <label for="attendevent" class="control-label col-md-12">
                                                        <input id="attendevent" onclick="managepromdiv('attendevent')"
                                                            type="radio" name="promotioncode" />
                                                        I am attending an event
                                                    </label>
                                                    <label for="personalwithcode" class="control-label col-md-12">
                                                        <input id="personalwithcode"
                                                            onclick="managepromdiv('personalwithcode')" type="radio"
                                                            name="promotioncode" />
                                                        Personal reason but i have a promotion code
                                                    </label>
                                                </div>
                                            </div>
                                            <div id="promotiondiv" class="row col-md-12" style={{display:"none"}}>
                                                <p class="col-md-12 text-warning">
                                                    <i class="fa fa-warning"></i> You can use your promotion code or
                                                    reduction code here if you have any.
                                                </p>
                                                <p class="col-md-12 text-warning" id="onlyfactorydata">
                                                    <i class="fa fa-warning"></i> For people attending an event hosted by
                                                    Treasures Company Ltd (The Events Factory) your promotion code will be
                                                    found in the confirmation mail of your registration.
                                                </p>
                                                <div id="eventdiv" class="form-group col-md-6">
                                                    <label class="control-label">Select your event <span
                                                        class="text-danger">*</span></label>
                                                    <select id="event" class="form-control col-md-12">
                                                        <option value="">Select Event</option>
                                                        <option value="6257c97ccd776">Women Deliver 2023 Conference: Where
                                                            the world comes together to advance gender equality</option>
                                                        <option value="62c6b4408c751">IBMA 2023</option>
                                                        <option value="62fe25451d738">3rd World Coffee Producers Forum
                                                        </option>
                                                        <option value="630c9416dfd31">Women Deliver 2023 Unicef</option>
                                                        <option value="632967e46eb38">Women Deliver 2023 Staff</option>
                                                        <option value="6332bc2ee22f2">19th AFRICAN FINE COFFEES CONFERENCE
                                                            &amp; EXHIBITION</option>
                                                        <option value="633d6051ba4dc">10th African Society of Forensic
                                                        </option>
                                                        <option value="638f3aa5c60c4">AHAIC 2023</option>
                                                    </select>
                                                </div>
                                                <div id="promocodediv" class="form-group col-md-4">
                                                    <label class="control-label">Your promotion code </label>
                                                    <input id="promocode" maxlength="100" type="text"
                                                        class="form-control col-md-12" value="1673863009"
                                                        placeholder="registration code" />
                                                </div>
                                            </div>
                                            <div class="col-md-6 text-center">
                                                <button class="btn btn-primary nextBtn btn-lg" type="button">Next</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row setup-content" id="step-3">
                                    <div class="col-md-12">
                                        <h3> How do you want to pay the amount of <span class="text-success">18000 USD
                                            ($)</span>?</h3>
                                        <hr />
                                    </div>
                                    <div class="row col-md-12" style={{marginBottom:"20px"}}>
                                        <div class="form-group col-md-6">
                                            <label class="control-label">Card Type <span
                                                class="text-danger">*</span></label>
                                            <select required="required" id="payementmethod" class="form-control col-md-12">
                                                <option value="">[Select]</option>
                                                <option value="MasterCard">MasterCard</option>
                                                <option value="Visa Card">Visa Card</option>
                                                <option value="Bank Transfer">Bank Transfer</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div id="paymentbox" class="row col-md-12">
                                        <div class="container-card col-md-6 preload">
                                            <div class="creditcard">
                                                <div class="front">
                                                    <div id="ccsingle"></div>
                                                    {/* <svg version="1.1" id="cardfront" xmlns="http://www.w3.org/2000/svg"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                        viewBox="0 0 750 471" style="enable-background:new 0 0 750 471;"
                                                        xml:space="preserve">
                                                        <g id="Front">
                                                            <g id="CardBackground">
                                                                <g id="Page-1_1_">
                                                                    <g id="amex_1_">
                                                                        <path id="Rectangle-1_1_" class="lightcolor grey" d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40
                                                            C0,17.9,17.9,0,40,0z" />
                                                                    </g>
                                                                </g>
                                                                <path class="darkcolor greydark"
                                                                    d="M750,431V193.2c-217.6-57.5-556.4-13.5-750,24.9V431c0,22.1,17.9,40,40,40h670C732.1,471,750,453.1,750,431z" />
                                                            </g>
                                                            <text transform="matrix(1 0 0 1 60.106 295.0121)" id="svgnumber"
                                                                class="st2 st3 st4">0123 4567 8910 1112</text>
                                                            <text transform="matrix(1 0 0 1 54.1064 428.1723)" id="svgname"
                                                                class="st2 st5 st6">Aime Malaika
                                                            </text>
                                                            <text transform="matrix(1 0 0 1 54.1074 389.8793)"
                                                                class="st7 st5 st8">cardholder name</text>
                                                            <text transform="matrix(1 0 0 1 479.7754 388.8793)"
                                                                class="st7 st5 st8">expiration</text>
                                                            <text transform="matrix(1 0 0 1 65.1054 241.5)"
                                                                class="st7 st5 st8">card number</text>
                                                            <g>
                                                                <text transform="matrix(1 0 0 1 574.4219 433.8095)"
                                                                    id="svgexpire" class="st2 st5 st9">01/23</text>
                                                                <text transform="matrix(1 0 0 1 479.3848 417.0097)"
                                                                    class="st2 st10 st11">VALID</text>
                                                                <text transform="matrix(1 0 0 1 479.3848 435.6762)"
                                                                    class="st2 st10 st11">THRU</text>
                                                                <polygon class="st2"
                                                                    points="554.5,421 540.4,414.2 540.4,427.9 		" />
                                                            </g>
                                                            <g id="cchip">
                                                                <g>
                                                                    <path class="st2"
                                                                        d="M168.1,143.6H82.9c-10.2,0-18.5-8.3-18.5-18.5V74.9c0-10.2,8.3-18.5,18.5-18.5h85.3
                                                        c10.2,0,18.5,8.3,18.5,18.5v50.2C186.6,135.3,178.3,143.6,168.1,143.6z" />
                                                                </g>
                                                                <g>
                                                                    <g>
                                                                        <rect x="82" y="70" class="st12" width="1.5"
                                                                            height="60" />
                                                                    </g>
                                                                    <g>
                                                                        <rect x="167.4" y="70" class="st12" width="1.5"
                                                                            height="60" />
                                                                    </g>
                                                                    <g>
                                                                        <path class="st12"
                                                                            d="M125.5,130.8c-10.2,0-18.5-8.3-18.5-18.5c0-4.6,1.7-8.9,4.7-12.3c-3-3.4-4.7-7.7-4.7-12.3
                                                            c0-10.2,8.3-18.5,18.5-18.5s18.5,8.3,18.5,18.5c0,4.6-1.7,8.9-4.7,12.3c3,3.4,4.7,7.7,4.7,12.3
                                                            C143.9,122.5,135.7,130.8,125.5,130.8z M125.5,70.8c-9.3,0-16.9,7.6-16.9,16.9c0,4.4,1.7,8.6,4.8,11.8l0.5,0.5l-0.5,0.5
                                                            c-3.1,3.2-4.8,7.4-4.8,11.8c0,9.3,7.6,16.9,16.9,16.9s16.9-7.6,16.9-16.9c0-4.4-1.7-8.6-4.8-11.8l-0.5-0.5l0.5-0.5
                                                            c3.1-3.2,4.8-7.4,4.8-11.8C142.4,78.4,134.8,70.8,125.5,70.8z" />
                                                                    </g>
                                                                    <g>
                                                                        <rect x="82.8" y="82.1" class="st12" width="25.8"
                                                                            height="1.5" />
                                                                    </g>
                                                                    <g>
                                                                        <rect x="82.8" y="117.9" class="st12" width="26.1"
                                                                            height="1.5" />
                                                                    </g>
                                                                    <g>
                                                                        <rect x="142.4" y="82.1" class="st12" width="25.8"
                                                                            height="1.5" />
                                                                    </g>
                                                                    <g>
                                                                        <rect x="142" y="117.9" class="st12" width="26.2"
                                                                            height="1.5" />
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <g id="Back">
                                                        </g>
                                                    </svg> */}
                                                </div>
                                                <div class="back">
                                                    {/* <svg version="1.1" id="cardback" xmlns="http://www.w3.org/2000/svg"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                        viewBox="0 0 750 471" style="enable-background:new 0 0 750 471;"
                                                        xml:space="preserve">
                                                        <g id="Front">
                                                            <line class="st0" x1="35.3" y1="10.4" x2="36.7" y2="11" />
                                                        </g>
                                                        <g id="Back">
                                                            <g id="Page-1_2_">
                                                                <g id="amex_2_">
                                                                    <path id="Rectangle-1_2_" class="darkcolor greydark" d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40
                                                        C0,17.9,17.9,0,40,0z" />
                                                                </g>
                                                            </g>
                                                            <rect y="61.6" class="st2" width="750" height="78" />
                                                            <g>
                                                                <path class="st3" d="M701.1,249.1H48.9c-3.3,0-6-2.7-6-6v-52.5c0-3.3,2.7-6,6-6h652.1c3.3,0,6,2.7,6,6v52.5
                                                    C707.1,246.4,704.4,249.1,701.1,249.1z" />
                                                                <rect x="42.9" y="198.6" class="st4" width="664.1"
                                                                    height="10.5" />
                                                                <rect x="42.9" y="224.5" class="st4" width="664.1"
                                                                    height="10.5" />
                                                                <path class="st5"
                                                                    d="M701.1,184.6H618h-8h-10v64.5h10h8h83.1c3.3,0,6-2.7,6-6v-52.5C707.1,187.3,704.4,184.6,701.1,184.6z" />
                                                            </g>
                                                            <text transform="matrix(1 0 0 1 621.999 227.2734)"
                                                                id="svgsecurity" class="st6 st7">985</text>
                                                            <g class="st8">
                                                                <text transform="matrix(1 0 0 1 518.083 280.0879)"
                                                                    class="st9 st6 st10">security code</text>
                                                            </g>
                                                            <rect x="58.1" y="378.6" class="st11" width="375.5"
                                                                height="13.5" />
                                                            <rect x="58.1" y="405.6" class="st11" width="421.7"
                                                                height="13.5" />
                                                            <text transform="matrix(1 0 0 1 59.5073 228.6099)"
                                                                id="svgnameback" class="st12 st13">Aime Malaika
                                                            </text>
                                                        </g>
                                                    </svg> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-container-card col-md-6">
                                            <div class="field-container-card">
                                                <label for="name">Name</label>
                                                <input id="name" maxlength="20" type="text" />
                                            </div>
                                            <div class="field-container-card">
                                                <input id="cardnumber" type="text" pattern="[0-9\s]*" inputmode="numeric" />
                                                {/* <svg id="ccicon" class="ccicon" width="750" height="471"
                                                    viewBox="0 0 750 471" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink">

                                                </svg> */}
                                            </div>
                                            <div class="field-container-card">
                                                <label for="expirationdate">Expiration (mm/yy)</label>
                                                <input id="expirationdate" type="text" pattern="[0-9\/]*"
                                                    inputmode="numeric" />
                                            </div>
                                            <div class="field-container-card">
                                                <label for="securitycode">Security Code</label>
                                                <input id="securitycode" type="text" pattern="[0-9]*" inputmode="numeric" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="row col-md-12" style={{marginBottom:"20px"}}>
                                            <p>
                                                <label class="control-label col-md-12">
                                                    <input id="agrements" required="required" type="checkbox" /> Your
                                                    booking is directly with
                                                    <b>MARRIOTT HOTEL KIGALI</b> and by completing this booking you agree
                                                    to
                                                    the booking conditions, <a href="../Conditions/" target="_blank"
                                                        rel="noopener noreferrer">general terms</a>,
                                                    and <a href="../Privacy/" target="_blank"
                                                        rel="noopener noreferrer">privacy policy</a>.
                                                </label>
                                                <input type="hidden" value="60585b6fed83e" id="hotelid" />
                                                <input type="hidden" value="60585ec15fed8" id="roomid" />
                                            </p>
                                            <input type="hidden" value="1673906400" id="bookfrom" />
                                            <input type="hidden" value="1674770400" id="bookto" />
                                            <input type="hidden" value="1" id="adult" />
                                            <input type="hidden" value="0" id="child" />
                                            <input type="hidden" value="2" id="numberofroom" />
                                            <input type="hidden" value="56249cd5ba2b6f9e235df742c12b3fb21de001ad"
                                                id="token" />
                                        </div>
                                        <div class="col-md-12 text-center">
                                            <button onclick="submitbookingrequest()" class="btn btn-success btn-lg"
                                                type="submit">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-4">
                            <div class="sidber-box cats-widget">
                                <div class="cats-title">
                                    Your booking details
                                </div>
                                <ul>
                                    <li>Check in : <b>17 January 2023</b></li>
                                    <li>Check out : <b>27 January 2023</b></li>
                                    <li>Total length of stay: <b>10 Nigth(s)</b></li>
                                    <li>Number of room: <b>2 </b></li>
                                    <li>Amount to pay: <b>18000 USD ($)</b><br /> <small>(900 USD ($) / night)</small></li>
                                </ul>
                            </div>
                            <div class="sidber-box cats-widget">
                                <div class="cats-title">
                                    Your booking includes
                                </div>
                                <ul>
                                    <li>Sound proof</li>
                                    <li>Bathtub</li>
                                    <li>Sofa bed</li>
                                    <li>Air Conditioning</li>
                                    <li>Wardrobe or closet</li>
                                    <li>Carpeted</li>
                                    <li>Walk-in closet</li>
                                    <li>Private Bathroom</li>
                                    <li>Sitting area</li>
                                    <li>Suit press</li>
                                    <li>Hardwood or parquet floors</li>
                                    <li>Desk</li>
                                    <li>Cleaning products</li>
                                    <li>Mosquito net</li>
                                    <li>Safe</li>
                                    <li>Bathrobe</li>
                                    <li>Hairdryer</li>
                                    <li>Shared Bathroom</li>
                                    <li>Shower</li>
                                    <li>Slippers</li>
                                    <li>Bidet</li>
                                    <li>Bathrobe</li>
                                    <li>Shared bathroom</li>
                                    <li>Flat-screen TV</li>
                                    <li>Satellite channels</li>
                                    <li>Electric kettle</li>
                                    <li>Dining area</li>
                                    <li>Dining table</li>
                                    <li>Linens</li>
                                    <li>Room service</li>
                                    <li>Room is completely wheelchair accessible</li>
                                    <li>Upper floors accessible by elevator</li>
                                    <li>Room sise : 72 square meters</li>
                                    <li>1 King bed(s) 181-210 cm wide for 1 People(s)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CheckOut;
