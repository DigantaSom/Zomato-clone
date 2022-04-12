import { FC } from 'react';
import { Link } from 'react-router-dom';

import { TileI } from '../../types';

import './landing-tile.styles.css';

interface LandingTileProps {
  tile: TileI;
}

const LandingTile: FC<LandingTileProps> = ({ tile: { title, imagePath } }) => {
  return (
    <Link to='/' className='landing-tile__tile'>
      <img src={imagePath} alt={title} className='landing-tile__tile-image' />
      <div className='landing-tile__info'>
        <p>{title}</p>
      </div>
    </Link>
  );
};

export default LandingTile;
