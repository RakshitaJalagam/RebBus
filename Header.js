import React from 'react'
import './Header.css'
function Header() {
  return (
    <div className='mainn'>
        <div className='right'>
            <img src='https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg' alt=''></img>
        </div>
        {/* <hr/> */}
        <div className='main1'>
        <div className='margin'>
            <img src='https://st.redbus.in/web/images/layout/rb_vertical.svg'alt=''></img>
            <p>Bus Tickets</p>
        </div>
        <div className='margin'>
            <img src='https://st.redbus.in/web/images/layout/ryde_vertical.svg'alt=""></img>
            <p>Cab Rental</p>
        </div>
        <div className='margin'>
            <img src='https://st.redbus.in/web/images/layout/rail_vertical.svg'alt=""></img>
            <p>Train Tickets</p>
        </div>
        </div>
        <div className='main2'>
            <p className='margin'>Help</p>
            <p className='margin'>On Account</p>
        </div>
    </div>
  )
}

export default Header