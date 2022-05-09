import Landing from '../../components/landing/landing.component';
import LandingTiles from '../../components/landing-tiles/landing-tiles.component';
import Collections from '../../components/collections/collections.component';
import Localities from '../../components/localities/localities.component';
import GetApp from '../../components/get-app/get-app.component';
import ExploreOtherOptions from '../../components/explore-other-options/explore-other-options.component';
import Footer from '../../components/footer/footer.component';

import collectionItems from '../../constants/collection-items.constant';

import './home.styles.css';

const HomePage = () => {
  return (
    <>
      <Landing />
      <div className='app__container'>
        <LandingTiles />
        <Collections collectionItems={collectionItems} />
        <Localities />
      </div>
      <div className='home__get-app__outer-container'>
        <GetApp page='Home' />
      </div>
      <ExploreOtherOptions page='Home' />
      <Footer page='Home' />
    </>
  );
};

export default HomePage;
