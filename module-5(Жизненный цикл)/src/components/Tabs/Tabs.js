import React, { Component } from 'react';

export default class Tabs extends Component {
    state = {
        activeIdx: 0,
    };

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.activeIdx !== this.state.activeIdx;
    }

    setActiveTabIdx = inx => {
        this.setState({ activeIdx: inx });
    };

    render() {
        const tab = this.props.items[this.state.activeIdx];

        return (
            <>
                <div>
                    {this.props.items.map((item, index) => (
                        <button
                            key={item.label}
                            type="button"
                            index={index}
                            onClick={() => this.setActiveTabIdx(index)}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
                <div>
                    <h2>{tab.label}</h2>
                    <p>{tab.text}</p>
                </div>
            </>
        );
    }
}
