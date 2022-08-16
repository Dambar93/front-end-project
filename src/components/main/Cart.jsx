import React, {useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';
import CartItem from "./CartItem";
import { Button } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';



const Cart = () => {
    const navigate = useNavigate();
    const [items, setItems]= ([localStorage.getItem('cart')]);
    const [uniqueList, setUniqueList] = useState([]);

    let price = 0;
    useEffect(() => {
        if(items){
            let arr = JSON.parse(items);
            setUniqueList([...new Map(arr.map(item => [item['id'],item])).values()]);
            localStorage.setItem('cart', JSON.stringify([...new Map(arr.map(item => [item['id'],item])).values()]));
        }
        

    }, []) 
    if (!items){
        return (
            <div >
                <h1 className="text-center">Basket is empty</h1>
            </div>
        )
    } else if(items) {
        
        return (
            <div>
                <div>
                    <Button variant="danger" onClick={() => {
                        localStorage.removeItem('cart');
                        window.location.reload(false);
                    }}>Empty cart</Button>
                </div>
                <Table hover className="cart-table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            uniqueList.map((part) =>{
                                
                                price +=part.price;
                                return(
                                    <CartItem id={part.id} image={part.image} title={part.title} price={part.price} />
                                )
                            })
                        }
                    </tbody>
                </Table> 
                <h6>Free Shipping</h6>
                <div className="d-flex justify-content-between">

                    <h4>Total price:</h4>
                    <h4>{price} €</h4>
                </div>   
                <div className="d-flex justify-content-center">
                        <Button onClick={() => navigate('/delivery')}>Proceed to delivery addres</Button>
                </div>
            </div>

        )
    }
    

    
    
}

export default Cart;