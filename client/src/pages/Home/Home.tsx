import Landing from '../../components/Landing/Landing';
import LandingTiles from '../../components/LandingTiles/LandingTiles';

const Home = () => {
  return (
    <>
      <Landing />
      <div className='container'>
        <LandingTiles />
      </div>
    </>
  );
};

export default Home;
