import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { FaTimes } from 'react-icons/fa';
import { IoArrowBack } from 'react-icons/io5';

import LoginForm from './login-form/login-form.component';
import SignupForm from './signup-form/signup-form.component';

import { toggleAuthForm } from '../../redux/UI/ui.actions';
import { LoginOrSignUpType } from '../../redux/UI/ui.types';

import './auth-form.styles.css';

interface AuthFormProps {
  loginOrSignup: LoginOrSignUpType;
}

const AuthForm: FC<AuthFormProps> = ({ loginOrSignup }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isEmailLogin, setIsEmailLogin] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (loginOrSignup === 'Login') {
      setIsLogin(true);
    } else if (loginOrSignup === 'Sign Up') {
      setIsLogin(false);
    } else {
      handleCloseForm();
    }
  }, [loginOrSignup]);

  const handleCloseForm = () => {
    dispatch(toggleAuthForm('Close', 'for closing'));
  };

  const handleEnableEmailLogin = () => {
    setIsEmailLogin(true);
  };
  const handleDisableEmailLogin = () => {
    setIsEmailLogin(false);
  };

  const handleSwitchToSignup = () => {
    setIsLogin(false);
  };
  const handleSwitchToLogin = () => {
    setIsLogin(true);
  };

  return (
    <div className='auth-form__container'>
      <div className='auth-form__header'>
        {isLogin && isEmailLogin && (
          <IoArrowBack
            className='auth-form__back-btn'
            onClick={handleDisableEmailLogin}
          />
        )}
        <h2>{isLogin ? 'Log in' : 'Sign up'}</h2>
        <FaTimes className='auth-form__close-btn' onClick={handleCloseForm} />
      </div>

      {isLogin ? (
        <LoginForm
          isEmailLogin={isEmailLogin}
          handleEnableEmailLogin={handleEnableEmailLogin}
          handleSwitchToSignup={handleSwitchToSignup}
        />
      ) : (
        <SignupForm handleSwitchToLogin={handleSwitchToLogin} />
      )}
    </div>
  );
};

export default AuthForm;
