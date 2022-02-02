import React from 'react'
import './Index.scss'
import '../../../node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss'
import '../../../node_modules/bootstrap/js/dist/collapse.js'
import { GrReddit } from "react-icons/gr";
function Index() {
  return (
    <>
      
      <div className='container mt-5 mb-5'>
        <div className='row '>
          <div className='col-lg-12 col-sm-12 col-xl-12 ms-auto me-auto text-center'> <h1 className='head1'>Launchpad ipsam quia dolor</h1>
            <h1 className='head2'>voluptas sit aspernatur</h1>
          </div>
        </div>

        <div className='row paragraph' >
          <div className='col-lg-6 col-sm-12 col-xl-6 col-md-8 ms-auto me-auto text-center'><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blandis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.</p></div>
        </div>
        <div className='row'>
          <div className='col-12 col-lg-8 col-xl-6 col-md-8 ms-auto me-auto'>
            <div className='row some'>
              <button className='col-lg-5 col-6 col-md-6 col-xl-6 Radius'><a className='pe-2 '><GrReddit/></a> Buy On PancakeSwap</button>
              <button className='col-lg-4 col-4  col-md-3 col-xl-4 Radius'>Apply For IDO</button>
            </div>

          </div>
        </div>
      </div>
      
      <br></br>

    


     





    </>
  )
}

export default Index
