import React from 'react'
import './Participatecards.scss'
import Frame16 from '../../assets/Images/Frame16.svg'
import Frame17 from '../../assets/Images/Frame17.svg'
import Frame18 from '../../assets/Images/Frame18.svg'
import Frame19 from '../../assets/Images/Frame19.svg'
function Participatecards() {
  return (
    <div>
        {/* Cards start */}
        <div className='container'>
        <div class=" row "></div>
        <div className='col-12 mb-5'><h1>How to Participate</h1></div>
        <div className='row gy-5'>
          <div class=" col-lg-3 col-xl-3 col-sm-6">
            <div class="card">
              <img src={Frame19} class="Images  me-auto ms-auto  " alt="..." />
              <div class="card-body">
                <h5 class="card-title">1. Card title</h5>
                <p class="card-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <h6>Start the KYC Process </h6>
              </div>
            </div>
          </div>
          <div class=" col-lg-3 col-xl-3 col-sm-6">
            <div class="card">
              <img src={Frame18} class="Images  me-auto ms-auto " alt="..." />
              <div class="card-body">
                <h5 class="card-title">2. Card title</h5>
                <p class="card-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <h6>Verify Wallet </h6>
              </div>
            </div>
          </div>
          <div class=" col-lg-3 col-xl-3 col-sm-6">
            <div class="card ">
              <img src={Frame17} class="Images me-auto ms-auto " alt="..." />
              <div class="card-body">
                <h5 class="card-title">3. Card title</h5>
                <p class="card-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <h6>Stake Token </h6>
              </div>
            </div>
          </div>
          <div class=" col-lg-3 col-xl-3 col-sm-6 ">
            <div class="card ">
              <img src={Frame16} class="Images  me-auto ms-auto " alt="..." />
              <div class="card-body">
                <h5 class="card-title">4. Card title</h5>
                <p class="card-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <h6>Register </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cards end */}
    </div>
  )
}

export default Participatecards
