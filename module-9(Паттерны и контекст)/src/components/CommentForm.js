import React, { Component } from 'react';
import withAuthContext from './hoc/withAuthContext';

class CommentForm extends Component {
    state = {
        value: '',
    };

    componentDidMount() {
        this.setState({
            value: this.props.auth.user ? this.props.user.auth.name : '',
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.auth.user) {
            if (prevProps.auth.user !== this.props.auth.user) {
                this.setState({
                    value: this.props.auth.user.name,
                });
            }
        } else {
            if (this.state.value !== '') {
                this.setState({
                    value: '',
                });
            }
        }
    }

    handlerInput = e => {
        this.setState({ value: e.target.value });
    };

    render() {
        return (
            <form>
                <label>
                    <span>Name</span>
                    <br />
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handlerInput}
                    />
                </label>
                <br />
                <label>
                    <span>Message</span>
                    <br />
                    <textarea rows="10"></textarea>
                </label>
            </form>
        );
    }
}

export default withAuthContext(CommentForm);
