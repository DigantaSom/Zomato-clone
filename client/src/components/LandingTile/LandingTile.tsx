import { FC } from 'react';

import { TileI } from '../../types';

import './LandingTile.css';

interface LandingTileProps {
  tile: TileI;
}

const LandingTile: FC<LandingTileProps> = ({ tile: { title, imagePath } }) => {
  return (
    <div className='tile'>
      <img src={imagePath} alt={title} className='tile-image' />
      <div className='info'>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default LandingTile;
