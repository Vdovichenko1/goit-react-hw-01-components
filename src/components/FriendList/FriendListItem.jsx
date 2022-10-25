import PropTypes from 'prop-types';
import s from "./FriendList.module.css";
import { Status, Item, NameFriend } from "./FriendList.styled";

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <Item>
            <Status isOnline={isOnline}></Status>
            <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
            <NameFriend>{name}</NameFriend>
        </Item>
    )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}
