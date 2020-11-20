import React from 'react';
import PropTypes from 'prop-types';
import { Item, Status, Img, Name } from './FriendListItemStyles';

function FriendListItem({ avatar, name, isOnline }) {
    return (
        <>
            <Item>
                <Status isOnline={isOnline}></Status>
                <Img src={avatar} alt={name} width="96" />
                <Name>{name}</Name>
            </Item>
        </>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};

export default FriendListItem;
