import React, { Component } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

const users = [
    { name: 'Mango', hobby: 'HTML' },
    { name: 'Poly', hobby: 'CSS' },
    { name: 'Kiwi', hobby: 'JS' },
];

export default class CardsView extends Component {
    state = {
        items: users,
        activeIndex: 0,
    };

    getActiveUser = () => this.state.items[this.state.activeIndex];

    showPrev = () =>
        this.setState(prevState => ({
            activeIndex: prevState.activeIndex - 1,
        }));

    showNext = () =>
        this.setState(prevState => ({
            activeIndex: prevState.activeIndex + 1,
        }));

    render() {
        const { items, activeIndex } = this.state;
        const isOnFirstSlide = activeIndex === 0;
        const isOnLastSlide = activeIndex === items.length - 1;
        const user = this.getActiveUser();
        return (
            <>
                <button
                    type="button"
                    onClick={this.showPrev}
                    disabled={isOnFirstSlide}
                >
                    prev
                </button>
                <button
                    type="button"
                    onClick={this.showNext}
                    disabled={isOnLastSlide}
                >
                    next
                </button>
                <div className="card-container">
                    <SwitchTransition>
                        <CSSTransition
                            key={user.name}
                            classNames="card"
                            timeout={500}
                        >
                            <div className="card-box">
                                <h2>{user.name}</h2>
                                <p>Hobby: {user.hobby}</p>
                            </div>
                        </CSSTransition>
                    </SwitchTransition>
                </div>
            </>
        );
    }
}
