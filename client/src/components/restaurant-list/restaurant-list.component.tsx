import { FC } from 'react';

import RestaurantTile from './restaurant-tile/restaurant-tile.component';

import { RestaurantValueType } from 'src/types';
import './restaurant-list.styles.css';

interface RestaurantListProps {
  title: string;
  restaurants: RestaurantValueType[];
}

const RestaurantList: FC<RestaurantListProps> = ({ title, restaurants }) => {
  return (
    <div className='restaurant-list__container'>
      <h2 className='food-page__heading'>{title}</h2>

      <div className='restaurant-list__restaurants'>
        {restaurants.map(restaurant => (
          <RestaurantTile key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
