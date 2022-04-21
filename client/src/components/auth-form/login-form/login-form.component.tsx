import { FC, useState } from 'react';

import { FcGoogle } from 'react-icons/fc';
import { MdEmail } from 'react-icons/md';

import DefaultButton from '../../default-button/default-button.component';
import OrContainer from '../or-container/or-container.component';

import EmailLoginImg from '../../../images/email-login.png';

import Colors from '../../../constants/colors.constant';
import countryCodes from '../../../constants/country-codes.constant';

import '../auth-form.styles.css';
import './login-form.styles.css';

interface LoginFormProps {
  isEmailLogin: boolean;
  handleEnableEmailLogin: () => void;
  handleSwitchToSignup: () => void;
}

const LoginForm: FC<LoginFormProps> = ({
  isEmailLogin,
  handleEnableEmailLogin,
  handleSwitchToSignup,
}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const isOTPbuttonDisabled = !phoneNumber || phoneNumber.length < 10;

  return isEmailLogin ? (
    <>
      <div className='login-form__img'>
        <img src={EmailLoginImg} alt='Email Login' className='' />
      </div>
      <input
        type='email'
        name='email'
        placeholder='Email'
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        className='auth-input login-input'
      />
      <DefaultButton
        bgColor={Colors.zomatoSecondary}
        handleClick={() => {}}
        disabled={!email}
      >
        Send OTP
      </DefaultButton>
    </>
  ) : (
    <>
      <div className='auth-form__phone-input-container'>
        <select name='country-code' required>
          {countryCodes.map(code => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
        <input
          type='tel'
          name='phone'
          placeholder='Phone number'
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
          required
          className='auth-input phone-login-input'
        />
      </div>

      <DefaultButton
        bgColor={Colors.zomatoSecondary}
        handleClick={() => {}}
        disabled={isOTPbuttonDisabled}
      >
        Send OTP
      </DefaultButton>

      <OrContainer />

      <div className='auth-form__login-btn-container'>
        <div className='auth-form__login-btn' onClick={handleEnableEmailLogin}>
          <MdEmail
            className='auth-form__login-icon'
            style={{ color: Colors.zomatoSecondary }}
          />
          <span>Continue with Email</span>
        </div>
        <div className='auth-form__login-btn' onClick={() => {}}>
          <FcGoogle className='auth-form__login-icon' />
          <span>Continue with Google</span>
        </div>
      </div>

      <hr className='auth-form__hr' />

      <p className='auth-form__switch-auth-para'>
        New to Zomato?{' '}
        <span
          style={{ color: Colors.zomatoSecondary }}
          onClick={handleSwitchToSignup}
        >
          Create account
        </span>
      </p>
    </>
  );
};

export default LoginForm;
