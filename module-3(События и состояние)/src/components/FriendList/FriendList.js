import React from 'react';
import PropTypes from 'prop-types';
import List from './FriendListStyles';
import FriendListItem from '../FriendListItem/FriendListItem';

function FriendList({ friends }) {
    return (
        <>
            <List>
                {friends.map(friend => (
                    <FriendListItem
                        key={friend.id}
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                ))}
            </List>
        </>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number,
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline: PropTypes.bool,
        }).isRequired,
    ),
};

export default FriendList;
