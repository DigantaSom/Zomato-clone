import Divider from '../../components/divider/divider.component';
import MobilePageNavbar from '../../components/mobile-page-navbar/mobile-page-navbar.component';

import './mobile-app.styles.css';

const MobileAppPage = () => {
  return (
    <>
      <div className='mobile-app__container'>
        <MobilePageNavbar />
      </div>
      <Divider colorHex='#ddd' />
    </>
  );
};

export default MobileAppPage;
