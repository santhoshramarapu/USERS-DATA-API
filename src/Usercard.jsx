import React from 'react';

const UserCard = ({ username, email, address }) => {
  return (
    <div className="user-card">
      <p className='name'>Username: {username}</p>
      <p className='email'>Email: {email}</p>
      <p className='address'>Address: {address.street}, {address.suite}, {address.city}, {address.zipcode}</p>
    </div>
  );
};

export default UserCard;
