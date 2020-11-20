import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Comments from '../components/Comments';
import { CSSTransition } from 'react-transition-group';

export default class CommentsView extends Component {
    state = {
        showIt: false,
    };

    toggle = () => this.setState(prevState => ({ showIt: !prevState.showIt }));

    render() {
        const { showIt } = this.state;

        return (
            <>
                <button type="button" onClick={this.toggle}>
                    {showIt ? 'Hide' : 'Show'} comment
                </button>
                <CSSTransition
                    in={showIt}
                    classNames="fade"
                    timeout={250}
                    unmountOnExit
                >
                    <Comments />
                </CSSTransition>
            </>
        );
    }
}
