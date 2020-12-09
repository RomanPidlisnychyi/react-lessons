import React from 'react';
import { connect } from 'react-redux';
import { authSelectors } from '../redux/auth';
import Navigation from './Navigation';
import UserMenu from './UserMenu/UserMenuContainer';
const AppBar = ({ isAuthenticated }) => (
    <header>
        <Navigation />
        {isAuthenticated && <UserMenu />}
    </header>
);

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
