import React, {useState} from 'react'
import '../styles/Works.css'
import Carousel from 'react-bootstrap/Carousel';

function Works() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
  return (
    <div className='works' id='works'>
        <div className='container pt-5 px-3'>
            <div className='path pt-5'>
                / FEATURED WORKS
            </div>
            <div className='title display-2 py-4'>
                Here are some of our projects we have done lately.
            </div>
        </div>
        <div className='px-4'>
            <div className=' posters row gx-0'>
                <div className='col-xl-4 col-md-6 col-12 py-4'>
                    <img src='http://www.storytech.in/images/Workruit.png' alt='storytech'/>
                </div>
                <div className='col-xl-4 col-md-6 col-12 py-4'>
                    <img src='http://www.storytech.in/images/Workruit%20AP.png' alt='storytech'/>
                </div>
                <div className='col-xl-4 col-md-6 col-12 py-4'>
                    <img src='http://www.storytech.in/images/DEET.png' alt='storytech'/>
                </div>
            </div>
        </div>
        <div className='container'>
            <div className='clients-feedback my-5 py-5'>
                <div className='text-center'><h1>What Clients are Saying.</h1></div>
                <div className='d-lg-block d-none py-5'>
                    <div className='feedback-outer row'>
                        <div className='col-lg-6'>
                            <div className='feedback-ver-line'>
                            </div>
                            <div className='feedback-details py-2'>
                                <div className='feedback-image'><img src='http://www.storytech.in/images/avatars/user-01.jpg' alt='feedback'></img></div>
                                <div className='feedback-content px-4'><p>
                                Design is very critical and important in solving problems in every field. Going through various different agencies, 
                                we’ve learnt that StoryTech provides a clean and minimal approach in providing solutions.    
                                </p>
                                
                                <div className='name py-4'>
                                    <h4><b>Bhargav Ram</b></h4>
                                    CEO, Rely
                                </div>
                                
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='feedback-ver-line'>
                            </div>
                            <div className='feedback-details py-2'>
                                <div className='feedback-image'><img src='http://www.storytech.in/images/avatars/user-05.jpg' alt='feedback'></img></div>
                                <div className='feedback-content px-4'><p>
                                    Very happy with the design and development work, their attention to detail is something to look out for. 
                                    They do everything well.    
                                </p>
                                
                                <div className='name py-4'>
                                    <h4><b>Manikanth C</b></h4>
                                    Founder, Workruit
                                </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-block d-lg-none pt-5'>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item className='carousel-item'>
                        <div className='feedback-outer'>
                            <div className='feedback-ver-line'>
                            </div>
                            <div className='feedback-details py-2'>
                                <div className='feedback-image'><img src='http://www.storytech.in/images/avatars/user-01.jpg' alt='feedback'></img>
                                </div>
                                <div className='feedback-content px-4'><p>
                                        Very happy with the design and development work, their attention to detail is something to look out for. 
                                        They do everything well.    
                                    </p>

                                    <div className='name pt-4'>
                                        <h4><b>Manikanth C</b></h4>
                                        Founder, Workruit
                                    </div>
                                
                                </div>
                            </div>

                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='feedback-outer'>
                            <div className='feedback-ver-line'>
                            </div>
                            <div className='feedback-details py-2'>
                                <div className='feedback-image'><img src='http://www.storytech.in/images/avatars/user-01.jpg' alt='feedback'></img></div>
                                <div className='feedback-content px-4'><p>
                                Design is very critical and important in solving problems in every field. Going through various different agencies, 
                                we’ve learnt that StoryTech provides a clean and minimal approach in providing solutions.    
                                </p>
                                
                                <div className='name pt-4'>
                                    <h4><b>Bhargav Ram</b></h4>
                                    CEO, Rely
                                </div>
                                
                                </div>

                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>


                </div>
            </div>
        </div>
    </div>
  )
}

export default Works