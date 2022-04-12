import { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../store/user/user.action';

import './login-form.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const clearFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
     try {
      dispatch(emailSignInStart(email, password));
      clearFormFields();
    } catch (error) {
      console.log('user sign in failed', error);
    }
  };

  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          inputOptions={{
            type: 'email',
            required: true,
            onChange: handleChange,
            name: 'email',
            value: email,
          }}
        />
        <FormInput
          label='Password'
          inputOptions={{
            type: 'password',
            required: true,
            onChange: handleChange,
            name: 'password',
            value: password,
          }}
        />
        <div className='buttons-container'>
          <Button buttonType='default' type='submit'>
            Sign In
          </Button>
          <Button
            type='button'
            buttonType='google-sign-in'
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
