import { useState } from 'react';

import { HiLocationMarker } from 'react-icons/hi';
import { BsSearch } from 'react-icons/bs';

import Navbar from '../navbar/navbar.component';

import Logo from '../../images/zomato-name.png';
import Colors from '../../constants/colors.constant';
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
        <div className='landing__search-container'>
          <div className='landing__select-container'>
            <HiLocationMarker
              className='landing__location-icon'
              style={{ color: Colors.zomatoPink }}
            />
            <select name='area'>
              <option value='Park Street'>Park Street area</option>
              <option value='Newtown'>Newtown area</option>
            </select>
          </div>
          <div className='landing__input-divider'>
            <span>|</span>
            <BsSearch className='landing__search-icon' />
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
