import Landing from '../../components/Landing/Landing';
import ZomatoOptions from '../../components/ZomatoOptions/ZomatoOptions';

const Home = () => {
  return (
    <>
      <Landing />
      <div className='container'>
        <ZomatoOptions />
      </div>
    </>
  );
};

export default Home;
