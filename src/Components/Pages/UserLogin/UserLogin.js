import React from 'react';
import SubmitButton from '../../../Modules/SubmitButton';
import UserPassword from './UserPassword';
import UserName from './UserName';

function UserLogin() {
    return (
        <div>
          <UserName />
          <UserPassword />
          <SubmitButton />
        </div>
       
      );
    }
export default UserLogin
