import Slideshow from '../slideshow/slideshow.component';

import './order-online.styles.css';

const OrderOnline = () => {
  return (
    <div className='order-online__container'>
      <Slideshow slideshowType='order' />
      <Slideshow slideshowType='brands' />
    </div>
  );
};

export default OrderOnline;
