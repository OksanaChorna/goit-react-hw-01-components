import React from 'react';
import Profile from './components/Profile/Profile';
import user from './jsons/user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './jsons/statistical-data.json';
import FriendList from './components/FriendList/FriendList';
import friends from './jsons/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './jsons/transactions.json';

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
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
