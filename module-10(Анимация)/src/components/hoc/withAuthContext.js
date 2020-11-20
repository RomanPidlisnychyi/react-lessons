import React from 'react';
import AuthContext from '../../contexts/Auth';

const withAuthContext = WrappedComponent => {
    return function WithAuthContext(props) {
        return (
            <AuthContext.Consumer>
                {context => <WrappedComponent {...props} auth={context} />}
            </AuthContext.Consumer>
        );
    };
};

export default withAuthContext;
