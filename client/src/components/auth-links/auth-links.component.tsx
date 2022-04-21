import { useDispatch } from 'react-redux';

import { toggleAuthForm } from '../../redux/UI/ui.actions';
import { LoginOrSignUpType } from '../../redux/UI/ui.types';

import './auth-links.styles.css';

// This component has an external wrapper
const AuthLinks = () => {
  const dispatch = useDispatch();

  const handleOpenAuthForm = (loginOrSignup: LoginOrSignUpType) => {
    dispatch(toggleAuthForm('Open', loginOrSignup));
  };

  return (
    <>
      <div
        className='auth-links__link'
        onClick={() => handleOpenAuthForm('Login')}
      >
        Log in
      </div>
      <div
        className='auth-links__link'
        onClick={() => handleOpenAuthForm('Sign Up')}
      >
        Sign up
      </div>
    </>
  );
};

export default AuthLinks;
