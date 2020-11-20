import React from 'react';
import withAuthContext from './hoc/withAuthContext';

const UserMenu = ({ auth }) => {
    // console.log(props);
    // console.log(auth);
    return (
        <>
            {auth.user ? (
                <div>
                    <img
                        src={auth.user.avatar}
                        width="200"
                        alt={auth.user.name}
                    />
                    <p>{auth.user.name}</p>
                    <button type="buttom" onClick={auth.onLogOut}>
                        Log Out
                    </button>
                </div>
            ) : (
                <button type="buttom" onClick={auth.onLogIn}>
                    Log In
                </button>
            )}
        </>
    );
};

export default withAuthContext(UserMenu);
