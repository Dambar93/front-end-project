import React, {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from 'react-router-dom';
import OrderNotLogged from "./OrderNotLogged";

const NavigationBar = () => {
    const navigate = useNavigate();
    const [logged, setLogged] = useState(false);
    const [content, setContent] = useState();
    const [registration, setRegistration] = useState();
    const [orderLoged, setOrderLoged] = useState();
    const [orderNotLogged, setOrderNotLogged] = useState();
    
    const logout = () => {
        
        localStorage.removeItem("loggedIn", false);
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
        localStorage.removeItem("user_email");
        localStorage.removeItem("user_name");
        return (navigate('/'));
        
        

    }
    useEffect(()=> {
        if(localStorage.getItem('loggedIn')){
            setLogged(true)
            setContent(<button onClick={logout} className="nav-link btn btn-link">Logout</button> )
            setRegistration();
            setOrderNotLogged();
            setOrderLoged(<Nav.Link href="/orders">Orders</Nav.Link>);
        } else {
                setLogged(false);
                setOrderNotLogged(<Nav.Link href="/find-order">Find Order</Nav.Link>)
                setContent(<Nav.Link href="/login">Login</Nav.Link>) ;
                setRegistration(<Nav.Link href="/register">Register</Nav.Link>);
                setOrderLoged();
            }

    },[localStorage.getItem('loggedIn'),logged])


    return (


        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/"><img src="logo192.png" alt="" style={{width: 50 }} /> I Want part</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/used-parts">Used Parts</Nav.Link>
                <Nav.Link href="/new-parts">New Parts</Nav.Link>
                <Nav.Link href="/cart" >Cart </Nav.Link>                
                {orderNotLogged}
                {orderLoged}
                {content}
                {registration} 
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavigationBar;