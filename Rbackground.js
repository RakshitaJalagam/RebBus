import React from 'react'
import '../Project/Rbackground.css';
function Rbackground() {
  return (
    <div className='rback'>
        <div>
            <img src='https://www.redbus.in/bushire/static/webv2/home/logo-rb.svg'></img>
        </div>
        <div className='rback1'>
            <div className='margin1'>Bus Tickets</div>
            <div className='margin1'>ryde</div>
            <div className='margin1'>redRail</div>
        </div>
        <div className='manage'>
            <div>
                <select>
                    <option>Manage Booking</option>
                    <option>My Trips</option>
                    <option>Cancellation</option>
                </select>
            </div>
            <div className='col'>
                <select>
                <img src="https://www.redbus.in/bushire/static/mwebv2/header/ic-user-not-logged-in.svg"></img><option></option>
                    <option>Sign in/ Sign up</option>
                    <option>Offers</option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default Rbackground