import React from 'react';
import UserLoginButton from './UserLoginButton';
import UserPassword from './UserPassword';
import UserName from './UserName';

function UserLogin() {
    return (
        <div>
          <UserName />
          <UserPassword />
          <UserLoginButton />
        </div>
       
      );
    }
export default UserLogin
