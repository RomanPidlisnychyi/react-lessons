import React from 'react';
import withThemeContext from './hoc/withThemeContext';
import styled from 'styled-components';

const Button = styled.button`
    background-color: ${props => (props.isLight ? 'white' : 'black')};
    color: ${props => (!props.isLight ? 'white' : 'black')};
    &:hover {
        cursor: pointer;
    }
`;

const ButtonControl = ({ theme: { theme, toggle } }) => {
    return (
        <Button type="button" onClick={toggle} isLight={theme}>
            {theme ? 'Dark' : 'Light'}
        </Button>
    );
};

export default withThemeContext(ButtonControl);
