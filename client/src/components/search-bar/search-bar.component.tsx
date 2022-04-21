import { ChangeEvent, FC } from 'react';

import { BsSearch } from 'react-icons/bs';
import { HiLocationMarker } from 'react-icons/hi';

import Colors from '../../constants/colors.constant';

import './search-bar.styles.css';

interface SearchBarProps {
  searchText: string;
  onChangeSearchText: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: FC<SearchBarProps> = ({ searchText, onChangeSearchText }) => {
  return (
    <div className='search-bar__container'>
      <div className='search-bar__select-container'>
        <HiLocationMarker
          className='search-bar__location-icon'
          style={{ color: Colors.zomatoPink }}
        />
        <select name='area'>
          <option value='Park Street'>Park Street area</option>
          <option value='Newtown'>Newtown area</option>
        </select>
      </div>
      <div className='search-bar__input-divider'>
        <span>|</span>
        <BsSearch className='search-bar__search-icon' />
      </div>
      <input
        type='text'
        value={searchText}
        onChange={onChangeSearchText}
        placeholder='Search for restaurant, cuisine or a dish'
      />
    </div>
  );
};

export default SearchBar;
