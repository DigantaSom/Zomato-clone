import CollectionTiles from 'src/components/collections/collection-tiles/collection-tiles.component';

import collectionItems from 'src/constants/collection-items.constant';

const HandpickedCollections = () => {
  return <CollectionTiles collectionItems={collectionItems} />;
};

export default HandpickedCollections;
