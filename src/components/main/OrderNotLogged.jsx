import React, {useEffect, useState} from "react";
import apiClient from '../../services/api';


const OrderNotLogged = () => {

    const [email, setEmail] = useState('');
    const [orderId, setOrderId] = useState('');
    const [order, setOrder] = useState('');
    const [orderStatus, setOrderStatus] = useState('');
    const [orderError, setOrderError] = useState('');
    const [orderSucces, setOrderSucces] = useState(0);


    const handleSubmit = (e) => {
        e.preventDefault();
        apiClient.post('api/find-order',{
            email: email,
            orderId: orderId
        }        
        ).then(response=> {
            if (response.status === 200) { 
                if(response.data) {
                    setOrder(response.data); 
                    setOrderSucces(true);
                }   
            }
        }).catch(error => {
            setOrderError(error);
            setOrderSucces(false);
        })
    }

    useEffect(() => {
        if(orderSucces === 0) {
            setOrderStatus()
        }else
        if(orderSucces) {
            setOrderStatus(<div>Order {order.id} status is {order.status}</div>)
        } else
        if(!orderSucces) {
            setOrderStatus(<div>Order not found</div>)
        }
    }, [order, orderError])


    
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input
                    type="text"
                    name="orderId"
                    placeholder="Order ID"
                    value={orderId}
                    onChange={e => setOrderId(e.target.value)}
                    required
                />
                <button type="submit">Get Order</button>
            </form>
            {orderStatus}
        </div>
    )


}

export default OrderNotLogged;