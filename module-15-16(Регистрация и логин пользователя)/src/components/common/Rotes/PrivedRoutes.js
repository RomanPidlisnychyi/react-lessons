import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../../../redux/auth';

const PrivedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
    return (
        <Route {...rest}>
            {props =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        </Route>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(PrivedRoute);
