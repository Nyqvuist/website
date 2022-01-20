import React from 'react'
import { CarouselItem, Container, Carousel } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { NavbarBrand } from 'react-bootstrap'
import { Button } from 'react-bootstrap'


function Banner() {
    return (
        <Navbar bg="primary" variant="light">
            <Container>
            <NavbarBrand className="my-5 py-5 mx-auto">TEMP LOGO
                <Button variant="dark" size="sm">Invite</Button>{''}
            </NavbarBrand>
            </Container>
        </Navbar>
    )
}



export default Banner
