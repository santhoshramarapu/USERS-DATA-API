import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './Usercard';
import './App.css'

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1 className='title'>User Details</h1>
      <div className="user-cards-container">
      {userData && userData.map(user => <UserCard username={user.username} email={user.email} address={user.address} />)}
    </div>
    </div>
  );
}

export default App;
