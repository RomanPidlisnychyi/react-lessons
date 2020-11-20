import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.section``;

function Layout({ children }) {
    return <Container>{children}</Container>;
}

Layout.propTypes = {
    children: PropTypes.any,
};

export default Layout;
