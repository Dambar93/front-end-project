import React from "react";
import {useNavigate} from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    localStorage.setItem("token", false);
    return (
        navigate('/')
    )
}

export default Logout;