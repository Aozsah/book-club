import React from 'react';
import RegisterName from './RegisterName';
import RegisterMail from './RegisterMail';
import RegisterPassword from './RegisterPassword';
import SubmitButton from '../../../Modules/SubmitButton';

function Register() {
    return (
        <div>
          <RegisterName />
          <RegisterMail />
          <RegisterPassword />
          <SubmitButton />
        </div>
       
      );
    }
export default Register
