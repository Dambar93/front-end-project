import React, {useState, useEffect} from "react";
import apiClient from '../../services/api';
import Table from 'react-bootstrap/Table';




const OrdersLogged = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {

        apiClient.get(`api/order`,
            {   
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${localStorage.getItem("token")}`
            }}
        )
            .then((response) => {
                setOrders(response.data.data);
          });


    }, [])
    if(orders.length === 0) {
        return (
            <div className="text-center">
                
                <h3>You have no orders</h3>
            </div>
        )
    }
    if(orders){
        return (
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Status</th>
                    <th>Delivery address</th>
                    <th>Ordered items</th>
                </tr>
                </thead>
                <tbody>
                    {orders.map((item) => {
                        const parts = item.order_items;
                        return(
                            <tr>
                            <td>{item.unique_id}</td>
                            <td>{item.status}</td>
                            <td>{item.address.country}, {item.address.city}, {item.address.address}, {item.address.zip} </td>
                            <td>
                                {parts.map((part) => {
                                    return (
                                        <p>{part.title} Price: {part.price} Quantity: {part.quantity}</p>
                                    )
                                })}
                            </td>
                            </tr>
                        )
    
                    })
    
                    }
                </tbody>
            </Table>
        )
    }    
    


}

export default OrdersLogged;