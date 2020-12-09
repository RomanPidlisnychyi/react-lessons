import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes';

const Navigation = () => (
    <nav>
        {routes.map(route => (
            <Link key={route.label} to={route.path}>
                {route.label}
            </Link>
        ))}
    </nav>
);

export default Navigation;
