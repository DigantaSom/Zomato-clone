import { FC, memo } from 'react';

import ExploreOptionsDotted from './explore-options-dotted/explore-options-dotted.component';
import ExploreOptionsColumn from './explore-options-column/explore-options-column.component';

import exploreOptions from '../../constants/explore-options.constant';

import './explore-other-options.styles.css';

interface ExploreOtherOptionsProps {
  page: 'Home' | 'Food';
}

const ExploreOtherOptions: FC<ExploreOtherOptionsProps> = ({ page }) => {
  return (
    <div
      className='eoo__container'
      style={{ backgroundColor: page === 'Food' ? '#FCFCFC' : '#FFF' }}
    >
      <div className='app__container'>
        <h2 className='eoo__heading'>Explore other options for you here</h2>
        {(
          Object.keys(exploreOptions) as Array<keyof typeof exploreOptions>
        ).map(key => (
          <div key={key} className='eoo__inner-container'>
            <h4 className='eoo__subheading'>{key}</h4>
            {exploreOptions[key].displayType === 'dotted' ? (
              <ExploreOptionsDotted values={exploreOptions[key].value} />
            ) : (
              <ExploreOptionsColumn
                objKey={key}
                values={exploreOptions[key].value}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(ExploreOtherOptions);
