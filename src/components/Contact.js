import React from 'react'
import '../styles/Contact.css'
import {Link as Scrollto} from 'react-scroll'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function Contact() {
  return (
    <div className='contact pt-5 px-3' id='contact'>
        <div className='container'>
            <div className='path pt-5'>
                / CONTACT US
            </div>
            <div className='title display-2 py-4'>
                Have an idea or the next big project in mind? Talk to us. Let’s work together and make something great.           
            </div>
            <br/><br/><br/><br/><br/>
            <div className='hor-line py-3'></div>
            <div className='pb-5'>
                <h1>info@storytech.in</h1>
                <h4>+91 8639217011</h4>
            </div>
            <div className='row'>
                <div className='col-md-4 col-12 pb-4'>
                    <div className='path pb-4'>
                        / WHERE TO FIND US
                    </div>
                    <div>
                        <h4>Road No 13, Jubilee hills</h4>
                        <h4>Hyderabad, Telangana</h4>
                        <h4>500033 India</h4>
                    </div>
                </div>
                <div className='col-md-4 col-12'>
                    <div className='path pb-4'>
                        / FOLLOW US
                    </div>
                    <div className='social-media-link-footer'>
                        <FacebookIcon className='social-media-icon'/>
                        <TwitterIcon className='social-media-icon'/>
                        <InstagramIcon className='social-media-icon'/>
                    </div>
                </div>
            </div>
            <div className='others py-4'>
                <div className='item'>career</div>
                <div className='item'>privacy</div>
                <div className='item'>terms</div>
            </div>
            <div className='ver-line'>
                <Scrollto to='header' smooth={true} duration={500}><div className='uparrow'><ArrowUpwardIcon/></div></Scrollto>
                <div className='uparrow-text'>BACK TO TOP</div>
            </div>

        </div>
    </div>
  )
}

export default Contact