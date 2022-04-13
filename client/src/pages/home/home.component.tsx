import Landing from '../../components/landing/landing.component';
import LandingTiles from '../../components/landing-tiles/landing-tiles.component';
import Collections from '../../components/collections/collections.component';
import Localities from '../../components/localities/localities.component';
import GetApp from '../../components/get-app/get-app.component';

import collectionItems from '../../constants/collection-items.constant';

import './home.styles.css';

const HomePage = () => {
  return (
    <>
      <Landing />
      <div className='container'>
        <LandingTiles />
        <Collections collectionItems={collectionItems} />
        <Localities />
      </div>
      <div className='home__get-app__outer-container'>
        <GetApp />
      </div>
    </>
  );
};

export default HomePage;
