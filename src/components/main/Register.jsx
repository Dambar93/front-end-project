import React, {useState} from 'react';
import axios from 'axios';
import apiClient from '../../services/api';
import { Redirect } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [secondPassword, setSecondPassword] = useState('');
    const [birthday, setBirthday] = useState('');
    const [registration, setRegistration] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        apiClient.post('api/register',{
            name: name,
            email: email,
            password: password,
            second_password: secondPassword,
            birthday: birthday
        }        
        ).then(response=> {
            if (response.status === 200) {
                setRegistration(true);
               
                
            }

        }).catch(error => {
            
            setError(error.response.data.message);
        })
    }
    if(registration) {
        return (
            
            navigate('/login')
        )
    }
    return (
        <div>
            <h1>Register</h1>
            <p style={{color: 'red'}}>{error}</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                /> <br></br>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                /> <br></br>
                <input
                    type="date"
                    name="birthday"
                    value={birthday}
                    onChange={e => setBirthday(e.target.value)}
                    required
                /> <br></br>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                /> <br></br>
                <input
                    type="password"
                    name="password"
                    placeholder="Repeat Password"
                    value={secondPassword}
                    onChange={e => setSecondPassword(e.target.value)}
                    required
                /> <br></br>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
export default Register;