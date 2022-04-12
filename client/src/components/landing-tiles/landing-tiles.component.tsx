import LandingTile from '../landing-tile/landing-tile.component';

import tileOptions from '../../constants/tile-options.constant';

import './landing-tiles.styles.css';

const LandingTiles = () => {
  return (
    <div className='landing-tiles__container'>
      {tileOptions.map(tile => (
        <LandingTile key={tile.id} tile={tile} />
      ))}
    </div>
  );
};

export default LandingTiles;
