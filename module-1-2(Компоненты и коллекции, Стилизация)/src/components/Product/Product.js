import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './Product.module.css';

const QuantityValue = styled.span`
    font-weight: 500;
    color: ${props => (props.inStock ? 'green' : 'red')};
`;

function Product({ imgUrl, name, price, quantity }) {
    const isInStock = quantity < 50;

    console.log(isInStock);

    const { avalible, notAvalible, container } = styles;

    // const quantityClasses = [styles.quantity, inStock ? avalible : notAvalible];
    // const finalClasses = quantityClass.join(' ');

    // const quantityClass = isInStock ? avalible : notAvalible;

    return (
        <div className={container}>
            <img src={imgUrl} alt={name} width="640"></img>
            <h2 className={styles.name}>{name}</h2>
            <p> Price: {price} $</p>
            <p>
                Quantity:
                <QuantityValue inStock={isInStock}>
                    {isInStock ? ' In stock' : ' Few left'}
                </QuantityValue>
            </p>
            <button type="button">Add to cart</button>
        </div>
    );
}

Product.defaultProps = {
    imgUrl:
        'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
};

Product.propTypes = {
    imgUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
};

export default Product;
