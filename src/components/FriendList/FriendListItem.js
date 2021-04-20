const FriendListItem = ({ avatar, name, isOnline }) => {
  console.log(avatar);
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

export default FriendListItem;
