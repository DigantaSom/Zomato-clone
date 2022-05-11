import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import {
  AllCollectionsContainer,
  Heading,
  SubHeading,
  Tabs,
  Tab,
} from './all-collections.styles';

const AllCollections = () => {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState<'Handpicked' | 'Saved'>(
    'Handpicked'
  );

  useEffect(() => {
    const path: string = location.pathname.split('/')[3];

    if (path === '' || path === 'featured') {
      setSelectedTab('Handpicked');
    } else if (path === 'bookmarked') {
      setSelectedTab('Saved');
    }
  }, [location.pathname]);

  return (
    <AllCollectionsContainer>
      <div className='app__container'>
        <Heading>Collections - Kolkata</Heading>
        <SubHeading>
          Create and browse lists of the finest restaurants
        </SubHeading>

        <Tabs>
          <Tab to='featured' isSelected={selectedTab === 'Handpicked'}>
            <h6>Handpicked</h6>
          </Tab>
          <Tab to='bookmarked' isSelected={selectedTab === 'Saved'}>
            <h6>Saved Collections</h6>
          </Tab>
        </Tabs>

        <Outlet />
      </div>
    </AllCollectionsContainer>
  );
};

export default AllCollections;
