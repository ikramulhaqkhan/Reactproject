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
     
      <Header/>
      <Index/>
      
      <Participatecards/>
      
      <Openprojectscards/>
      <Footer/>
      </div>
    
  )
}

export default Homepage
