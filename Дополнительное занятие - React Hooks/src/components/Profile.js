import React, { useContext, useImperativeHandle } from 'react';
import authContext from './context/authContext';

export default function Profile() {
    const auth = useContext(authContext);
    return (
        <div>
            {auth.user ? (
                <>
                    <button type="button" onClick={auth.logOut}>
                        LogOut
                    </button>
                    <p>{auth.user}</p>
                </>
            ) : (
                <button type="button" onClick={auth.logIn}>
                    LogIn
                </button>
            )}
        </div>
    );
}
