import React, {useState} from 'react';
import apiClient from '../../services/api';
import {useNavigate} from 'react-router-dom';
const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        apiClient.post('api/get-token',{
            email: email,
            password: password
        }        
        ).then(response=> {
            if (response.status === 200) {
                console.log('Login Succesful');
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user_name", response.data.user_name);
                localStorage.setItem("user_id", response.data.user_id);
                localStorage.setItem("user_email", response.data.user_email);
                localStorage.setItem("loggedIn", true);
                setLogin(true);
               
                
            }

        }).catch(error => {
            setError(error.response.data.error);
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
            <p style={{color: 'red'}}>{error}</p>
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