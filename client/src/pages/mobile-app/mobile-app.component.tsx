import MobilePageNavbar from '../../components/mobile-page-navbar/mobile-page-navbar.component';
import GetApp from '../../components/get-app/get-app.component';
import Divider from '../../components/divider/divider.component';

import './mobile-app.styles.css';

const MobileAppPage = () => {
  return (
    <>
      <div className='mobile-app__container'>
        <MobilePageNavbar />
      </div>
      <Divider colorHex='#ddd' />
      <div className='mobile-app__contaner mobile-app__get-app-outer-container'>
        <GetApp page='Mobile' />
      </div>
    </>
  );
};

export default MobileAppPage;
