import React from "react";

const OrderSucces = ({orderId}) => {
    return (
        <div className="d-flex-column " style={{textAlign: 'center'}}>
            <div><h5>Your order was placed succesfuly</h5></div> <br></br>
            <div><h4>Order ID is {orderId}</h4></div>
            
        </div>
    )
}

export default OrderSucces;