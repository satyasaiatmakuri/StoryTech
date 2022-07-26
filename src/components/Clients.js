import React from 'react'
import '../styles/Clients.css'
import Cust1 from '../assets/Cust1.png'
import Cust2 from '../assets/Cust2.png'
import Cust3 from '../assets/Cust3.png'
import Cust4 from '../assets/Cust4.png'

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
                    <a href='https://www.workruit.com/' target="blank"><img src={Cust1} alt='workruit' /></a>
                </div>
                <div className='client-img-inner col-md-3 col-sm-6 col-12 py-5'>
                    <a href='https://www.workruit.com/' target="blank"><img src={Cust2} alt='Govt of AP'/></a>
                </div>
                <div className='client-img-inner col-md-3 col-sm-6 col-12 py-5'>
                    <a href='http://tsdeet.com/' target="blank"><img src={Cust3} alt='Govt of TS' /></a>
                </div>
                <div className='client-img-inner col-md-3 col-sm-6 col-12 py-5'>
                    <a href='https://www.workruit.com/' target="blank"><img src={Cust4} alt='rely' /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Clients