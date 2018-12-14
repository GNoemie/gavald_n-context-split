import React from 'react';
import UserContext from '../contexts/UserContext';

const UserProfile = () => (
  <UserContext.Consumer>
  {({ username }) => (
    <p>
      {username}
    </p>
  )}
  </UserContext.Consumer>
);

export default UserProfile;