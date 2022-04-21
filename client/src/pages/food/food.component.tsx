import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import SearchBar from '../../components/search-bar/search-bar.component';
import AuthLinks from '../../components/auth-links/auth-links.component';
import NavbarSmall from '../../components/navbar-small/navbar-small.component';

import ZomatoLogoBlack from '../../images/zomato-text-black.png';

import './food.styles.css';

const FoodPage = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <div className='app__container'>
      <div className='food-page__header'>
        <div className='food-page__header-inner'>
          <Link to='/'>
            <img
              src={ZomatoLogoBlack}
              alt='Zomato'
              className='food-page__header-logo'
            />
          </Link>
          <div className='food-page__header-searchbar-container'>
            <SearchBar
              searchText={searchText}
              onChangeSearchText={e => setSearchText(e.target.value)}
            />
          </div>
          <div className='food-page__header-auth-links'>
            <AuthLinks />
          </div>
        </div>
        {/* here, NavbarSmall component will only render when screen width is 850px or below */}
        <NavbarSmall page='Food' />
      </div>

      <Outlet />
    </div>
  );
};

export default FoodPage;
