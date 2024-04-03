import React from 'react'
import '../App.css';
import logo from '../images/logo.png'
import transfer from "../images/newclients.png"

const PageHero = () => {
  return (
    <>
         <div className='grainy' >
          <img className=''  id="logo" src={logo} alt="Logo" />
        <h1 className='dancing-script textShadow'>Nerah's Passion </h1>
        {/* <img
                className="grow"
                style={{
                  margin: "0 15 15 0",
                  float: 'right'
                }}
                width="100"
                src={transfer} alt="new clients" /> */}
        </div>
        {/* 
      <Nav className=" Navbar justify-content-right" 
        activeKey="/home" >
        <Nav.Item className='playfair-display'  >
          <Nav.Link href='https://www.styleseat.com/m/v/nerahferguson?fbclid=IwAR0J9PA3UKHeTK28pRnrL12SeGqtkMoILxaLMO-wzy3P-EsF9lgoiowhFkc_aem_AZxJkILJV-oKLYqKcEy8Abf7GAZOpyTRAorHdrcmZ1YYw1xqpUUTWtBTDJDrHYTUwbSrdP4Jn8sQ9R9wUsWORdyp' 
          target="_blank"
          className='playfair-display'
          style={{
            textAlign: "center",
            color: 'yellow'
          }}  >Book Now</Nav.Link>
        </Nav.Item>
      </Nav>     
       </div> */}
       
    </>
  )
}

export default PageHero
