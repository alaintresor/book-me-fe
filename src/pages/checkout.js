import React from 'react';
import TopNavbar from '../components/Nav/TopNavbar';
function CheckOut() {
    return (
        <>
   
           <div>
            <div className='stepper'>
              <div className='step-one'>
                <div className='step-number'>
                    <p>1</p>
                </div>
                <p>Personal Information</p>
              </div>
              <div className='step-one'>
              <div className='step-number'>  <p>2</p></div>
              <p>Contacts Information</p>
         
              </div>
              <div className='step-one'>
              <div className='step-number'>  <p>3</p></div>
              <p>Final</p>

              </div>
            </div>
            <hr></hr>
            <div className='form-first'>
                <p><h3>Enter Details</h3></p>
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
                    <input type="text" placeholder='Enter Your Fisrt Name' className='form-control'/>
                    
                  

                   </div>
                   <div className='form-group'>
                    <label>Second Name</label>
                    <input type="text" placeholder='Enter Your Second Name' className='form-control'/>
                   </div>
                   </div>
                   <div className='group-email'>
     
                   <div className='form-group'>
                    <label>Title</label>
                    <input type="email" placeholder='Enter Your Email' className='form-control'/>
                    
                  
               
                    </div>
                   </div>
                   <br></br>
                   <button className='btn-c'>Continue</button>
                   </div>
                 </form>
            </div>
            <div className='form-first'>
                <p><h3>Enter Contact Information</h3></p>
                 <form>
                   <div className='form'>
                 
                   <div className='group-email'>
     
                   <div className='form-group'>
                    <label>Country</label>
                    <input type="text" placeholder='Enter Your Country' className='form-control'/>
                    
                  
               
                    </div>
                    <div className='form-group'>
                    <label>Telephone</label>
                    <input type="text" placeholder='ex +167.....' className='form-control'/>
                    
                  
               
                    </div>
                   </div>
                   <br></br>
                   <button className='btn-c'>Continue</button>
                   </div>
                 </form>
            </div>

            <div className='form-first'>
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
        </>
    );
}

export default CheckOut;
