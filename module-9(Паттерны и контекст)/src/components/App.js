import React, { Component } from 'react';
import Patterns from '../views/Patterns';
import UserMenu from './UserMenu';
import CommentForm from './CommentForm';
import AuthContext from '../contexts/Auth';
import ThemeContext from '../contexts/ThemeContext';
import ButtonControl from './ButtonControl';

export default class App extends Component {
    render() {
        return (
            <>
                <AuthContext>
                    <Patterns />
                    <UserMenu />
                    <CommentForm />
                </AuthContext>
                <ThemeContext>
                    <ButtonControl />
                </ThemeContext>
            </>
        );
    }
}
