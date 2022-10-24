import PropTypes from 'prop-types';
import { ProfileCss, Description, Avatar, Name, Tag, Location,Stats, List, Label, Quantity } from "./Profile.styled";

export const Profile = ({ username, tag, location, avatar, followers, views,likes }) => {
  return (
    <ProfileCss>
      <Description>
        <Avatar
          src={avatar}
          alt={username}
        />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <List>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </List>
        <List>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </List>
        <List>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </List>
      </Stats>
    </ProfileCss>
  );
};


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
}