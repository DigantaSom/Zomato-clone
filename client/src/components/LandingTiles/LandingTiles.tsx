import './LandingTiles.css';

import tileOptions from '../../constants/tileOptions';
import LandingTile from '../LandingTile/LandingTile';

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
