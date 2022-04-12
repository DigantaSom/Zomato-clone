import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineCaretRight } from 'react-icons/ai';

import { LocalityI } from '../../types';

import './locality-item.styles.css';

interface LocalityItemProps {
  locality: LocalityI;
}

const LocalityItem: FC<LocalityItemProps> = ({
  locality: { name, numberOfPlaces },
}) => {
  return (
    <Link to='/' className='locality-item__container'>
      <h5 className='locality-item__title'>
        {name} ({numberOfPlaces} Places)
      </h5>
      <AiOutlineCaretRight className='locality-item__icon' />
    </Link>
  );
};

export default LocalityItem;
