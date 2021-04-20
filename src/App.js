import React from 'react';
import Profile from './components/Profile/profile';
import user from './user.json';
import Statistics from './components/Statistics/statistics';
import statisticalData from './statistical-data.json';
import FriendList from './components/FriendList/friendList';
import friends from './friends.json';

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
