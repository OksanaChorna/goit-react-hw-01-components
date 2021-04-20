import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      {isOnline === true ? (
        <span className="status"></span>
      ) : (
        <span className="statusFalls"></span>
      )}
      <img className="avatar" src={avatar} alt={name} width={48} />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
