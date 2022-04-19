import { useDispatch } from 'react-redux';
import { GiHamburgerMenu } from 'react-icons/gi';

import { toggleNavMenu } from '../../redux/UI/ui.actions';

import GetApp from '../get-app/get-app.component';

import Logo from '../../images/zomato-text-black.png';
import './mobile-page-navbar.styles.css';

const MobilePageNavbar = () => {
  const dispatch = useDispatch();

  return (
    <div className='mobile-page-navbar__container'>
      <div className='mobile-page-navbar__inner-container'>
        <img className='moble-page-navbar__logo' src={Logo} alt='Zomato' />
        <div className='mobile-page-navbar__links'>
          <div className='mobile-page-navbar__link' onClick={() => {}}>
            Log in
          </div>
          <div className='mobile-page-navbar__link' onClick={() => {}}>
            Sign up
          </div>
        </div>
      </div>
      <div className='moblie-page-navbar__inner-container--sm'>
        <div
          className='mobile-page-navbar__hamburger'
          onClick={() => dispatch(toggleNavMenu())}
        >
          <GiHamburgerMenu />
        </div>
        <img className='moble-page-navbar__logo' src={Logo} alt='Zomato' />
      </div>

      {/* FIXME: with dynamic style in this component */}
      <GetApp />
    </div>
  );
};

export default MobilePageNavbar;
