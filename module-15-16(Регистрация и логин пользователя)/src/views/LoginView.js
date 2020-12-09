import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOperations from '../redux/auth/authOperations';

class LoginView extends Component {
    state = {
        email: '',
        password: '',
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onLogin({ ...this.state });
        this.setState({ email: '', password: '' });
    };

    render() {
        const { email, password } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Email:
                    <input
                        type="email"
                        onChange={this.handleChange}
                        value={email}
                        name="email"
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        onChange={this.handleChange}
                        value={password}
                        name="password"
                    />
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
        );
    }
}

export default connect(null, { onLogin: authOperations.logIn })(LoginView);
