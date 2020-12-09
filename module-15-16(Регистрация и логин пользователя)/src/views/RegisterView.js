import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOperations from '../redux/auth/authOperations';

class RegisterView extends Component {
    state = {
        name: '',
        email: '',
        password: '',
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onRegistr({ ...this.state });
        this.setState({ name: '', email: '', password: '' });
    };

    render() {
        const { name, email, password } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        onChange={this.handleChange}
                        value={name}
                        name="name"
                    />
                </label>
                <br />
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
                <button type="submit">Register</button>
            </form>
        );
    }
}

export default connect(null, { onRegistr: authOperations.register })(
    RegisterView,
);
