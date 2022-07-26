import React from 'react'
import '../styles/About.css'

function About() {
  return (
    <div className='about py-5 px-3' id='about'>
        <div className='container py-5'>
            <div className='path pt-5'>
                / WHO WE ARE
            </div>
            <div className='title display-2 py-4'>
                We are a design and development studio building world-class mobile applications.
            </div>
            <div className='description lead pt-4'>
                <h3>
                We’re a digital product agency in Hyderabad that designs and develops extraordinary experiences for mobile and other platforms. We work with exceptional entrepreneurs and brands. We don't just build apps. We create the kind of apps that people use, everyday. We have the experience and knowledge to get there.
                </h3>
            </div>
            <div className='row'>
                <div className='col-md-6 story pb-4'>
                    <div className='story-title'>
                        <div className='story-number'>1</div>
                        <b className='display-6'>Story</b>
                    </div>
                    <div>
                        <div className='story-description'>
                            We help clients understand the shift that happening from ideas to implementation. StoryTech connects the dots that connect ideation, implementation and transformation. We know how to create apps that people love, use and create a noise.
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='story-title'>
                        <div className='story-number'>2</div>
                        <b className='display-6'>Design</b>
                    </div>
                    <div>
                        <div className='story-description'>
                        We help clients understand and revamp the way consumers discover and interact with products and services. StoryTech works as one team to create products that people love to use with a minimalistic approach.                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
  )
}

export default About