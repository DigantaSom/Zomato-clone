import { FC } from 'react';
import { Link } from 'react-router-dom';

import {
  ExploreOptionsKeyType,
  ExploreOptionsValueTextType,
} from '../../../types';

import './explore-options-column.styles.css';

interface ExploreOptionsColumnProps {
  objKey: ExploreOptionsKeyType;
  values: ExploreOptionsValueTextType[];
}

const ExploreOptionsColumn: FC<ExploreOptionsColumnProps> = ({
  objKey,
  values,
}) => {
  return (
    <div className='eoo-column__container'>
      {values.map(({ id, text, url }) => (
        <Link key={id} to={url}>
          {text}
        </Link>
      ))}
      {objKey === 'Cities We Deliver To' && (
        <div className='eoo-column__see-more-container'>
          <Link to='/delivery-cities' className='eoo-column__see-more-link'>
            See more
          </Link>
        </div>
      )}
    </div>
  );
};

export default ExploreOptionsColumn;
