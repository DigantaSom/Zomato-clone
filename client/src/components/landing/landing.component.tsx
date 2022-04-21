import { useState } from 'react';

import Navbar from '../navbar/navbar.component';
import SearchBar from '../search-bar/search-bar.component';

import Logo from '../../images/zomato-name.png';

import './landing.styles.css';

const Landing = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <div className='landing__container'>
      <Navbar />
      <div className='landing__info'>
        <div className='landing__logo'>
          <img src={Logo} alt='Logo' />
        </div>
        <h2 className='landing__title'>
          Discover the best food & drinks in Kolkata
        </h2>
        <SearchBar
          searchText={searchText}
          onChangeSearchText={e => setSearchText(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Landing;
