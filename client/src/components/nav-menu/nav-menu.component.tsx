import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

import { toggleAuthForm, toggleNavMenu } from '../../redux/UI/ui.actions';
import { LoginOrSignUpType } from '../../redux/UI/ui.types';

import ZomatoTextBlack from '../../images/zomato-text-black.png';
import './nav-menu.styles.css';

interface NavMenuProps {
  page: 'Home' | 'Mobile';
}

const NavMenu: FC<NavMenuProps> = ({ page }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickCloseBtn = () => {
    dispatch(toggleNavMenu());
  };

  const handleClickLogo = () => {
    dispatch(toggleNavMenu());
    navigate('/');
  };

  const handleClickAddRestaurant = () => {
    dispatch(toggleNavMenu());
    navigate('/partner-with-us');
  };

  const handleOpenAuthForm = (loginOrSignup: LoginOrSignUpType) => {
    dispatch(toggleAuthForm('Open', loginOrSignup));
  };

  return (
    <div className='nav-menu__nav-menu'>
      <div className='nav-menu__header'>
        <FaTimes
          className='nav-menu__close-btn'
          onClick={handleClickCloseBtn}
        />
        <img
          src={ZomatoTextBlack}
          alt='Zomato'
          className='nav-menu__img'
          onClick={handleClickLogo}
        />
      </div>

      <div className='nav-menu__nav-links'>
        {page === 'Home' && (
          <div
            className='nav-menu__nav-link'
            onClick={handleClickAddRestaurant}
          >
            Add restaurant
          </div>
        )}
        <div
          className='nav-menu__nav-link'
          onClick={() => handleOpenAuthForm('Login')}
        >
          Log in
        </div>
        <div
          className='nav-menu__nav-link'
          onClick={() => handleOpenAuthForm('Sign Up')}
        >
          Sign up
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
