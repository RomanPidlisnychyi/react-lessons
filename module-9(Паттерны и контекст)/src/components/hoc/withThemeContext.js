import React from 'react';
import ThemeContext from '../../contexts/ThemeContext';

const withThemeContext = WrappedComponent => {
    return function WithThemeContext(props) {
        return (
            <ThemeContext.Consumer>
                {context => <WrappedComponent {...props} theme={context} />}
            </ThemeContext.Consumer>
        );
    };
};

export default withThemeContext;
