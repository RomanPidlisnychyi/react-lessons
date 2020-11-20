import React, { Component, createContext } from 'react';
import userApi from '../services/userApi';

const Context = createContext();

export default class AuthContext extends Component {
    static Consumer = Context.Consumer;

    logIn = () => userApi.fetchUser().then(user => this.setState({ user }));

    logOut = () => this.setState({ user: null });

    state = {
        user: null,
        onLogIn: this.logIn,
        onLogOut: this.logOut,
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}
