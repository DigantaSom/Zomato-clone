import { FC } from 'react';
import { Link } from 'react-router-dom';
import { BsDot } from 'react-icons/bs';

import { ExploreOptionsValueTextType } from '../../../types';

import './explore-options-dotted.styles.css';

interface ExploreOptionsDottedProps {
  values: ExploreOptionsValueTextType[];
}

const ExploreOptionsDotted: FC<ExploreOptionsDottedProps> = ({ values }) => {
  return (
    <div className='eoo-dotted__container'>
      {values.map(({ id, text, url }, idx) => (
        <div key={id} className='eoo-dotted__item'>
          <Link to={url}>{text} food near me</Link>
          {idx + 1 !== values.length && <BsDot className='eoo-dotted__icon' />}
        </div>
      ))}
    </div>
  );
};

export default ExploreOptionsDotted;
