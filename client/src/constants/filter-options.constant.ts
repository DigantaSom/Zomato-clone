import { FilterOptionI } from '../types';

const filterOptions: FilterOptionI[] = [
  {
    id: '1_all_filters',
    name: 'Filters',
    iconName: 'IoFilter',
    isDropdown: false,
  },
  {
    id: '2_delivery_time',
    name: 'Delivery Time',
    iconName: 'RiArrowUpDownFill',
    isDropdown: false,
  },
  {
    id: '3_rating_4_plus',
    name: 'Rating: 4.0+',
    isDropdown: false,
  },
  {
    id: '4_pure_veg',
    name: 'Pure Veg',
    isDropdown: false,
  },
  {
    id: '5_cuisines',
    name: 'Cuisines',
    isDropdown: true,
  },
  {
    id: '6_more_filters',
    name: 'More Filters',
    isDropdown: true,
  },
];

export default filterOptions;
