import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    /* display: flex; */
`;

export default function Layout({ children }) {
    return <Container>{children}</Container>;
}
