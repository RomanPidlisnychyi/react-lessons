import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div>
        <h2>Page not found!</h2>
        <Link to="/">URL from Home page</Link>
    </div>
);

export default NotFound;
