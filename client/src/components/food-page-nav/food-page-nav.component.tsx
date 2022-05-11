import { memo, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import DeliveryIcon from '../../images/food-types/delivery.png';
import DeliveryGrayedIcon from '../../images/food-types/delivery-grayed.png';
import DiningOutIcon from '../../images/food-types/dining-out.png';
import DiningOutGrayedIcon from '../../images/food-types/dining-out-grayed.png';
import NightlifeIcon from '../../images/food-types/nightlife.png';
import NightlifeGrayedIcon from '../../images/food-types/nightlife-grayed.png';

import { Img, ImgContainer, Nav, NavItem, Text } from './food-page-nav.styles';

type ItemType = 'Delivery' | 'Dining Out' | 'Nightlife';

const FoodPageNav = () => {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState<ItemType>('Delivery');

  useEffect(() => {
    const path: string = location.pathname.split('/')[2];

    if (path === 'order-food-online') {
      setSelectedTab('Delivery');
    } else if (path === 'dining-out') {
      setSelectedTab('Dining Out');
    } else if (path === 'drinks-and-nightlife') {
      setSelectedTab('Nightlife');
    }
  }, [location.pathname]);

  return (
    <Nav>
      <NavItem to='order-food-online' selected={selectedTab === 'Delivery'}>
        <ImgContainer selected={selectedTab === 'Delivery'}>
          <Img
            src={selectedTab === 'Delivery' ? DeliveryIcon : DeliveryGrayedIcon}
            alt='Delivery'
          />
        </ImgContainer>
        <Text selected={selectedTab === 'Delivery'}>Delivery</Text>
      </NavItem>

      <NavItem to='dining-out' selected={selectedTab === 'Dining Out'}>
        <ImgContainer selected={selectedTab === 'Dining Out'}>
          <Img
            src={
              selectedTab === 'Dining Out' ? DiningOutIcon : DiningOutGrayedIcon
            }
            alt='Dining Out'
          />
        </ImgContainer>
        <Text selected={selectedTab === 'Dining Out'}>Dining Out</Text>
      </NavItem>

      <NavItem to='drinks-and-nightlife' selected={selectedTab === 'Nightlife'}>
        <ImgContainer selected={selectedTab === 'Nightlife'}>
          <Img
            src={
              selectedTab === 'Nightlife' ? NightlifeIcon : NightlifeGrayedIcon
            }
            alt='Nightlife'
          />
        </ImgContainer>
        <Text selected={selectedTab === 'Nightlife'}>Nightlife</Text>
      </NavItem>
    </Nav>
  );
};

export default memo(FoodPageNav);
