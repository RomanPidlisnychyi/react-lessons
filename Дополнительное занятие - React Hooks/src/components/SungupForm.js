import React, { useState } from 'react';

const SungupForm = () => {
    const [email, setEamil] = useState('');
    const [password, setPassword] = useState('');

    const updateEmail = e => {
        setEamil(e.target.value);
    };

    const updatePassword = e => {
        setPassword(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        alert(`${email}, ${password}`);
        setEamil('');
        setPassword('');
    };

    const avalibleFormat =
        email !== '' && password !== '' && password.length > 7;

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <span>Email</span>
                <input type="email" onChange={updateEmail} value={email} />
            </label>
            <br />
            <label>
                <span>Password</span>
                <input
                    type="password"
                    onChange={updatePassword}
                    value={password}
                />
            </label>
            <br />
            <button type="submit" disabled={!avalibleFormat}>
                SungUp
            </button>
        </form>
    );
};

export default SungupForm;
