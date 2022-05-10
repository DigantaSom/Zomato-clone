import Collections from '../collections/collections.component';
import FoodFilters from '../food-filters/food-filters.component';
import RestaurantList from '../restaurant-list/restaurant-list.component';

import { CollectionItemI } from 'src/types';

import restaurants from 'src/constants/restaurants/restaurants.constant';
import collectionItems from 'src/constants/collection-items.constant';

const DiningOut = () => {
  const collectionsToShow: CollectionItemI[] = collectionItems.filter(
    c => c.type === 'Top_4'
  );

  return (
    <div>
      <div className='food-page__collections-container'>
        <div className='app__container'>
          <Collections collectionItems={collectionsToShow} />
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
