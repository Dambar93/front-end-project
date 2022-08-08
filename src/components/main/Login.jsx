import React, {useState} from 'react';
import axios from 'axios';
import apiClient from '../../services/api';
import { Redirect } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        apiClient.post('api/getToken',{
            email: email,
            password: password
        }).then(response=> {

            
            if (response.status === 200) {
                console.log('Login Succesful');
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("loggedIn", true);
                setLogin(true);
               
                
            }

        })
    }
    if(login) {
        return (
            navigate('/')
        )
    }
    return (
        <div>
            <h1>Login</h1>
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
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
export default Login;