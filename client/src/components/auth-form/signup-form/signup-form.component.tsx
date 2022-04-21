import { ChangeEvent, FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

import DefaultButton from '../../default-button/default-button.component';
import OrContainer from '../or-container/or-container.component';

import Colors from '../../../constants/colors.constant';

import '../auth-form.styles.css';
import './signup-form.styles.css';

interface SignupFormProps {
  handleSwitchToLogin: () => void;
}

const SignupForm: FC<SignupFormProps> = ({ handleSwitchToLogin }) => {
  const [signupForm, setSignupForm] = useState({
    fullName: '',
    email: '',
  });
  const [isTnCagreed, setIsTnCagreed] = useState(false);

  const { fullName, email } = signupForm;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignupForm({
      ...signupForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateAccount = () => {};

  return (
    <>
      <input
        type='text'
        name='fullName'
        placeholder='Full Name'
        value={fullName}
        onChange={onChange}
        required
        className='auth-input login-input signup-input'
      />
      <input
        type='email'
        name='email'
        placeholder='Email'
        value={email}
        onChange={onChange}
        required
        className='auth-input login-input signup-input'
      />

      <div className='signup-form__tnc'>
        <input
          type='checkbox'
          name='tnc'
          checked={isTnCagreed}
          onChange={() => setIsTnCagreed(prevState => !prevState)}
          required
          className='signup-form__tnc-checkbox'
        />
        <small>
          I agree to Zomato's{' '}
          <Link to='#' style={{ color: Colors.zomatoSecondary }}>
            Terms of Services
          </Link>
          ,{' '}
          <Link to='#' style={{ color: Colors.zomatoSecondary }}>
            Privacy Policty
          </Link>{' '}
          and{' '}
          <Link to='#' style={{ color: Colors.zomatoSecondary }}>
            Content Policies
          </Link>
        </small>
      </div>

      <DefaultButton
        bgColor={Colors.zomatoSecondary}
        handleClick={handleCreateAccount}
        disabled={!fullName || !email || !isTnCagreed}
      >
        Create account
      </DefaultButton>

      <OrContainer />

      <div
        className='auth-form__login-btn signup-form__google-btn'
        onClick={() => {}}
      >
        <FcGoogle className='auth-form__login-icon' />
        <span>Continue with Google</span>
      </div>

      <p className='auth-form__switch-auth-para'>
        Already have an account?{' '}
        <span
          style={{ color: Colors.zomatoSecondary }}
          onClick={handleSwitchToLogin}
        >
          Log in
        </span>
      </p>
    </>
  );
};

export default SignupForm;
