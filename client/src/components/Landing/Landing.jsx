import { useState } from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { BsSearch } from 'react-icons/bs';

import Logo from '../../images/zomato-logo.png';
import './Landing.css';

const Landing = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <div className='landing-container'>
      <nav className='container'>
        <div className='nav-left'>Get the App</div>
        <div className='nav-links'>
          <div className='nav-link'>Add restaurant</div>
          <div className='nav-link'>Log in</div>
          <div className='nav-link'>Sign up</div>
        </div>
      </nav>
      <div className='landing-info'>
        <div className='logo'>
          <img src={Logo} alt='Logo' />
        </div>
        <h2>Discover the best food & drinks in Kolkata</h2>
        <div className='input-container'>
          <div className='select-container'>
            <HiLocationMarker className='location-icon' />
            <select name='area'>
              <option value='Park Street'>Park Street area</option>
              <option value='Newtown'>Newtown area</option>
            </select>
          </div>
          <div className='input-divider'>
            <span>|</span>
            <BsSearch className='search-icon' />
          </div>
          <input
            type='text'
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            placeholder='Search for restaurant, cuisine or a dish'
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;