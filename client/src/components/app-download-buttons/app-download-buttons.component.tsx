import { Link } from 'react-router-dom';
import AppStore_Img from '../../images/download-zomato-app-store.png';
import GooglePlay_Img from '../../images/download-zomato-google-play.png';

import './app-download-buttons.styles.css';

const AppDownloadButtons = () => {
  return (
    <>
      <Link to='#'>
        <img
          src={AppStore_Img}
          alt='App Store'
          className='download-buttons__img'
        />
      </Link>
      <Link to='#'>
        <img
          src={GooglePlay_Img}
          alt='Google Play'
          className='download-buttons__img'
        />
      </Link>
    </>
  );
};

export default AppDownloadButtons;
