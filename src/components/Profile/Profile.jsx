import PropTypes from 'prop-types';
import { ProfileCss, Description, Avatar, Name, Tag, Location,Stats, List, Label, Quantity } from "./Profile.styled";

export const Profile = ({ username, tag, location, avatar, stats }) => {
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
          <Quantity>{stats.followers}</Quantity>
        </List>
        <List>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </List>
        <List>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
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
  stats: PropTypes.object.isRequired,
}