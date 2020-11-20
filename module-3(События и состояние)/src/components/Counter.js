import React, { Component } from 'react';

export default class Counter extends Component {
    static propsTypes = {};

    static defaultProps = {};

    render() {
        // console.log(this.props);
        return (
            <div>
                Counter
                <button
                    type="increment"
                    onClick={event => {
                        console.log(event.target);

                        // const target = event.target;

                        // setTimeout(() => {
                        //     console.log(target);
                        // }, 500);
                    }}
                >
                    Increment
                </button>
            </div>
        );
    }
}
