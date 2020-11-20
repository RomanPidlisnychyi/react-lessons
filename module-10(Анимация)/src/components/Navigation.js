import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';
import UserMenu from './UserMenu';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 500px;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
`;

const MyLink = styled(NavLink)`
    margin-right: 10px;
    &:last-child {
        margin-right: 0;
    }
`;

const Navigation = () => (
    <Container>
        <div>
            {routes.map(route => (
                <MyLink key={route.label} to={route.path}>
                    {route.label}
                </MyLink>
            ))}
        </div>
        <UserMenu />
    </Container>
);

export default Navigation;
