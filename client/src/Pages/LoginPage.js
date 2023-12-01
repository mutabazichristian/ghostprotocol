import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '../API';

function LoginPage(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errormessage, setErrorMessage] = useState('');

    const navigate = useNavigate();
    const handleLogin = async (event) => {
        event.prevetDefault();
        console.log('tryna log in huh?')
        instance
            .post('/prompter/login', { email, password })
            .then(res => {
                console.log(res.body);
            })
            .catch(error => {
                console.log('error form server', error);
            })
    }
    return (
        <div>
            <p>
                This is the Log in Page
            </p>
            <form onSubmit={handleLogin} >
                <table>
                    <tr>
                        <td><label>Email</label></td>
                        <td><input type="email" onChange={e => { setEmail(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <td><label>Password</label></td>
                        <td><input type="password" onChange={e => { setPassword(e.target.value) }} /></td>
                    </tr>
                    <button type='submit'>Log in</button>
                </table>
            </form>
            {!!errormessage && <p style={{ color: 'red' }}>{errormessage}</p>}
        </div>
    );
}

export default LoginPage;