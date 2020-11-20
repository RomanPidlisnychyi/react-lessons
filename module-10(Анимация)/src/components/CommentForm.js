import React, { Component } from 'react';
import withAuthContext from './hoc/withAuthContext';

class CommentForm extends Component {
    state = {
        value: '',
        text: '',
    };

    // componentDidMount() {
    //     this.setState({
    //         value: this.props.auth.user ? this.props.user.auth.name : '',
    //     });
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     if (this.props.auth.user) {
    //         if (prevProps.auth.user !== this.props.auth.user) {
    //             this.setState({
    //                 value: this.props.auth.user.name,
    //             });
    //         }
    //     } else {
    //         if (this.state.value !== '') {
    //             this.setState({
    //                 value: '',
    //             });
    //         }
    //     }
    // }

    handlerInput = e => this.setState({ value: e.target.value });
    handlerTextArea = e => this.setState({ text: e.target.value });

    handlerSubmit = e => {
        e.preventDefault();
        const comment = {
            name: this.state.value,
            text: this.state.text,
        };

        this.setState({ value: '', text: '' });

        this.props.onAddComment(comment);
    };

    render() {
        return (
            <form onSubmit={this.handlerSubmit}>
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
                    <textarea
                        onChange={this.handlerTextArea}
                        value={this.state.text}
                        rows="10"
                    ></textarea>
                </label>
                <br />
                <button type="submit">Add comment</button>
            </form>
        );
    }
}

// export default withAuthContext(CommentForm);
export default CommentForm;
