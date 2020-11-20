import React, { Component, createContext } from 'react';

const Context = createContext();

export default class ThemeContext extends Component {
    static Consumer = Context.Consumer;

    themeToggle = () =>
        this.setState(prevState => ({ theme: !prevState.theme }));

    state = {
        theme: false,
        toggle: this.themeToggle,
    };
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}
