import React, { Component } from 'react';
import {
    CSSTransition,
    TransitionGroup,
    SwitchTransition,
} from 'react-transition-group';
import styled from 'styled-components';

const ImageContainer = styled.div`
    position: relative;
    width: 900px;
    height: 900px;
    overflow: hidden;
`;

const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const images = [
    'https://pixabay.com/get/55e2d3474a56a414f6da8c7dda793679103edce757576c48732f78d59744c45fba_1280.jpg',
    'https://pixabay.com/get/5fe8d646434fad0bffd8992cc62f327f173ddae34e507749762e7bdd964ac7_1280.jpg',
    'https://pixabay.com/get/57e6d1444d55a914f6da8c7dda793679103edce757576c48732f78d59744c45fba_1280.jpg',
    'https://pixabay.com/get/55e2d6414c50b108f5d084609629307b143ddce1554c704f752c7ad49e4cc351_1280.jpg',
];

export default class Swiper extends Component {
    state = {
        items: images,
        selectImageIndex: 0,
    };

    showPrev = () =>
        this.setState(prevState => ({
            selectImageIndex: prevState.selectImageIndex - 1,
        }));

    showNext = () =>
        this.setState(prevState => ({
            selectImageIndex: prevState.selectImageIndex + 1,
        }));

    getImage = () => this.state.items[this.state.selectImageIndex];

    render() {
        const { items, selectImageIndex } = this.state;
        const isOnFirstSlide = selectImageIndex === 0;
        const isOnLastSlide = selectImageIndex === items.length - 1;
        const image = this.getImage();

        return (
            <div>
                <button
                    type="button"
                    disabled={isOnFirstSlide}
                    onClick={this.showPrev}
                >
                    prev
                </button>
                <button
                    type="button"
                    disabled={isOnLastSlide}
                    onClick={this.showNext}
                >
                    next
                </button>
                <ImageContainer>
                    <SwitchTransition>
                        <CSSTransition
                            key={image}
                            classNames="swiper"
                            timeout={250}
                        >
                            <Image src={image} alt="Cat" />
                        </CSSTransition>
                    </SwitchTransition>
                </ImageContainer>
            </div>
        );
    }
}
