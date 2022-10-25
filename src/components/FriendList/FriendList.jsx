import { FriendListItem } from "./FriendListItem";
import { Friend } from "./FriendList.styled";

export const FriendList = ({ friends }) => {
    return (
        <Friend>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <FriendListItem key={id} avatar={avatar}  name={name} isOnline={isOnline}/>
        ))}
</Friend>
    )
}