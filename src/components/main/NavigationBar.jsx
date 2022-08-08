import React, {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from 'react-router-dom';

const NavigationBar = () => {
    const navigate = useNavigate();

    const [logged, setLogged] = useState(false);
    const [content, setContent] = useState(<Nav.Link href="/login">Login</Nav.Link>);
    const logout = () => {
        
        localStorage.removeItem("loggedIn", false);
        localStorage.removeItem("token", '');
        return (navigate('/'));
        
        

    }
    useEffect(()=> {
        if(localStorage.getItem('loggedIn')){
            setLogged(true)
            setContent(<button onClick={logout} className="nav-link btn btn-link">Logout</button> )
            } else {
                setLogged(false);
                setContent(<Nav.Link href="/login">Login</Nav.Link>);
            }

    },[localStorage.getItem('loggedIn'),logged])



    return (
        <Navbar bg="dark" variant="dark" >
            <Container>
            <Navbar.Brand href="/"><img src="logo192.png" alt="" style={{width: 30 }} /> I Want part</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/used-parts">Used Parts</Nav.Link>
                <Nav.Link href="/new-parts">New Parts</Nav.Link>
                {content}
                
            </Nav>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;