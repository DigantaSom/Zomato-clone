import FoodFilters from '../food-filters/food-filters.component';
import Slideshow from '../slideshow/slideshow.component';
import RestaurantList from '../restaurant-list/restaurant-list.component';

import restaurants from 'src/constants/restaurants/restaurants.constant';

const OrderOnline = () => {
  return (
    <div>
      <FoodFilters />

      <Slideshow slideshowType='order' />
      <Slideshow slideshowType='brands' />

      <div className='app__container'>
        <RestaurantList
          title='Order food online in Kolkata'
          restaurants={restaurants['Delivery']}
        />
      </div>
    </div>
  );
};

export default OrderOnline;
