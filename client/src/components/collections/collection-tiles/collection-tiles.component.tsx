import { FC } from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import { CollectionItemI } from 'src/types';
import './collection-tiles.styles.css';

interface CollectionTilesProps {
  collectionItems: CollectionItemI[];
}

const CollectionTiles: FC<CollectionTilesProps> = ({ collectionItems }) => {
  return (
    <div className='collections-tiles__container'>
      {collectionItems.map(item => (
        <CollectionItem key={item.id} collection={item} />
      ))}
    </div>
  );
};

export default CollectionTiles;
