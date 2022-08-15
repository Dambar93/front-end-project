import React, {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import apiClient from '../../services/api';
import OrderSucces from "./OrderSucces";



const Delivery = () => {
    const navigate = useNavigate();
    const [country, setCountry] = useState('');
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [zip, setZip] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('');
    const [order, setOrder] = useState(false);
    const [orderId, setOrderId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        apiClient.post('api/create-order',{
            country: country,            
            buyer: name,
            city: city,
            address: address,
            zip: zip,
            email: email,
            phone: phone,
            comment: comment,
            items: JSON.parse(localStorage.getItem('cart')),
        }        
        ).then(response=> {

            if (response.status === 200) {
                
                if (response.data.error){
                    
                } else if(response.data.order_id) {
                    localStorage.removeItem('cart')
                    setOrderId(response.data.order_id);
                    setOrder(true);
                    
                } 
                
            }

        }).catch(error => {
            
            
        })
    }


    const checkCart = localStorage.getItem('cart');
    useEffect(() => {
        
        if(!checkCart){
            return (navigate('/cart'))
        } 

        if(localStorage.getItem('user_email')){
            setEmail(localStorage.getItem('user_email'))
        }
        if(localStorage.getItem('user_name')){
            setName(localStorage.getItem('user_name'))
        }

    }, [])

    if (order) {
        return(<OrderSucces orderId = {orderId}/>);
    }
    if(!localStorage.getItem('loggedIn')){
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name Surname"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                /> <br></br>
                <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                    required
                /> <br></br>
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    required
                /> <br></br>
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    required
                /> <br></br>
                <input
                    type="text"
                    name="zip"
                    placeholder="ZIP code (example: LT-12345)"
                    value={zip}
                    onChange={e => setZip(e.target.value)}
                    required
                /> <br></br>
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                /> <br></br>
                <input
                    type="text"
                    name="phone"
                    placeholder="+37060000000"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    required
                /> <br></br>
                <input
                    type="text"
                    name="comment"
                    placeholder="Comment"
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    
                /> <br></br>
                
                <button type="submit">Place order</button>
            </form>
        </div>
    )} else if(localStorage.getItem('loggedIn')) {        
        return (
            <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name Surname"
                    value={localStorage.getItem('user_name')}
                    onChange={e => setName(e.target.value)}
                    required
                /> <br></br>
                <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                    required
                /> <br></br>
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    required
                /> <br></br>
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    required
                /> <br></br>
                <input
                    type="text"
                    name="zip"
                    placeholder="ZIP code (example: LT-12345)"
                    value={zip}
                    onChange={e => setZip(e.target.value)}
                    required
                /> <br></br>
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={localStorage.getItem('user_email')}
                    onChange={e => setEmail(e.target.value)}
                    required
                /> <br></br>
                <input
                    type="text"
                    name="phone"
                    placeholder="+37060000000"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    required
                /> <br></br>
                <input
                    type="text"
                    name="comment"
                    placeholder="Comment"
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    
                /> <br></br>
                
                <button type="submit">Place order</button>
            </form>
        </div>
        )
    }
}

export default Delivery;