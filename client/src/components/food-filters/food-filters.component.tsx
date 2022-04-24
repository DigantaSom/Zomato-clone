import { IoFilter } from 'react-icons/io5';
import { RiArrowUpDownFill } from 'react-icons/ri';

import FilterOption from './filter-option/filter-option.component';

import filterOptions from '../../constants/filter-options.constant';

import './food-filters.styles.css';

const FoodFilters = () => {
  const iconPasser = (iconName: string) => {
    if (iconName === 'IoFilter') {
      return <IoFilter />;
    } else if (iconName === 'RiArrowUpDownFill') {
      return <RiArrowUpDownFill />;
    }
  };

  return (
    <div className='food-filters__container'>
      {filterOptions.map(option => (
        <FilterOption key={option.id} option={option}>
          {!option.iconName ? null : iconPasser(option.iconName)}
        </FilterOption>
      ))}
    </div>
  );
};

export default FoodFilters;
