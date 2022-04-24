import { FC } from 'react';
import { AiOutlineCaretDown } from 'react-icons/ai';

import { FilterOptionI } from '../../../types';

import './filter-option.styles.css';

interface FilterOptionProps {
  option: FilterOptionI;
}

const FilterOption: FC<FilterOptionProps> = ({
  option: { name, iconName: icon, isDropdown },
  children,
}) => {
  return (
    <div className='filter-option__container'>
      {!icon ? null : (
        <div className='filter-option__primary-icon-container'>{children}</div>
      )}
      <span>{name}</span>
      {!isDropdown ? null : (
        <AiOutlineCaretDown className='filter-option__dropdown-icon' />
      )}
    </div>
  );
};

export default FilterOption;
