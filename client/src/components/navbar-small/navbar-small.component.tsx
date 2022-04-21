import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

import { toggleNavMenu } from '../../redux/UI/ui.actions';

import ZomatoLogoBlack from '../../images/zomato-text-black.png';

import './navbar-small.styles.css';

interface NavbarSmallProps {
  page: 'Food' | 'MobileApp';
}

/* 
  NavbarSmall component will only render when screen width is below 850px (FoodPage) or 768px (MobileAppPage), depending on the page  
*/
const NavbarSmall: FC<NavbarSmallProps> = ({ page }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={
        page === 'Food'
          ? 'navbar-small__container--from-food'
          : 'navbar-small__container--from-mobileapp'
      }
    >
      <div
        className='navbar-small__hamburger'
        onClick={() => dispatch(toggleNavMenu())}
      >
        <GiHamburgerMenu />
      </div>
      <Link to='/'>
        <img
          className='navbar-small__logo'
          src={ZomatoLogoBlack}
          alt='Zomato'
        />
      </Link>
    </div>
  );
};

export default NavbarSmall;
