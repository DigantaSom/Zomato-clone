import Collections from '../collections/collections.component';
import FoodFilters from '../food-filters/food-filters.component';
import RestaurantList from '../restaurant-list/restaurant-list.component';

import collectionItems from 'src/constants/collection-items.constant';
import restaurants from 'src/constants/restaurants/restaurants.constant';
import { CollectionItemI } from 'src/types';

const DrinksAndNightlife = () => {
  const collectionsToShow: CollectionItemI[] = collectionItems.filter(
    c => c.type === 'Nightlife'
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
          title='Nightlife Restaurants in Kolkata'
          restaurants={restaurants['Nightlife']}
        />
      </div>
    </div>
  );
};

export default DrinksAndNightlife;
