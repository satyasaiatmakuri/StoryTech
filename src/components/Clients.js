import React from 'react'
import '../styles/Clients.css'

function Clients() {
  return (
    <div className='clients' id='client'>
        <div className='container py-5 px-3'>
            <div className='path pt-5'>
                / WE ARE WORKING WITH
            </div>
            <div className='title display-2 py-4'>
                Clients we are working with.           
            </div>
            <div className='row clients-img py-5'>
                <div className='client-img-inner col-md-3 col-sm-6 col-12 py-5'>
                    <a href='https://www.workruit.com/' target="blank"><img src='http://www.storytech.in/Clients%202/Clients%202/Images/1.png' alt='workruit' /></a>
                </div>
                <div className='client-img-inner col-md-3 col-sm-6 col-12 py-5'>
                    <a href='https://www.workruit.com/' target="blank"><img src='http://www.storytech.in/Clients%202/Clients%202/Images/5.png' alt='Govt of AP'/></a>
                </div>
                <div className='client-img-inner col-md-3 col-sm-6 col-12 py-5'>
                    <a href='http://tsdeet.com/' target="blank"><img src='http://www.storytech.in/Clients%202/Clients%202/Images/3.png' alt='Govt of TS' /></a>
                </div>
                <div className='client-img-inner col-md-3 col-sm-6 col-12 py-5'>
                    <a href='https://www.workruit.com/' target="blank"><img src='http://www.storytech.in/Clients%202/Clients%202/Images/4.png' alt='rely' /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Clients