import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { GiHamburgerMenu } from 'react-icons/gi';

import { toggleNavMenu, toggleAuthForm } from '../../redux/UI/ui.actions';
import { LoginOrSignUpType } from '../../redux/UI/ui.types';

import './navbar.styles.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpenAuthForm = (loginOrSignup: LoginOrSignUpType) => {
    dispatch(toggleAuthForm('Open', loginOrSignup));
  };

  return (
    <nav className='app__container navbar__nav'>
      <div className='navbar__nav-left'>
        <Link to='/mobile'>Get the App</Link>
      </div>
      <div
        className='navbar__hamburger'
        onClick={() => dispatch(toggleNavMenu())}
      >
        <GiHamburgerMenu />
      </div>
      <div className='navbar__nav-links'>
        <div
          className='navbar__nav-link'
          onClick={() => navigate('/partner-with-us')}
        >
          Add restaurant
        </div>
        <div
          className='navbar__nav-link'
          onClick={() => handleOpenAuthForm('Login')}
        >
          Log in
        </div>
        <div
          className='navbar__nav-link'
          onClick={() => handleOpenAuthForm('Sign Up')}
        >
          Sign up
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
