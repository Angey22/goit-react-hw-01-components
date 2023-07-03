import PropTypes from 'prop-types';

import { getRandomHexColor } from '../../utils/randomColor';

import { FriendCard, OnlineIndicator, FriendImage, FriendName } from './FriendListItem.styled';

export const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <FriendCard>
      <OnlineIndicator isOnline={isOnline}></OnlineIndicator>
      <FriendImage src={avatar} alt={name} style={{
      backgroundColor: getRandomHexColor(),
      }} />
      <FriendName>{name}</FriendName>
    </FriendCard>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
