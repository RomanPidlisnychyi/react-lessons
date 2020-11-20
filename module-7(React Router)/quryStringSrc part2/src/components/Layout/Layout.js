import React from 'react';
import Container from './styles';
import PropTypes from 'prop-types';
import Appbar from '../Appbar/Appbar';

const Layout = ({ children }) => (
    <Container>
        <Appbar />
        {children}
    </Container>
);

Layout.propTypes = {
    children: PropTypes.any,
};

export default Layout;
