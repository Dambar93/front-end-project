import React, {useState, useEffect} from "react";
import { Button } from "react-bootstrap";


const Home = () => {


    return (
        <div>
            <div style={{position: "relative"}}>
                <img src="main.jpeg" alt="" className="img-fluid"/>
                <div style={{position: "absolute", top: "50%", left: "30%", right: "30%", display: 'grid'}}>
                    <Button style={{ marginBottom: '10px'}} variant="secondary" ><a href="/new-parts" style={{color: "white"}}>New parts</a></Button>
                    <Button variant="secondary" ><a href="/used-parts" style={{color: "white"}}>Used parts</a></Button>
                </div>
                
            </div>
        </div>


            

        
    )
        }

export default Home;