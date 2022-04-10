import LandingTile from '../landing-tile/landing-tile.component';

import tileOptions from '../../constants/tileOptions.constant';

import './landing-tiles.styles.css';

const LandingTiles = () => {
  return (
    <div className='landingTiles__container'>
      {tileOptions.map(tile => (
        <LandingTile key={tile.id} tile={tile} />
      ))}
    </div>
  );
};

export default LandingTiles;
