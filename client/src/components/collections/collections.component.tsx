import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineCaretRight } from 'react-icons/ai';

import Colors from '../../constants/colors.constant';
import { CollectionItemI } from '../../types';
import CollectionItem from '../collection-item/collection-item.component';
import './collections.styles.css';

interface CollectionsProps {
  collectionItems: CollectionItemI[];
}

const Collections: FC<CollectionsProps> = ({ collectionItems }) => {
  return (
    <div className='collections__container'>
      <h2 className='app__heading collections__heading'>Collections</h2>
      <div className='collections__subheading'>
        <h6 className='collections__subheading-left'>
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          Kolkata, based on trends
        </h6>
        <Link
          to='/'
          className='collections__subheading-right'
          style={{ color: Colors.zomatoPink }}
        >
          <p>All collections in Kolkata</p>
          <AiOutlineCaretRight />
        </Link>
      </div>

      <div className='collections__tiles-container'>
        {collectionItems.map(item => (
          <CollectionItem key={item.id} collection={item} />
        ))}
      </div>
      <Link
        to='/'
        className='collections__subheading-right_sm'
        style={{ color: Colors.zomatoPink }}
      >
        <p>All collections in Kolkata</p>
        <AiOutlineCaretRight />
      </Link>
    </div>
  );
};

export default Collections;
