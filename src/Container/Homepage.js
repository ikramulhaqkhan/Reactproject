import React from 'react'
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
import Index from '../Components/Index/Index'

import Participatecards from '../Components/Participate/Participatecards'
import Openprojectscards from '../Components/Openprojects/Openprojectscards'
import './Homepage.scss'




function Homepage() {
  return (
    <div >
      <div className=''>
      <Header/>
      <Index/>
      
      <Participatecards/>
      </div>
      <Openprojectscards/>
      <Footer/>
      </div>
    
  )
}

export default Homepage
