import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark" >
            <Container>
            <Navbar.Brand href="/"><img src="logo192.png" alt="" style={{width: 30 }} /> I Want part</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/used-parts">Used Parts</Nav.Link>
                <Nav.Link href="/new-parts">New Parts</Nav.Link>
                
            </Nav>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;