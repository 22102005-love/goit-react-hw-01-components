import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.FriendListItem}>
      <span
        className={s.stat}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      >
        {isOnline}
      </span>
      <img className={s.avatar} src={avatar} alt={name} width="55" />
      <p className={s.name}>{name}</p>
    </li>
  );
};
FriendListItem.propType = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
