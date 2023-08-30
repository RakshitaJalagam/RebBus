import React from 'react'
import './Ryde.css'
function Ryde() {
  return (
    <div className='ryde'>
        <div className='refer'>
            <img src='https://2.bp.blogspot.com/-nlvNKSelc5Y/V0meMbrsPSI/AAAAAAAAM44/EJJ2lWIwl103fV4blZdJ7XGxA7WEnSIpgCKgB/s1600/referearn.JPG'></img>
        </div>
        {/* <hr/> */}
        <div className='signup'>
        <img src='https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg' alt=''></img>
        <h3 className='red'>SIGN IN / SIGN UP</h3>
        <input type='tel' className='text'></input><br/>
        <button className='otp'>GENENRATE OTP(One Time Password)</button><br/>
        <button className='sign'>Sign in as XYZ</button><br/>
        <p>By signingup I agree to the terms&conditions</p>
        </div>

    </div>
  )
}

export default Ryde