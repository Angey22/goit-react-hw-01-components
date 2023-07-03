import PropTypes from 'prop-types';

import { Card, AvatarImg, Description, NameText, TagText, LocationText, StatsList, StatsItem, StatsItemLabel, StatsItemQuantity } from './Profile.styled';

export const Profile =({username, tag, location, avatar, stats}) => {
  const { followers, views, likes } = stats;

  return (
    <Card>
      <Description>
        <AvatarImg
          src={avatar}
          alt={username}
        />
        <NameText>{username}</NameText>
        <TagText>@{tag}</TagText>
        <LocationText>{location}</LocationText>
      </Description>

      <StatsList>
        <StatsItem>
          <StatsItemLabel>Followers</StatsItemLabel>
          <StatsItemQuantity>{followers}</StatsItemQuantity>
        </StatsItem>
        <StatsItem>
          <StatsItemLabel>Views</StatsItemLabel>
          <StatsItemQuantity>{views}</StatsItemQuantity>
        </StatsItem>
        <StatsItem>
          <StatsItemLabel>Likes</StatsItemLabel>
          <StatsItemQuantity>{likes}</StatsItemQuantity>
        </StatsItem>
      </StatsList>
    </Card>
  )
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    }).isRequired,
};
