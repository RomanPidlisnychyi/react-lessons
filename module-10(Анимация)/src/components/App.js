import React, { Component } from 'react';
import Patterns from '../views/Patterns';
import UserMenu from './UserMenu';
import CommentForm from './CommentForm';
import AuthContext from '../contexts/Auth';
import ThemeContext from '../contexts/ThemeContext';
import ButtonControl from './ButtonControl';
import Comments from './Comments';
import routes from '../routes';
import { Route, Switch } from 'react-router-dom';
import AppBar from './AppBar';

export default class App extends Component {
    render() {
        return (
            <>
                <AuthContext>
                    <AppBar />
                    <Switch>
                        {routes.map(route => (
                            <Route key={route.label} {...route} />
                        ))}
                    </Switch>
                </AuthContext>
                {/* <AuthContext>
                    <Patterns />
                    <UserMenu />
                    <CommentForm />
                </AuthContext>
                <ThemeContext>
                    <ButtonControl />
                </ThemeContext>
                <Comments /> */}
            </>
        );
    }
}
