import React from 'react';
import withAuthContext from './hoc/withAuthContext';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    height: 40px;
    align-items: center;
`;

const UserMenu = ({ auth }) => {
    // console.log(props);
    // console.log(auth);
    return (
        <>
            {auth.user ? (
                <Container>
                    <img
                        src={auth.user.avatar}
                        width="32"
                        alt={auth.user.name}
                    />
                    <p>{auth.user.name}</p>
                    <button type="buttom" onClick={auth.onLogOut}>
                        Log Out
                    </button>
                </Container>
            ) : (
                <button type="buttom" onClick={auth.onLogIn}>
                    Log In
                </button>
            )}
        </>
    );
};

export default withAuthContext(UserMenu);
