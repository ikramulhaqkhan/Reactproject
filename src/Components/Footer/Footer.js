import React from 'react'
import Logo from '../../assets/Images/logo.svg'
import './Footer.scss'
function Footer() {
  return (
    <div>
      <div className='container Footer mt-3 pt-4'>
        <div className='row'>
          <div className='col-12 col-lg-4 col-xl-4 col-md-3'>
          <img src={Logo} alt=''></img> 
          </div>
          <div className='col-12 col-lg-8 col-xl-8 col-md-9'>
            <div className=' row ms-auto me-auto Margin'>
              <div className='col-6 col-lg-3 col-xl-3 col-md-3 '>
                <h5>Social</h5>
                <ul>
                  <li>Medium</li>
                  <li>Telegram Community</li>
                  <li>Telegram Announcements</li>
                  <li>Twitter</li>
                  <li>Brand Kit</li>
                 
                </ul>
                
              </div>
              <div className='col-6 col-lg-3 col-xl-3 col-md-3'>
              <h5>Token</h5>
                <ul>
                  <li>CoinGecko</li>
                  <li>CoinMarketCap</li>
                  <li>KuCoin</li>
                  <li>Gate.io</li>
                  <li>CHRTR.io</li>
                  <li>Cryptorank</li>
                 
                </ul>
              </div>
              <div className='col-6 col-lg-3 col-xl-3 col-md-3'>
              <h5>Help</h5>
                <ul>
                  <li>Terms of Services</li>
                  
                 
                </ul>
              </div>
              <div className='col-6 col-lg-3 col-xl-3 col-md-3'>
              <h5>Smart Contracts</h5>
                <ul>
                  <li>Github</li>
                  <li>Smart Contracts Audit</li>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
