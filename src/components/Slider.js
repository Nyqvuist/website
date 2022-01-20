import React from 'react'
import { CarouselItem, Container, Carousel } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { NavbarBrand } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import image from "../assets/background.jpeg"
import logo from "../assets/logotrans.png"

function Slider() {
    return (
        <Container className="mt-2" >
            <Carousel>
                <CarouselItem>
                    <img   
                        className="d-block w-100"
                        src = {image}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Test Slide</h3>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem>
                    <img   
                        className="d-block w-100"
                        src = {logo}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Test Slide2</h3>
                    </Carousel.Caption>
                </CarouselItem>
            </Carousel>
        </Container>
    )
}

export default Slider
