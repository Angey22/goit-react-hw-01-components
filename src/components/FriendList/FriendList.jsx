import PropTypes from 'prop-types';

import { FriendListItem } from 'components';

import { FriendListBox } from './FriendList.styled';

export const FriendList = ({list}) => {

  return (
    <FriendListBox>
      {list.map( item => (
      <FriendListItem {...item} key={item.id} />
      ))}
    </FriendListBox>
  );
};

FriendList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
