import React from 'react'
import '../App.css';
import logo from '../images/logo.png'
const PageHero = () => {
  return (
    <>
         <div className='grainy' >
          <img id="logo" src={logo} alt="Logo" />
        <h1 className='dancing-script textShadow'>Nerah's Passion </h1>
        </div>
    </>
  )
}

export default PageHero
