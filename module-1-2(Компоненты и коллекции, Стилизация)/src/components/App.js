import React from 'react';
import Product from './Product/Product';
import Section from './Section';
import BooksList from './BooksList';
import favouriteBooks from '../books.json';

export default function App() {
    return (
        <>
            <BooksList books={favouriteBooks} />
            <Section title="Best sells products">
                <Product
                    // imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
                    name="Tacos With Lime"
                    price={10.99}
                    quantity={30}
                />
            </Section>
            <Section>
                <Product
                    imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
                    name="Fries and Burger"
                    price={14.29}
                    quantity={100}
                />
            </Section>
        </>
    );
}
