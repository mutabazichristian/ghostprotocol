import React, { useState } from 'react';

function SignupPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [reapeatPassword, setRepeatePassword] = useState('');

    const handleSubmit = () => {
        console.log('tryna submit the values huh?',name,email,password,reapeatPassword);
    }
    return (
        <div>
            <p>this is the sign in page</p>
            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td><label htmlFor="">Name </label></td>
                        <td><input type="text" name='name' onChange={e => { setName(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Email</label></td>
                        <td><input type="email" name="email" id="signup-email" onChange={e => setEmail(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Password</label></td>
                        <td><input type="password" name='password' onChange={e => setPassword(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Repeat Password</label></td>
                        <td><input type="password" name='reapeatPassword' onChange={e => setRepeatePassword(e.target.value)} /></td>
                    </tr>
                </table>
            </form>
        </div>
    );
}

export default SignupPage;