import { useState } from 'react';

import DeliveryIcon from '../../images/food-types/delivery.png';
import DeliveryGrayedIcon from '../../images/food-types/delivery-grayed.png';
import DiningOutIcon from '../../images/food-types/dining-out.png';
import DiningOutGrayedIcon from '../../images/food-types/dining-out-grayed.png';
import NightlifeIcon from '../../images/food-types/nightlife.png';
import NightlifeGrayedIcon from '../../images/food-types/nightlife-grayed.png';

import { Img, ImgContainer, Nav, NavItem, Text } from './food-page-nav.styles';

type ItemType = 'Delivery' | 'Dining Out' | 'Nightlife';

const FoodPageNav = () => {
  const [selectedItem, setSelectedItem] = useState<ItemType>('Delivery');

  return (
    <Nav>
      <NavItem
        to='order-food-online'
        selected={selectedItem === 'Delivery'}
        onClick={() => setSelectedItem('Delivery')}
      >
        <ImgContainer selected={selectedItem === 'Delivery'}>
          <Img
            src={
              selectedItem === 'Delivery' ? DeliveryIcon : DeliveryGrayedIcon
            }
            alt='Delivery'
          />
        </ImgContainer>
        <Text selected={selectedItem === 'Delivery'}>Delivery</Text>
      </NavItem>

      <NavItem
        to='dining-out'
        selected={selectedItem === 'Dining Out'}
        onClick={() => setSelectedItem('Dining Out')}
      >
        <ImgContainer selected={selectedItem === 'Dining Out'}>
          <Img
            src={
              selectedItem === 'Dining Out'
                ? DiningOutIcon
                : DiningOutGrayedIcon
            }
            alt='Dining Out'
          />
        </ImgContainer>
        <Text selected={selectedItem === 'Dining Out'}>Dining Out</Text>
      </NavItem>

      <NavItem
        to='drinks-and-nightlife'
        selected={selectedItem === 'Nightlife'}
        onClick={() => setSelectedItem('Nightlife')}
      >
        <ImgContainer selected={selectedItem === 'Nightlife'}>
          <Img
            src={
              selectedItem === 'Nightlife' ? NightlifeIcon : NightlifeGrayedIcon
            }
            alt='Nightlife'
          />
        </ImgContainer>
        <Text selected={selectedItem === 'Nightlife'}>Nightlife</Text>
      </NavItem>
    </Nav>
  );
};

export default FoodPageNav;
