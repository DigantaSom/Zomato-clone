import Collections from '../collections/collections.component';
import FoodFilters from '../food-filters/food-filters.component';
import RestaurantList from '../restaurant-list/restaurant-list.component';

import restaurants from 'src/constants/restaurants/restaurants.constant';
import collectionItems from 'src/constants/collection-items.constant';

import './dining-out.styles.css';

const DiningOut = () => {
  return (
    <div>
      <div className='dining-out__collections-container'>
        <div className='app__container'>
          <Collections collectionItems={collectionItems} />
        </div>
      </div>

      <FoodFilters />

      <div className='app__container'>
        <RestaurantList
          title='Dine-Out Restaurants in Kolkata'
          restaurants={restaurants['Dine-Out']}
        />
      </div>
    </div>
  );
};

export default DiningOut;
