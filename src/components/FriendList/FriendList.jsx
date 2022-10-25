import { FriendListItem } from "./FriendListItem";
import { Friend } from "./FriendList.styled";
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
    return (
        <Friend>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <FriendListItem key={id} avatar={avatar}  name={name} isOnline={isOnline}/>
        ))}
</Friend>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })).isRequired,
}