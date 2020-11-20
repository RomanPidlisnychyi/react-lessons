import React from 'react';
import Container from './styles';
import PropTypes from 'prop-types';

export default function Layout({ children }) {
    return <Container>{children}</Container>;
}

Layout.propTypes = {
    children: PropTypes.any,
};
