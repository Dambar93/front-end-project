import React, {useState, useEffect} from "react";
import { Button } from "react-bootstrap";


const Home = () => {


    return (
        <div>
            <div style={{position: "relative"}}>
                <img src="main.jpeg" alt="" className="img-fluid"/>
                <Button variant="secondary" style={{position: "absolute", top: "50%", left: "40%", right: "40%"}}><a href="/new-parts" style={{color: "white"}}>New parts</a></Button>
                <Button variant="secondary" style={{position: "absolute", top: "60%", left: "40%", right: "40%"}}><a href="/used-parts" style={{color: "white"}}>Used parts</a></Button>
            </div>
        </div>


            

        
    )
        }

export default Home;