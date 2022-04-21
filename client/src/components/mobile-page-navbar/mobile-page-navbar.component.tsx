import { Link } from 'react-router-dom';

import AuthLinks from '../auth-links/auth-links.component';
import NavbarSmall from '../navbar-small/navbar-small.component';

import Logo from '../../images/zomato-text-black.png';

import './mobile-page-navbar.styles.css';

const MobilePageNavbar = () => {
  return (
    <div className='mobile-page-navbar__container'>
      <div className='mobile-page-navbar__inner-container'>
        <Link to='/'>
          <img className='mobile-page-navbar__logo' src={Logo} alt='Zomato' />
        </Link>
        <div className='mobile-page-navbar__links'>
          <AuthLinks />
        </div>
      </div>
      {/* here, NavbarSmall component will only render when screen width is 768px or below */}
      <NavbarSmall page='MobileApp' />
    </div>
  );
};

export default MobilePageNavbar;
