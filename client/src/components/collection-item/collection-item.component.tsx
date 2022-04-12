import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineCaretRight } from 'react-icons/ai';

import { CollectionItemI } from '../../types';
import './collection-item.styles.css';

interface CollectionItemProps {
  collection: CollectionItemI;
}

const CollectionItem: FC<CollectionItemProps> = ({
  collection: { title, imagePath, numberOfPlaces },
}) => {
  return (
    <Link to='/'>
      <div className='collection-item__tile'>
        <img src={imagePath} alt={title} className='collection-item__image' />
        <div className='collection-item__overlay'></div>
        <div className='collection-item__info'>
          <p>{title}</p>
          <div className='collection-item__subheading'>
            <h6>{numberOfPlaces} Places</h6>
            <AiOutlineCaretRight className='collection-item__icon' />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CollectionItem;
