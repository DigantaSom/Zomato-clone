import LocalityItem from '../locality-item/locality-item.component';

import localities from '../../constants/localities-kolkata.constant';

import './localities.styles.css';

const Localities = () => {
  return (
    <div className='localities__container'>
      <div className='localities__heading'>
        <p className='app__heading'>
          Popular localities in and around <b>Kolkata</b>
        </p>
      </div>
      <div className='localities__inner-container'>
        {localities.map(locality => (
          <LocalityItem key={locality.id} locality={locality} />
        ))}
      </div>
    </div>
  );
};

export default Localities;
