import React from 'react';
import RegisterName from './RegisterName';
import RegisterMail from './RegisterMail';
import RegisterPassword from './RegisterPassword';
import UserRegisterButton from './UserRegisterButton';

function Register() {
    return (
        <div>
          <RegisterName />
          <RegisterMail />
          <RegisterPassword />
          <UserRegisterButton />
        </div>
       
      );
    }
export default Register
