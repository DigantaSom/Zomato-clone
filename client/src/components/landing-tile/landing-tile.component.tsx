import { FC } from 'react';
import { Link } from 'react-router-dom';

import { TileI } from '../../types';

import './landing-tile.styles.css';

interface LandingTileProps {
  tile: TileI;
}

const LandingTile: FC<LandingTileProps> = ({ tile: { title, imagePath } }) => {
  return (
    <Link to='/' className='tile'>
      <img src={imagePath} alt={title} className='tile-image' />
      <div className='info'>
        <p>{title}</p>
      </div>
    </Link>
  );
};

export default LandingTile;
