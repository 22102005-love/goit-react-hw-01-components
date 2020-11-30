import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(friend => (
        <li key={friend.id} className={s.FriendListItem}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

FriendList.propType = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
