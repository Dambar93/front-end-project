import React, {useState, useEffect} from "react";
import Table from 'react-bootstrap/Table';
import { Button } from "react-bootstrap";






const PartTable = ({list,URL}) =>{
    const [cartItem, SetCartItem] = useState([]);



    return(
        <div>

            <Table bordered hover >
            
                <tbody>
                    
                        {list.map((part) => {

                                let image='';
                                if(typeof(part.images[0]) === 'undefined'){
                                    image ='noimage.jpg'
                                }else { 
                                    image = URL+part.images[0]
                                };
                                
                                return(<tr className="part-table">
                                        
                                        <td ><a href={`/part/${part.id}`} ><img src={image} alt="" className="img-fluid" style={{maxHeight:'160px',maxWidth: '225px'}}/></a></td>
                                        <td >
                                            <h5><a href={`/part/${part.id}`}>{part.title}</a></h5>
                                            <p>{part.manufacture} {part.car['model']}, {part.car['year']}, {part.car['engine_displacement']} <>&#13220;</>, {part.car['power']} Kw, {part.car['fuel_type']} </p>
                                            <p>Condition: {part.condition}</p>
                                            <p>Category: {part.category}</p>
                                            </td>
                                        <td className="buy"><h4>{part.price} €</h4> 
                                            <Button onClick = {() => {
                                                if(!localStorage.getItem('cart')){
                                                    localStorage.setItem('cart', JSON.stringify([{id: part.id, image: image, title: part.title, price: part.price}]))
                                                } else if(localStorage.getItem('cart')){
                                                    let arr = JSON.parse(localStorage.getItem('cart'));
                                                    arr.push({id: part.id, image: image, title: part.title, price: part.price});
                                                    localStorage.setItem('cart', JSON.stringify([...new Map(arr.map(item => [item['id'],item])).values()]));
                                                }

                                                
                                                }}>Add to cart</Button>
                                        </td>
        
                                        
                                        </tr>)
                            
                        })}
                
                </tbody>
            </Table>

        </div>
    )
}

export default PartTable;