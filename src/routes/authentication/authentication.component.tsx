import { useState } from 'react';
import type { ChangeEvent } from 'react';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import LoginForm from '../../components/login-form/login-form.component';

const SignIn = () => {
  const [loginType, setLoginType] = useState('login');

  const handleLoginType = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (event.target.value === loginType) {
      return;
    }
    console.log(value);
    setLoginType(value);
  };

  return (
    <div className='authentication-container block'>
      <form className='mb-8'>
        <fieldset>
          <legend className='sr-only'>Login or Register?</legend>
          <label className='mr-4'>
            <input
              className='mr-4'
              type='radio'
              onChange={handleLoginType}
              name='loginType'
              value='register'
              checked={loginType === 'register'}
            />
            Register
          </label>
          <label className='mr-4'>
            <input
              className='mr-4'
              type='radio'
              onChange={handleLoginType}
              name='loginType'
              value='login'
              defaultChecked={true}
              checked={loginType === 'login'}
            />
            Sign in
          </label>
        </fieldset>
      </form>
      {loginType === 'register' ? <SignUpForm /> : <LoginForm />}
    </div>
  );
};

export default SignIn;
