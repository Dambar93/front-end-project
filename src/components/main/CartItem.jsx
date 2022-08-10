import React from "react";
import { Button } from "react-bootstrap";






const CartItem = ({id, image, title, price}) => {
    
    return (
        <tr>
            <td><a href={`/part/${id}`} ><img src={image} alt="" className="img-fluid" style={{maxHeight:'160px',maxWidth: '225px'}}/></a></td>
            <td><a href={`/part/${id}`} >{title}</a></td>
            <td>{price} €</td>
            <td><Button variant="danger" onClick={() => {
                let arr = JSON.parse(localStorage.getItem('cart'));
                localStorage.setItem('cart', JSON.stringify(arr.filter(items => items.id !== id)));
                console.log(arr.filter(items => items.id !== id));
                window.location.reload(false);

            }}>Delete</Button></td>
        </tr>
    )
}

export default CartItem;