import Landing from '../../components/landing/landing.component';
import LandingTiles from '../../components/landing-tiles/landing-tiles.component';

const HomePage = () => {
  return (
    <>
      <Landing />
      <div className='container'>
        <LandingTiles />
      </div>
    </>
  );
};

export default HomePage;
