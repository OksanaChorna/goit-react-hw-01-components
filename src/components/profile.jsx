import React from 'react';


const Profile = ({ name, tag, location, avatar, stats }) => {
    return (
    <div className="profile">
        <div className="description">
            <img
            src={avatar}
            alt="Аватар пользователя"
            className="avatar"
            />
                <p className="name">{name}</p>
                <p className="tag">@{tag}</p>
                <p className="location">{location}</p>
        </div>

        <ul className="stats">
            <li>
            <span className="label">Followers</span>
            <span className="quantity">{stats.followers}</span>
            </li>
            <li>
            <span className="label">Views</span>
                    <span className="quantity">{stats.views}</span>
            </li>
            <li>
            <span className="label">Likes</span>
                    <span className="quantity">{stats.likes}</span>
            </li>
        </ul>
    </div>
    );
};

Profile.defaultProps = {
    avatar: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
}

export default Profile;