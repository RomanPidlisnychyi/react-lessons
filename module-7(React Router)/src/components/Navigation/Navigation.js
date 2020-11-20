import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styled from 'styled-components';

const LinkElem = styled(NavLink)`
    color: red;
    &.active {
        color: green;
    }
`;

const Navigation = () => (
    <ul>
        <li>
            <LinkElem to={routes.home} exact>
                Home
            </LinkElem>
        </li>
        <li>
            <LinkElem to={routes.shows}>Shows</LinkElem>
        </li>
    </ul>
);

export default Navigation;
