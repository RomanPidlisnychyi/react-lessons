import React, { Component } from 'react';

export default class SearchForm extends Component {
    state = {
        query: '',
    };

    handleChange = e => {
        this.setState({ query: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.query);
        this.setState({ query: '' });
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Enter search query
                    <input
                        type="text"
                        value={this.state.query}
                        onChange={this.handleChange}
                    />
                </label>

                <button type="submit">Search</button>
            </form>
        );
    }
}
