import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";






const ShowPart = ({URL}) =>{

    const [part, setPart] = useState([]);
    const [codes, setCodes] =useState([]);
    const [car, setCar] =useState([]);
    const [images, setImages] =useState([]);
    const [gallery, setGallery] =useState([]);
    let params = useParams();
    const [index, setIndex] = useState(0);   

    useEffect(() => {

        axios.get(`${URL}api/part-list/${params.partId}`)
            .then((response) => {
                setPart(response.data.data); 
                setCodes(response.data.data.other_codes);
                setCar(response.data.data.car);
                setImages(response.data.data.images);
                
                let img = response.data.data.images;

                

                
          })
          
          ;

          

    }, [])

    useEffect(() => {
        if(gallery.length< images.length){
            images.map((image) => {
                    
                setGallery(arr => [...arr,{original: URL+image, thumbnail: URL+image}])
            })
        }

    },[images])





    return(
        <div className="d-flex justify-content-between flex-column-reverse flex-md-row">
            <div className="part_desc">
                
                <div><h3>{part.title}</h3></div>
                <div className="d-flex justify-content-between"><h3>Price: {part.price} €</h3>  
                <Button onClick={() => {
                    if(!localStorage.getItem('cart')){
                        localStorage.setItem('cart', JSON.stringify([{id: part.id, image: URL+images[0][0], title: part.title, price: part.price}]))
                    } else if(localStorage.getItem('cart')){
                        let arr = JSON.parse(localStorage.getItem('cart'));
                        arr.push({id: part.id, image: URL+images[0][0], title: part.title, price: part.price});
                        localStorage.setItem('cart', JSON.stringify([...new Map(arr.map(item => [item['id'],item])).values()]));
                        
                    }
                }}>Add to cart</Button></div>
                <h4>Part info: </h4>
                <dl>
                    
                    <div><dt>Condition:</dt><dd>{part.condition}</dd></div>
                    <div><dt>Original code:</dt><dd>{part.part_code}</dd></div>
                    <div><dt>Other codes:</dt><dd>
                            {codes.map((code) => {
                                
                                return(<p>
                                    {code.code}</p>
                                )
                            })}
                            
                    </dd></div>
                           
                
                    <div><dt>Comment:</dt><dd>{part.comment}</dd></div>
                    <div><dt>Category:</dt><dd>{part.category}</dd></div>


                </dl>
                <h4>Car info: </h4>
                <dl>
                    <div><dt>Car:</dt><dd>{part.manufacture}</dd></div>
                    <div><dt>Model:</dt><dd>{car.model}</dd></div>
                    <div><dt>Year:</dt><dd>{car.year}</dd></div>
                    <div><dt>Body type:</dt><dd>{car.body_type}</dd></div>
                    <div><dt>Steering wheel placement:</dt><dd>{car.wheel_placement}</dd></div>
                    <div><dt>Fuel type:</dt><dd>{car.fuel_type}</dd></div>
                    <div><dt>Engine displacement:</dt><dd>{car.engine_displacement} <>&#13220;</> </dd></div>
                    <div><dt>Engine code:</dt><dd>{car.engine_code}</dd></div>
                    <div><dt>Engine power:</dt><dd>{car.power} Kw</dd></div>
                    <div><dt>Km:</dt><dd>{car.km}</dd></div>
                    <div><dt>Color:</dt><dd>{car.color}</dd></div>



                </dl>
                </div>
                <div>

            </div>
            <div className="gallery-image">
            <ImageGallery
                items={gallery}
                showBullets={false}
                showIndex={true}
                showThumbnails={true}
                lazyLoad={false}
                showPlayButton={false}
                
            />
            </div>


           
        </div>
        
        


    )
}

export default ShowPart;