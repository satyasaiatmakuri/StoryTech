import React from 'react'
import '../styles/Services.css'
import WebAssetIcon from '@mui/icons-material/WebAsset';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';

function Services() {
  return (
    <div className='services py-5 px-3' id='service'>
        <div className='container'>
            <div className='path pt-5'>
                / WHAT WE DO
            </div>
            <div className='title display-2 py-4'>
                We have everything you need to launch and grow a successful digital business.            
            </div>
            <div className='description pt-4'>
                <h3>
                We’re a digital product agency in Hyderabad that designs and develops extraordinary experiences for mobile and other platforms.                </h3>
            </div>
            <div className='row my-5 py-5'>
                <div className='col-xl-4 col-md-6 col-12 py-4'>
                    <div><WebAssetIcon className='service-icon'/></div>
                    <div className='py-3 display-6'><b>Design & UX</b></div>
                    <div>Our product and UX designers work closely to research, iterate and innovate on how our apps will work. We design attention to detail and make sure our apps are both useful and usable.</div>
                </div>
                <div className='col-xl-4 col-md-6 col-12 py-4'>
                    <div><ViewInArIcon className='service-icon'/></div>
                    <div className='py-3 display-6'><b>Product</b></div>
                    <div>We're product people. We focus on building the right product the right way, communicating across disciplines, and balancing business and user needs with technical feasibility.</div>
                </div>
                <div className='col-xl-4 col-md-6 col-12 py-4'>
                    <div><DeveloperBoardIcon className='service-icon'/></div>
                    <div className='py-3 display-6'><b>Development</b></div>
                    <div>Our dedicated engineers excel in all areas of their craft, from iOS to Android to back-end development. We're masters of writing elegant code and solving complex problems.</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services