import React from 'react'
import "./Car_section.css"
import Carousel from 'react-bootstrap/Carousel';
import { CarouselItem } from 'react-bootstrap';

export default function Car_section() {
  return (
    <>
        <Carousel className='main-car'>
            <CarouselItem interval={1500}><img src="./assest/Carosul/image 1.jpg" alt="image 1" className='image-resize' /></CarouselItem>
            <CarouselItem interval={1500}><img src="./assest/Carosul/image 2.jpg" alt="image 1" className='image-resize' /></CarouselItem>
            <CarouselItem interval={1500}><img src="./assest/Carosul/image 3.jpg" alt="image 1" className='image-resize' /></CarouselItem>
            <CarouselItem interval={1500}><img src="./assest/Carosul/image 4.jpg" alt="image 1" className='image-resize' /></CarouselItem>
            <CarouselItem interval={1500}><img src="./assest/Carosul/image 5.jpg" alt="image 1" className='image-resize' /></CarouselItem>
        </Carousel>
    </>
  )
  
}