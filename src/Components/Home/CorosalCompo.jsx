import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './CorosalCompo.css'


function CorosalCompo() {
  return (
    <>
    <Carousel>
      <Carousel.Item>
        <img style={{height:"90vh",width:"100%"}}
        className='d-block w-100'
        src="/Home3.jpg"
        alt='First Slide'
        />
        <Carousel.Caption>
          <h3 className='CorosalHeading'>Home Cleaning Services</h3>
          <p className='CorosalPara'>Enjoy Your Freshly Cleaned Home, Professional cleanings at a competitive price.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:"90vh",width:"100%"}}
        className='d-block w-100'
        src='/Home2.jpg'
        alt='Second Slide'
        />
        <Carousel.Caption>
          <h3 className='CorosalHeading'>Deep Cleaning Services</h3>
          <p className='CorosalPara'>Detailed Deep Cleaning Services from CleanEase@Corporation</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:"90vh",width:"100%"}}
        className='d-block w-100'
        src='/Home55.jpg'
        alt='Third Slide'
        />
        <Carousel.Caption>
          <h3 className='CorosalHeading'>Home Cleaning Done Right. Every Time.</h3>
          <p className='CorosalPara'>
          Save Time and Money With Online Booking and Flat Rate Pricing!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default CorosalCompo
