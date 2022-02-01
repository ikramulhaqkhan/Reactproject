import React from 'react'
import './OPenprojectscards.scss'

import Im from '../../assets/Images/image 6.svg'
import Ima from '../../assets/Images/Frame 57.svg'
import { FaDonate } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import Key from '../../assets/Images/key.svg'
import { FaCheck } from "react-icons/fa";
import Rectangle from '../../assets/Images/Rectangle 24.svg'
import Frame70 from '../../assets/Images/Frame 70.svg'

function Openprojectscards() {
  return (
    <div>
       {/* Open Project start */}
       <div className='container mt-4 '>
        <div className='row'>
          <div className='col-12'><h1>Projects Open Now</h1></div></div>
        <div className='row '>
          <div className='col-12 col-lg-6 col-xl-6 gx-5 '>
            <div className='row me-0 ms-0 Project mt-5 pt-4 '>
              <div className='col-2 LogoImage'><img src={Im} className='avatar' alt='' /></div>
              <div className='col-8 col-lg-6 col-xl-6 col-md-6'>
                <h5>Yay Games (YAY)</h5>
                <h6> 1 YAY = 12.23131 PSR</h6>
              </div>
              <div className='col-2 col-lg-4 col-md-4 col-xl-4 d-flex justify-content-end open'><button className='Height'>open</button></div>
              <div className='row'>
                <div className='col-10  Pool mt-3'><h6>Pool Progress</h6></div>
                <div className='col-2  mt-3'><h6>50%</h6></div>
              </div>

              <div className=''>
                <div className='col-12'>
                  <div class="progress mb-2">
                    <div class="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <div className='row mb-4'>
                <div className='yay'>$500,000/$1,000,000</div>
              </div>
              <hr />
              <div className='d-flex Fauser'>
                <div className='col-4 d-flex Pert'>
                  <div className='icoin'><FaUserFriends /></div>
                  <div><h6>Perticipants</h6>
                    <h6 className='para'>20,250</h6></div>

                </div>
                <div className='col-4 d-flex Pert'>
                  <div className='icoin'><FaCalendarAlt /></div>
                  <div><h6>Start Date</h6>
                    <h6 className='para'>17-Dec-2021</h6></div>

                </div>
                <div className='col-4 d-flex Pert'>
                  <div className='icoin'><FaDonate /></div>
                  <div>  <h6>Token Price</h6>
                    <h6 className='para'>$0.30</h6></div>

                </div>
              </div>
              <div className=' d-flex  mt-2 pt-3   Pert2'>
                <div className='col-4 d-flex '>
                  <div className='Fauser '>
                    <div className='icoin'><FaKey /></div>
                  </div>
                  <div className='Access'>
                    <h6>Access</h6>
                    <h6 className='Number'>Private</h6>
                  </div>

                </div>
                <div className='col-4  d-flex'>
                  <div>
                    <div className='icoin'><FaKey /></div>
                  </div>
                  <div className='Access'>
                    <h6>Token Sold</h6>
                    <h6 className='Number'>1.5M</h6>
                  </div>

                </div>
                <div className='col-4 d-flex'>
                  <div>
                    <img src={Key} alt=''></img>
                  </div>
                  <div className='Access'>
                    <h6>Token Distribution</h6>
                    <h6 className='Number'>3M</h6>
                  </div>

                </div>

              </div>
            </div>

          </div>
          <div className='col-12 col-lg-6 col-xl-6 gx-5 '>
            <div className='row me-0 ms-0 Project mt-5 pt-4 '>
              <div className='col-2 LogoImage'><img src={Ima} className='avatar' /></div>
              <div className='col-8 col-lg-6 col-xl-6 col-md-6 Games'>
                <h5>Yay Games (YAY)</h5>
                <h6> 1 YAY = 12.23131 PSR</h6>
              </div>
              <div className='col-2 col-lg-4 col-xl-4 col-md-4 d-flex justify-content-end open'><button className='Height'>open</button></div>
              <div className='row'>
                <div className='col-10 Pool mt-3'><h6>Pool Progress</h6></div>
                <div className='col-2 mt-3'><h6>25%</h6></div>
              </div>
              <div className=''>
                <div className='col-12'>
                  <div class="progress mb-2">
                    <div class="progress-bar w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <div className='row mb-4'>
                <div className='yay'>$500,000/$1,000,000</div>
              </div>
              <hr />
              <div className='d-flex Fauser '>
                <div className='col-4 d-flex Pert  '>
                  <div className='icoin '><FaUserFriends /></div>
                  <div><h6>Perticipants</h6>
                    <h6 className='para'>20,250</h6></div>

                </div>
                <div className='col-4 d-flex Pert'>
                  <div className='icoin'><FaCalendarAlt /></div>
                  <div><h6>Start Date</h6>
                    <h6 className='para'>17-Dec-2021</h6></div>

                </div>
                <div className='col-4 d-flex Pert'>
                  <div className='icoin'><FaDonate /></div>
                  <div><h6>Perticipants</h6>
                    <h6 className='para'>$0.30</h6></div>

                </div>
              </div>
              <div className='d-flex Pert2 pt-3 mt-2 Fauser'>
                <div className='col-4 d-flex'>
                  <div className='icoin'>
                    <FaKey />
                  </div>
                  <div className='Access'>
                    <h6>Access</h6>
                    <h6 className='Number'>Private</h6>
                  </div>

                </div>
                <div className='col-4 d-flex'>
                  <div>
                    <img src={Key} alt=''></img>
                  </div>
                  <div className='Access'>
                    <h6>Token Sold</h6>
                    <h6 className='Number'>1.5M</h6>
                  </div>

                </div>
                <div className='col-4 d-flex'>
                  <div>
                    <img src={Key} alt=''></img>
                  </div>
                  <div className='Access'>
                    <h6>Token Distribution</h6>
                    <h6 className='Number'>3M</h6>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>


      </div>
      <br />
      {/* Open Project end */}
            {/* Projects Coming Soon start */}
            <div className='container mt-4 '>
        <div className='row'>
          <div className='col-12'><h1>Projects Coming Soon</h1></div></div>
        <div className='row '>
          <div className='col-12 col-lg-6 col-xl-6 gx-5 '>
            <div className='row me-0 ms-0 Project mt-5 pt-4'>
              <div className='col-2 LogoImage'><img src={Im} className='avatar' alt='' /></div>
              <div className='col-8 col-lg-6 col-xl-6 col-md-6'>
                <h5>Imperium (IME)</h5>
                <h6>  1 IME = 12.23131 PSR</h6>
              </div>
              <div className='col-6 col-lg-4 col-md-4 col-xl-4 d-flex justify-content-end open'><button className='Height1'>In Pregress</button></div>
              <div className='row'>
                <div className='col-10  Pool mt-3'><h6>Pool Progress</h6></div>
                <div className='col-2  mt-3'><h6>0%</h6></div>
              </div>

              <div className=''>
                <div className='col-12'>
                  <div class="progress mb-2">
                    <div class="progress-bar w-0" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <div className='row mb-4'>
                <div className='yay'>$500,000/$1,000,000</div>
              </div>
              <hr />
              <div className='d-flex Fauser'>
                <div className='col-4 d-flex Pert'>
                  <div className='icoin'><FaUserFriends /></div>
                  <div><h6>Perticipants</h6>
                    <h6 className='para'>20,250</h6></div>

                </div>
                <div className='col-5 d-flex Pert'>
                  <div className='icoin'><FaCalendarAlt /></div>
                  <div><h6>Start Date</h6>
                    <h6 className='para'>17-Dec-2021</h6></div>

                </div>
                <div className='col-3 d-flex Pert'>
                  <div className='icoin'><FaDonate /></div>
                  <div>  <h6>Token Price</h6>
                    <h6 className='para'>$0.30</h6></div>

                </div>
              </div>
              <div className=' d-flex  mt-2 pt-3   Pert2'>
                <div className='col-4 d-flex '>
                  <div className='Fauser '>
                    <div className='icoin'><FaKey /></div>
                  </div>
                  <div className='Access'>
                    <h6>Access</h6>
                    <h6 className='Number'>Private</h6>
                  </div>

                </div>
                <div className='col-4  d-flex'>
                  <div>
                    <div className='icoin'><FaKey /></div>
                  </div>
                  <div className='Access'>
                    <h6>Token Sold</h6>
                    <h6 className='Number'>1.5M</h6>
                  </div>

                </div>
                <div className='col-4 d-flex'>
                  <div>
                    <img src={Key} alt=''></img>
                  </div>
                  <div className='Access'>
                    <h6>Token Distribution</h6>
                    <h6 className='Number'>3M</h6>
                  </div>

                </div>

              </div>
            </div>

          </div>
          <div className='col-12 col-lg-6 col-xl-6 gx-5 '>
            <div className='row me-0 ms-0 Project mt-5 pt-4 '>
              <div className='col-2 LogoImage'><img src={Ima} className='avatar' /></div>
              <div className='col-8 col-lg-6 col-xl-6 col-md-6 Games'>
                <h5>Yay Games (YAY)</h5>
                <h6> 1 YAY = 12.23131 PSR</h6>
              </div>
              <div className='col-6 col-lg-4 col-xl-4 col-md-4 d-flex justify-content-end open'><button className='Height1'>In Pregress</button></div>
              <div className='row'>
                <div className='col-10 Pool mt-3'><h6>Pool Progress</h6></div>
                <div className='col-2 mt-3'><h6>0%</h6></div>
              </div>
              <div className=''>
                <div className='col-12'>
                  <div class="progress mb-2">
                    <div class="progress-bar w-0" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <div className='row mb-4'>
                <div className='yay'>$500,000/$1,000,000</div>
              </div>
              <hr />
              <div className='d-flex Fauser '>
                <div className='col-4 d-flex Pert  '>
                  <div className='icoin '><FaUserFriends /></div>
                  <div><h6>Perticipants</h6>
                    <h6 className='para'>20,250</h6></div>

                </div>
                <div className='col-4 d-flex Pert'>
                  <div className='icoin'><FaCalendarAlt /></div>
                  <div><h6>Start Date</h6>
                    <h6 className='para'>17-Dec-2021</h6></div>

                </div>
                <div className='col-4 d-flex Pert'>
                  <div className='icoin'><FaDonate /></div>
                  <div><h6>Perticipants</h6>
                    <h6 className='para'>$0.30</h6></div>

                </div>
              </div>
              <div className='d-flex Pert2 pt-3 mt-2 Fauser'>
                <div className='col-4 d-flex'>
                  <div className='icoin'>
                    <FaKey />
                  </div>
                  <div className='Access'>
                    <h6>Access</h6>
                    <h6 className='Number'>Private</h6>
                  </div>

                </div>
                <div className='col-4 d-flex'>
                  <div>
                    <img src={Key} alt=''></img>
                  </div>
                  <div className='Access'>
                    <h6>Token Sold</h6>
                    <h6 className='Number'>1.5M</h6>
                  </div>

                </div>
                <div className='col-4 d-flex'>
                  <div>
                    <img src={Key} alt=''></img>
                  </div>
                  <div className='Access'>
                    <h6>Token Distribution</h6>
                    <h6 className='Number'>3M</h6>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>


      </div>
      <br />
      {/* Projects Coming Soon end */}


 {/* Projects Closed start */}
 <div className='container mt-4 '>
        <div className='row'>
          <div className='col-12'><h1>Projects Closed</h1></div></div>
          <div className='row '>
            <div className='col-12 col-lg-6 col-xl-6 gx-5 '>
              <div className='row me-0 ms-0 Project mt-5 pt-4'>
                <div className='col-2 LogoImage'><img src={Im} className='avatar' alt='' /></div>
                <div className='col-8 col-lg-6 col-xl-6 col-md-6'>
                  <h5>Krypter (KPR)</h5>
                  <h6> 1 YAY = 12.23131 PSR</h6>
                </div>
                <div className='col-2 col-lg-4 col-md-4 col-xl-4 d-flex justify-content-end open'><button className='Height2'>Ended</button></div>
                 <div className='row'>
                  <div className='col-10  Pool mt-3'><h6>Pool Progress</h6></div>
                  <div className='col-2  mt-3'><h6>100%</h6></div>
                </div> 

                 <div className=''>
                  <div className='col-12'>
                    <div class="progress mb-2">
                      <div class="progress-bar w-100" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div> 
                <div className='row mb-4'>
                  <div className='yay'>$500,000/$1,000,000</div>
                </div> 
                <hr/>
                 <div className='d-flex Fauser'>
                  <div className='col-4 d-flex Pert'>
                  <div className='icoin'><FaUserFriends/></div>
                    <div><h6>Perticipants</h6>
                      <h6 className='para'>20,250</h6></div>

                  </div>
                  <div className='col-4 d-flex Pert'>
                  <div className='icoin'><FaCalendarAlt/></div>
                    <div><h6>Start Date</h6>
                      <h6  className='para'>17-Dec-2021</h6></div>

                  </div>
                  <div className='col-4 d-flex Pert'>
                  <div className='icoin'><FaDonate/></div>
                    <div>  <h6>Token Price</h6>
                      <h6  className='para'>$0.30</h6></div>

                  </div>
                </div> 
                <div className=' d-flex  mt-2 pt-3   Pert2'>
                  <div className='col-4 d-flex '>
                    <div className='Fauser '>
                    <div className='icoin'><FaKey/></div>
                    </div>
                    <div className='Access'>
                      <h6>Access</h6>
                      <h6 className='Number'>Private</h6>
                    </div>

                  </div>
                  <div className='col-4  d-flex'>
                    <div>
                    <div className='icoin'><FaKey/></div>
                    </div>
                    <div className='Access'>
                      <h6>Token Sold</h6>
                      <h6 className='Number'>1.5M</h6>
                    </div>

                  </div>
                  <div className='col-4 d-flex'>
                    <div>
                      <img src={Key} alt=''></img>
                    </div>
                    <div className='Access'>
                      <h6>Token Distribution</h6>
                      <h6 className='Number'>3M</h6>
                    </div>

                  </div>
                 
                </div> 
              </div>

            </div>
             <div className='col-12 col-lg-6 col-xl-6 gx-5 '>
              <div className='row me-0 ms-0 Project mt-5 pt-4 '>
                <div className='col-2 LogoImage'><img src={Ima} className='avatar' /></div>
                <div className='col-8 col-lg-6 col-xl-6 col-md-6 Games'>
                  <h5>Platypus (PTP)</h5>
                  <h6> 1 YAY = 12.23131 PSR</h6>
                </div>
                <div className='col-2 col-lg-4 col-xl-4 col-md-4 d-flex justify-content-end open'><button className='Height2'>Ended</button></div>
                <div className='row'>
                  <div className='col-10 Pool mt-3'><h6>Pool Progress</h6></div>
                  <div className='col-2 mt-3'><h6>100%</h6></div>
                </div>
                <div className=''>
                  <div className='col-12'>
                    <div class="progress mb-2">
                      <div class="progress-bar w-100" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
                <div className='row mb-4'>
                  <div className='yay'>$500,000/$1,000,000</div>
                </div>
                <hr/>
                <div className='d-flex Fauser '>
                  <div className='col-4 d-flex Pert  '>
                    <div className='icoin '><FaUserFriends/></div>
                    <div><h6>Perticipants</h6>
                    <h6  className='para'>20,250</h6></div>

                  </div>
                  <div className='col-4 d-flex Pert'>
                  <div className='icoin'><FaCalendarAlt/></div>
                    <div><h6>Start Date</h6>
                      <h6  className='para'>17-Dec-2021</h6></div>

                  </div>
                  <div className='col-4 d-flex Pert'>
                    <div  className='icoin'><FaDonate/></div>
                    <div><h6>Perticipants</h6>
                    <h6  className='para'>$0.30</h6></div>

                  </div>
                </div>
                <div className='d-flex Pert2 pt-3 mt-2 Fauser'>
                  <div className='col-4 d-flex'>
                    <div  className='icoin'>
                      <FaKey/>
                    </div>
                    <div className='Access'>
                      <h6>Access</h6>
                      <h6 className='Number'>Private</h6>
                    </div>    

                  </div>
                  <div className='col-4 d-flex'>
                    <div>
                      <img src={Key} alt=''></img>
                    </div>
                    <div className='Access'>
                    <h6>Token Sold</h6>
                      <h6 className='Number'>1.5M</h6>
                    </div>

                  </div>
                  <div className='col-4 d-flex'>
                    <div>
                      <img src={Key} alt=''></img>
                    </div>
                    <div className='Access'>
                    <h6>Token Distribution</h6>
                      <h6 className='Number'>3M</h6>
                    </div>

                  </div>
                
                </div>
              </div>
            </div> 
          </div>
         
        
      </div> 
      <br/>
      {/* Open Project end */}

       {/* Open Project start */}
       <div className='container mt-4 '>
       
          <div className='row '>
            <div className='col-12 col-lg-6 col-xl-6 gx-5 '>
              <div className='row me-0 ms-0 Project mt-5 pt-4'>
                <div className='col-2 LogoImage'><img src={Im} className='avatar' alt='' /></div>
                <div className='col-8 col-lg-6 col-xl-6 col-md-6'>
                  <h5>Colony (CLY)</h5>
                  <h6>  1 CLY = 12.23131 PSR</h6>
                </div>
                <div className='col-2 col-lg-4 col-md-4 col-xl-4 d-flex justify-content-end open'><button className='Height2'>Ended</button></div>
                 <div className='row'>
                  <div className='col-10  Pool mt-3'><h6>Pool Progress</h6></div>
                  <div className='col-2  mt-3'><h6>100%</h6></div>
                </div> 

                 <div className=''>
                  <div className='col-12'>
                    <div class="progress mb-2">
                      <div class="progress-bar w-100" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div> 
                <div className='row mb-4'>
                  <div className='yay'>$500,000/$1,000,000</div>
                </div> 
                <hr/>
                 <div className='d-flex Fauser'>
                  <div className='col-4 d-flex Pert'>
                  <div className='icoin'><FaUserFriends/></div>
                    <div><h6>Perticipants</h6>
                      <h6 className='para'>20,250</h6></div>

                  </div>
                  <div className='col-4 d-flex Pert'>
                  <div className='icoin'><FaCalendarAlt/></div>
                    <div><h6>Start Date</h6>
                      <h6  className='para'>17-Dec-2021</h6></div>

                  </div>
                  <div className='col-4 d-flex Pert'>
                  <div className='icoin'><FaDonate/></div>
                    <div>  <h6>Token Price</h6>
                      <h6  className='para'>$0.30</h6></div>

                  </div>
                </div> 
                <div className=' d-flex  mt-2 pt-3   Pert2'>
                  <div className='col-4 d-flex '>
                    <div className='Fauser '>
                    <div className='icoin'><FaKey/></div>
                    </div>
                    <div className='Access'>
                      <h6>Access</h6>
                      <h6 className='Number'>Private</h6>
                    </div>

                  </div>
                  <div className='col-4  d-flex'>
                    <div>
                    <div className='icoin'><FaKey/></div>
                    </div>
                    <div className='Access'>
                      <h6>Token Sold</h6>
                      <h6 className='Number'>1.5M</h6>
                    </div>

                  </div>
                  <div className='col-4 d-flex'>
                    <div>
                      <img src={Key} alt=''></img>
                    </div>
                    <div className='Access'>
                      <h6>Token Distribution</h6>
                      <h6 className='Number'>3M</h6>
                    </div>

                  </div>
                 
                </div> 
              </div>

            </div>
             <div className='col-12 col-lg-6 col-xl-6 gx-5 '>
              <div className='row me-0 ms-0 Project mt-5 pt-4 '>
                <div className='col-2 LogoImage'><img src={Ima} className='avatar' /></div>
                <div className='col-8 col-lg-6 col-xl-6 col-md-6 Games'>
                  <h5>RocoFinance (ROCO)</h5>
                  <h6> 1 ROCO = 12.23131 PSR</h6>
                </div>
                <div className='col-2 col-lg-4 col-xl-4 col-md-4 d-flex justify-content-end open'><button className='Height2'>Ended</button></div>
                <div className='row'>
                  <div className='col-10 Pool mt-3'><h6>Pool Progress</h6></div>
                  <div className='col-2 mt-3'><h6>100%</h6></div>
                </div>
                <div className=''>
                  <div className='col-12'>
                    <div class="progress mb-2">
                      <div class="progress-bar w-100" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
                <div className='row mb-4'>
                  <div className='yay'>$500,000/$1,000,000</div>
                </div>
                <hr/>
                <div className='d-flex Fauser '>
                  <div className='col-4 d-flex Pert  '>
                    <div className='icoin '><FaUserFriends/></div>
                    <div><h6>Perticipants</h6>
                    <h6  className='para'>20,250</h6></div>

                  </div>
                  <div className='col-4 d-flex Pert'>
                  <div className='icoin'><FaCalendarAlt/></div>
                    <div><h6>Start Date</h6>
                      <h6  className='para'>17-Dec-2021</h6></div>

                  </div>
                  <div className='col-4 d-flex Pert'>
                    <div  className='icoin'><FaDonate/></div>
                    <div><h6>Perticipants</h6>
                    <h6  className='para'>$0.30</h6></div>

                  </div>
                </div>
                <div className='d-flex Pert2 pt-3 mt-2 Fauser'>
                  <div className='col-4 d-flex'>
                    <div  className='icoin'>
                      <FaKey/>
                    </div>
                    <div className='Access'>
                      <h6>Access</h6>
                      <h6 className='Number'>Private</h6>
                    </div>    

                  </div>
                  <div className='col-4 d-flex'>
                    <div>
                      <img src={Key} alt=''></img>
                    </div>
                    <div className='Access'>
                    <h6>Token Sold</h6>
                      <h6 className='Number'>1.5M</h6>
                    </div>

                  </div>
                  <div className='col-4 d-flex'>
                    <div>
                      <img src={Key} alt=''></img>
                    </div>
                    <div className='Access'>
                    <h6>Token Distribution</h6>
                      <h6 className='Number'>3M</h6>
                    </div>

                  </div>
                
                </div>
              </div>
            </div> 
          </div>
         
        
      </div> 
      <br/>
      {/* Open Project end */}
       {/* Open Project start */}
       <div className='container mt-4 '>
      
          <div className='row '>
            <div className='col-12 col-lg-6 col-xl-6 gx-5 '>
              <div className='row me-0 ms-0 Project mt-5 pt-4'>
                <div className='col-2 LogoImage'><img src={Im} className='avatar' alt='' /></div>
                <div className='col-8 col-lg-6 col-xl-6 col-md-6'>
                  <h5>Colony (CLY)</h5>
                  <h6> 1 HCT = 12.23131 PSR</h6>
                </div>
                <div className='col-2 col-lg-4 col-md-4 col-xl-4 d-flex justify-content-end open'><button className='Height2'>Ended</button></div>
                 <div className='row'>
                  <div className='col-10  Pool mt-3'><h6>Pool Progress</h6></div>
                  <div className='col-2  mt-3'><h6>100%</h6></div>
                </div> 

                 <div className=''>
                  <div className='col-12'>
                    <div class="progress mb-2">
                      <div class="progress-bar w-100" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div> 
                <div className='row mb-4'>
                  <div className='yay'>$500,000/$1,000,000</div>
                </div> 
                <hr/>
                 <div className='d-flex Fauser'>
                  <div className='col-4 d-flex Pert'>
                  <div className='icoin'><FaUserFriends/></div>
                    <div><h6>Perticipants</h6>
                      <h6 className='para'>20,250</h6></div>

                  </div>
                  <div className='col-4 d-flex Pert'>
                  <div className='icoin'><FaCalendarAlt/></div>
                    <div><h6>Start Date</h6>
                      <h6  className='para'>17-Dec-2021</h6></div>

                  </div>
                  <div className='col-4 d-flex Pert'>
                  <div className='icoin'><FaDonate/></div>
                    <div>  <h6>Token Price</h6>
                      <h6  className='para'>$0.30</h6></div>

                  </div>
                </div> 
                <div className=' d-flex  mt-2 pt-3   Pert2'>
                  <div className='col-4 d-flex '>
                    <div className='Fauser '>
                    <div className='icoin'><FaKey/></div>
                    </div>
                    <div className='Access'>
                      <h6>Access</h6>
                      <h6 className='Number'>Private</h6>
                    </div>

                  </div>
                  <div className='col-4  d-flex'>
                    <div>
                    <div className='icoin'><FaKey/></div>
                    </div>
                    <div className='Access'>
                      <h6>Token Sold</h6>
                      <h6 className='Number'>1.5M</h6>
                    </div>

                  </div>
                  <div className='col-4 d-flex'>
                    <div>
                      <img src={Key} alt=''></img>
                    </div>
                    <div className='Access'>
                      <h6>Token Distribution</h6>
                      <h6 className='Number'>3M</h6>
                    </div>

                  </div>
                 
                </div> 
              </div>

            </div>
             <div className='col-12 col-lg-6 col-xl-6 gx-5 '>
              <div className='row me-0 ms-0 Project mt-5 pt-4 '>
                <div className='col-2 LogoImage'><img src={Ima} className='avatar' /></div>
                <div className='col-8 col-lg-6 col-xl-6 col-md-6 Games'>
                  <h5>RocoFinance (ROCO)</h5>
                  <h6> 1 YAY = 12.23131 PSR</h6>
                </div>
                <div className='col-2 col-lg-4 col-xl-4 col-md-4 d-flex justify-content-end open'><button className='Height2'>Ended</button></div>
                <div className='row'>
                  <div className='col-10 Pool mt-3'><h6>Pool Progress</h6></div>
                  <div className='col-2 mt-3'><h6>100%</h6></div>
                </div>
                <div className=''>
                  <div className='col-12'>
                    <div class="progress mb-2">
                      <div class="progress-bar w-100" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
                <div className='row mb-4'>
                  <div className='yay'>$500,000/$1,000,000</div>
                </div>
                <hr/>
                <div className='d-flex Fauser '>
                  <div className='col-4 d-flex Pert  '>
                    <div className='icoin '><FaUserFriends/></div>
                    <div><h6>Perticipants</h6>
                    <h6  className='para'>20,250</h6></div>

                  </div>
                  <div className='col-4 d-flex Pert'>
                  <div className='icoin'><FaCalendarAlt/></div>
                    <div><h6>Start Date</h6>
                      <h6  className='para'>17-Dec-2021</h6></div>

                  </div>
                  <div className='col-4 d-flex Pert'>
                    <div  className='icoin'><FaDonate/></div>
                    <div><h6>Perticipants</h6>
                    <h6  className='para'>$0.30</h6></div>

                  </div>
                </div>
                <div className='d-flex Pert2 pt-3 mt-2 Fauser'>
                  <div className='col-4 d-flex'>
                    <div  className='icoin'>
                      <FaKey/>
                    </div>
                    <div className='Access'>
                      <h6>Access</h6>
                      <h6 className='Number'>Private</h6>
                    </div>    

                  </div>
                  <div className='col-4 d-flex'>
                    <div>
                      <img src={Key} alt=''></img>
                    </div>
                    <div className='Access'>
                    <h6>Token Sold</h6>
                      <h6 className='Number'>1.5M</h6>
                    </div>

                  </div>
                  <div className='col-4 d-flex'>
                    <div>
                      <img src={Key} alt=''></img>
                    </div>
                    <div className='Access'>
                    <h6>Token Distribution</h6>
                      <h6 className='Number'>3M</h6>
                    </div>

                  </div>
                
                </div>
              </div>
            </div> 
          </div>
         
        
      </div> 
      <br/>
      {/* Open Project end */}
       {/* Open Project start */}
       <div className='container mt-4 '>
      
          <div className='row '>
            <div className='col-12 col-lg-6 col-xl-6 gx-5 '>
              <div className='row me-0 ms-0 Project mt-5 pt-4'>
                <div className='col-2 LogoImage'><img src={Im} className='avatar' alt='' /></div>
                <div className='col-8 col-lg-6 col-xl-6 col-md-6'>
                  <h5>HurricaneSwap (NCT)</h5>
                  <h6> 1 YAY = 12.23131 PSR</h6>
                </div>
                <div className='col-2 col-lg-4 col-md-4 col-xl-4 d-flex justify-content-end open'><button className='Height2'>Ended</button></div>
                 <div className='row'>
                  <div className='col-10  Pool mt-3'><h6>Pool Progress</h6></div>
                  <div className='col-2  mt-3'><h6>100%</h6></div>
                </div> 

                 <div className=''>
                  <div className='col-12'>
                    <div class="progress mb-2">
                      <div class="progress-bar w-100" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div> 
                <div className='row mb-4'>
                  <div className='yay'>$500,000/$1,000,000</div>
                </div> 
                <hr/>
                 <div className='d-flex Fauser'>
                  <div className='col-4 d-flex Pert'>
                  <div className='icoin'><FaUserFriends/></div>
                    <div><h6>Perticipants</h6>
                      <h6 className='para'>20,250</h6></div>

                  </div>
                  <div className='col-4 d-flex Pert'>
                  <div className='icoin'><FaCalendarAlt/></div>
                    <div><h6>Start Date</h6>
                      <h6  className='para'>17-Dec-2021</h6></div>

                  </div>
                  <div className='col-4 d-flex Pert'>
                  <div className='icoin'><FaDonate/></div>
                    <div>  <h6>Token Price</h6>
                      <h6  className='para'>$0.30</h6></div>

                  </div>
                </div> 
                <div className=' d-flex  mt-2 pt-3   Pert2'>
                  <div className='col-4 d-flex '>
                    <div className='Fauser '>
                    <div className='icoin'><FaKey/></div>
                    </div>
                    <div className='Access'>
                      <h6>Access</h6>
                      <h6 className='Number'>Private</h6>
                    </div>

                  </div>
                  <div className='col-4  d-flex'>
                    <div>
                    <div className='icoin'><FaKey/></div>
                    </div>
                    <div className='Access'>
                      <h6>Token Sold</h6>
                      <h6 className='Number'>1.5M</h6>
                    </div>

                  </div>
                  <div className='col-4 d-flex'>
                    <div>
                      <img src={Key} alt=''></img>
                    </div>
                    <div className='Access'>
                      <h6>Token Distribution</h6>
                      <h6 className='Number'>3M</h6>
                    </div>

                  </div>
                 
                </div> 
              </div>

            </div>
             <div className='col-12 col-lg-6 col-xl-6 gx-5 '>
              <div className='row me-0 ms-0 Project mt-5 pt-4 '>
                <div className='col-2 LogoImage'><img src={Ima} className='avatar' /></div>
                <div className='col-8 col-lg-6 col-xl-6 col-md-6 Games'>
                  <h5>Yay Games (YAY)</h5>
                  <h6> 1 YAY = 12.23131 PSR</h6>
                </div>
                <div className='col-2 col-lg-4 col-xl-4 col-md-4 d-flex justify-content-end open'><button className='Height2'>Ended</button></div>
                <div className='row'>
                  <div className='col-10 Pool mt-3'><h6>Pool Progress</h6></div>
                  <div className='col-2 mt-3'><h6>100%</h6></div>
                </div>
                <div className=''>
                  <div className='col-12'>
                    <div class="progress mb-2">
                      <div class="progress-bar w-100" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
                <div className='row mb-4'>
                  <div className='yay'>$500,000/$1,000,000</div>
                </div>
                <hr/>
                <div className='d-flex Fauser '>
                  <div className='col-4 d-flex Pert  '>
                    <div className='icoin '><FaUserFriends/></div>
                    <div><h6>Perticipants</h6>
                    <h6  className='para'>20,250</h6></div>

                  </div>
                  <div className='col-4 d-flex Pert'>
                  <div className='icoin'><FaCalendarAlt/></div>
                    <div><h6>Start Date</h6>
                      <h6  className='para'>17-Dec-2021</h6></div>

                  </div>
                  <div className='col-4 d-flex Pert'>
                    <div  className='icoin'><FaDonate/></div>
                    <div><h6>Perticipants</h6>
                    <h6  className='para'>$0.30</h6></div>

                  </div>
                </div>
                <div className='d-flex Pert2 pt-3 mt-2 Fauser'>
                  <div className='col-4 d-flex'>
                    <div  className='icoin'>
                      <FaKey/>
                    </div>
                    <div className='Access'>
                      <h6>Access</h6>
                      <h6 className='Number'>Private</h6>
                    </div>    

                  </div>
                  <div className='col-4 d-flex'>
                    <div>
                      <img src={Key} alt=''></img>
                    </div>
                    <div className='Access'>
                    <h6>Token Sold</h6>
                      <h6 className='Number'>1.5M</h6>
                    </div>

                  </div>
                  <div className='col-4 d-flex'>
                    <div>
                      <img src={Key} alt=''></img>
                    </div>
                    <div className='Access'>
                    <h6>Token Distribution</h6>
                      <h6 className='Number'>3M</h6>
                    </div>

                  </div>
                
                </div>
              </div>
            </div> 
          </div>
         
        
      </div> 
      <br/>
      {/* Open Project end */}

      {/*  start */}
      <div className='container mt-5'>
        <div className='row d-flex justify-content-center '>
          <div class=" col-lg-3 col-xl-3 col-sm-6">
            <div class="card libero">
              <div class="card-body">
                <h4 class="card-title "><FaCheck className='Red'/> Nam libero tempore</h4>
                <p class="card-text">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus  omnis voluptas assumenda est.</p>
              </div>
            </div>
          </div>

          <div class=" col-lg-3 col-xl-3 col-sm-6">
            <div class="card libero">
              <div class="card-body">
                <h4 class="card-title"><FaCheck className='Red'/> Nam libero tempore</h4>
                <p class="card-text">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus  omnis voluptas assumenda est.</p>
              </div>
            </div>
          </div>

          <div class=" col-lg-3 col-xl-3 col-sm-6">
            <div class="card libero">
              <div class="card-body">
                <h4 class="card-title"><FaCheck className='Red'/> Nam libero tempore</h4>
                <p class="card-text">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus  omnis voluptas assumenda est.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      {/* end */}


      {/* Projectstarter start */}
      <div className='container mb-5 mt-5'>
        <div className='row'>
          
          <div className='col-12 text-center '>
            <h3 className='But'>The Projectstarter Protocol. <span>People First.</span></h3>
            <img  src={Rectangle} alt='' className='Protocol'/>
          </div>
          <div className='col-12 d-flex justify-content-center mt-5'>
          <img src={Frame70} alt='' className='Prot'></img>
        </div>
         {/* <div className='row mt-5'>
          <div className='col-8 me-auto ms-auto Background text-center'>
            <div><h3 className='pt-5 text-white '>Get Alerts For New Pools</h3></div>
            <div className='pb-5 pt-4 Button'><button>Sign Up</button></div>  

          </div>
          </div> */}
        </div>
      </div>
      {/* end */}
    </div>
  )
}

export default Openprojectscards
