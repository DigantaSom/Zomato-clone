import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

import { toggleNavMenu } from '../../redux/UI/ui.actions';

import Logo from '../../images/zomato-text-black.png';
import './mobile-page-navbar.styles.css';

const MobilePageNavbar = () => {
  const dispatch = useDispatch();

  return (
    <div className='mobile-page-navbar__container'>
      <div className='mobile-page-navbar__inner-container'>
        <Link to='/'>
          <img className='moble-page-navbar__logo' src={Logo} alt='Zomato' />
        </Link>
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
        <Link to='/'>
          <img className='moble-page-navbar__logo' src={Logo} alt='Zomato' />
        </Link>
      </div>
    </div>
  );
};

export default MobilePageNavbar;
