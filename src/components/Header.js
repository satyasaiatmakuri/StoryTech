import React, {useState} from 'react'
import {Link as Scrollto} from 'react-scroll'
import {Link as Navlink} from 'react-router-dom'
import '../styles/Header.css'
import DehazeIcon from '@mui/icons-material/Dehaze';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import StoryTech from '../assets/StoryTech.png'

function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div className='header' id='header'>
        <div className='container'>
            <div className='row'>
                <div className='header-contents row py-3'>
                    <div className='logo col-sm-8 col-6'>
                        <img  className='logo-img' src={StoryTech} alt='storyTech'/>
                    </div>
                    <div className='position-relative'>
                        <div className='menu-bar'>
                            <div className='menu-text d-none d-md-block fs-5 px-3'>
                                MENU
                            </div>
                            <div className='toggle-btn' onClick={handleShow} >
                                <DehazeIcon style={{height: 40, width: 40}}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        <Offcanvas show={show} onHide={handleClose} placement='end' className='offcanva' scroll= 'true' backdrop = 'false'>
            <Offcanvas.Header closeButton className='offcanva-header'>
              <Offcanvas.Title className='offcanva-title'>STORYTECH</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='offcanva-body'>
                <ul>
                    <Scrollto to='header' smooth={true} duration={200}><li onClick={handleClose}><span>01.</span><b>Home</b></li></Scrollto>
                    <Scrollto to='about' smooth={true} duration={250}><li onClick={handleClose}><span>02.</span><b>About</b></li></Scrollto>
                    <Scrollto to='service' smooth={true} duration={300}><li onClick={handleClose}><span>03.</span><b>Services</b></li></Scrollto>
                    <Scrollto to='works' smooth={true} duration={350}><li onClick={handleClose}><span>04.</span><b>Works</b></li></Scrollto>
                    <Scrollto to='clients' smooth={true} duration={400}><li onClick={handleClose}><span>05.</span><b>Clients</b></li></Scrollto>
                    <Scrollto to='contact' smooth={true} duration={450}><li onClick={handleClose}><span>06.</span><b>Contact</b></li></Scrollto>
                    <Navlink to='/careers'><li><span>07.</span><b>Career</b></li></Navlink>
                    <Navlink to='/login'><li className='last-li'><span>08.</span><b>Login</b></li></Navlink>
                </ul>

                <div className='social-media-link'>
                    <FacebookIcon className='social-media-icon'/>
                    <TwitterIcon className='social-media-icon'/>
                    <InstagramIcon className='social-media-icon'/>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
        <div className='container'>
            <div className='row my-5'>
                <div className='col-9 mx-auto my-5'>
                    <div className='row'>
                        <div className=' header-title display-1 col-md-10 col-lg-8 col-12'>Hello, we are StoryTech.</div>
                    </div>
                        <div className='title-desc row'>
                            <div className='hor-line col-md-1 col-4'><hr/></div>
                            <div className=' desc col-md-8 mr-auto col-12'><h3>We are focused to create incredible
                                    mobile apps for startups and enterprise clients.
                                </h3>
                            </div>
                        </div>
                </div>

            </div>

        </div>
        <div className='social-media-text container py-5'>
            <div className='row'>
                <div className='followus col-md-1 col-sm-3 col-4 text-center'>
                    <h6>Follow Us</h6>
                </div>
                <div className='col-sm-1 d-none d-sm-block'>
                    <hr/>
                </div>
                <div className='social-media-text-links col-md-7 d-none d-md-block'>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
                <div className='social-media-icon-links col-sm-5 col-4 d-md-none'>
                <ul>
                        <li><FacebookIcon/></li>
                        <li><TwitterIcon/></li>
                        <li><InstagramIcon/></li>
                    </ul>
                </div>
                <div className='scroll col-sm-3 col-md-3 col-4'>
                    <Scrollto to='about' smooth={true} duration={200}><div className='scrolldown d-none d-md-block'>SCROLL  DOWN </div></Scrollto>
                    <Scrollto to='about' smooth={true} duration={200}><div className='scrolldown-logo'> <ArrowDownwardIcon/> </div></Scrollto> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header

