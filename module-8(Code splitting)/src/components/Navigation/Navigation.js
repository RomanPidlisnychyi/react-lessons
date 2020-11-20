import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styled from 'styled-components';

const LinkElem = styled(NavLink)`
    display: block;
    color: red;
    &.active {
        color: green;
    }
`;

const Navigation = () => (
    <nav>
        {routes
            .filter(route => route.label === 'Home' || route.label === 'Shows')
            .map(route => (
                <LinkElem key={route.label} to={route.path} exact>
                    {route.label}
                </LinkElem>
            ))}
    </nav>
);

// const Navigation = () => (
//     <ul>
//         <li>
//             <LinkElem
//                 to={routes.find(route => route.label === 'Home').path}
//                 exact
//             >
//                 Home
//             </LinkElem>
//         </li>
//         <li>
//             <LinkElem to={routes.find(route => route.label === 'Shows').path}>
//                 Shows
//             </LinkElem>
//         </li>
//     </ul>
// );

export default Navigation;
