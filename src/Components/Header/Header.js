import React from 'react'
import './Header.scss'
import Logo from '../../assets/Images/logo.svg'
import { FaCheck } from "react-icons/fa";
function Header() {
  return (
    <div>
      <nav class="container navbar navbar-expand-lg navbar-light bg-Transparent ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src={Logo} alt=''></img></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button> 
          <div class="collapse navbar-collapse mid" id="navbarNav">
            <ul class="navbar-nav ">
              <li class="nav-item">
                <a class="nav-link text_color " aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active " href="#">Projects</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link text_color" href="#">Staking</a>
              </li>
              <li class="nav-item Kyc">
                <a class="nav-link " aria-current="page" href="#"><FaCheck/>KYC</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link  active Connect" href="#">Connect Wallet</a>
              </li>
            </ul>
            
          </div>


        </div>
      </nav>
    </div>
  )
}

export default Header
