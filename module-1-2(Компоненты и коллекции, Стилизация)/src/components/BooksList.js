import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.ul`
    outline: 1px solid red;
    margin: 0;
    padding: 0;
`;

const ListItem = styled.ul`
    list-style: none;
    background-color: teal;
    margin-bottom: 10px;
    &:hover {
        background-color: palevioletred;
    }
    &:last-child {
        margin-bottom: 0;
    }
`;

function BooksList({ books }) {
    return (
        <List>
            {books.map(book => (
                <ListItem key={book.id}>{book.name}</ListItem>
            ))}
        </List>
    );
}

BooksList.propTypes = {
    books: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

export default BooksList;
