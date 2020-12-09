import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../../../redux/auth';

const PablicRoute = ({ component: Component, isAuthenticated, ...rest }) => (
    <Route {...rest}>
        {props =>
            isAuthenticated ? <Redirect to="/" /> : <Component {...props} />
        }
    </Route>
);

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(PablicRoute);
