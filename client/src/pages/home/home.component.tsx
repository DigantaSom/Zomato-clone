import Landing from '../../components/landing/landing.component';
import LandingTiles from '../../components/landing-tiles/landing-tiles.component';
import Collections from '../../components/collections/collections.component';

import collectionItems from '../../constants/collection-items.constant';

const HomePage = () => {
  return (
    <>
      <Landing />
      <div className='container'>
        <LandingTiles />
        <Collections collectionItems={collectionItems} />
      </div>
    </>
  );
};

export default HomePage;
