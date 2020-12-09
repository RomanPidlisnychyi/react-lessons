import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';
import UserMenu from './UserMenu';

class UserMenuContainer extends Component {
    componentDidMount() {
        this.props.getTasks();
        // this.props.getCurrentUser();
    }

    render() {
        return <UserMenu {...this.props} />;
    }
}

const mapStateToProps = state => ({
    name: authSelectors.getUserName(state),
    userId: authSelectors.getUserId(state),
    avatar:
        'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-7.jpg',
});

const mapDispatchToProps = {
    onLogout: authOperations.logOut,
    getTasks: authOperations.getAllTasks,
    getCurrentUser: authOperations.getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenuContainer);
