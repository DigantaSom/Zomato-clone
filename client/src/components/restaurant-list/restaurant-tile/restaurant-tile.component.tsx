import { FC } from 'react';
import { AiFillStar } from 'react-icons/ai';

import Divider from 'src/components/divider/divider.component';

import { RestaurantValueType } from 'src/types';

import OrdersPlacedImg from 'src/images/restaurants/orders-placed-icon.png';
import MaxSafetyImg from 'src/images/restaurants/max-safety-delivery.png';
import SafetyImg from 'src/images/restaurants/safe-delivery.png';
import MaxSafetyDining from 'src/images/restaurants/max-safety-dining.png';

import {
  Tile,
  ImgContainer,
  Promoted,
  DiscountContainer,
  Discount,
  ProDiscount,
  ETAcontainer,
  Info,
  Flex,
  Title,
  Rating,
  SubTitle,
  Price,
  Location,
  OpensAt,
  BottomInfo,
  OrdersPlacedContainer,
  MaxSafetyContainer,
  SafetyContainer,
  SafeDiningText,
} from './restaurant-tile.styles';

interface RestaurantTileProps {
  restaurant: RestaurantValueType;
}

const RestaurantTile: FC<RestaurantTileProps> = ({
  restaurant: {
    id,
    type,
    imagePath,
    isPromoted,
    discount,
    proDiscount,
    timeToDeliver,
    title,
    rating,
    subtitle,
    location,
    opensAt,
    price,
    numOfRecentOrder,
    isMaxSafetyDelivery,
    isMaxSafetyDining,
  },
}) => {
  return (
    // TODO: change the hyperlink direction from unique id to unique slug
    <Tile to={id}>
      <ImgContainer imagePath={imagePath}>
        {isPromoted && <Promoted>Promoted</Promoted>}
        {(discount || proDiscount) && (
          <DiscountContainer>
            {proDiscount && <ProDiscount>{proDiscount}</ProDiscount>}
            {discount && <Discount>{discount}</Discount>}
          </DiscountContainer>
        )}
        <ETAcontainer>{timeToDeliver}</ETAcontainer>
      </ImgContainer>
      <Info>
        <Flex>
          <Title>{title}</Title>
          <Rating>
            <span>{rating.toFixed(1)}</span>
            <AiFillStar className='restaurant-tile__rating-icon' />
          </Rating>
        </Flex>
        <Flex>
          <SubTitle>{subtitle}</SubTitle>
          <Price>₹{price}</Price>
        </Flex>
        {location && <Location>{location}</Location>}
        {opensAt && <OpensAt>Opens at {opensAt}</OpensAt>}

        {type === 'Delivery' && (
          <>
            <Divider colorHex='#E8E8E8' />
            <BottomInfo>
              <OrdersPlacedContainer>
                <img src={OrdersPlacedImg} alt='' />
                <p>{numOfRecentOrder}+ orders placed from here recently</p>
              </OrdersPlacedContainer>

              {isMaxSafetyDelivery ? (
                <MaxSafetyContainer>
                  <img src={MaxSafetyImg} alt='Max Safety' />
                </MaxSafetyContainer>
              ) : (
                <SafetyContainer>
                  <img src={SafetyImg} alt='Safety' />
                </SafetyContainer>
              )}
            </BottomInfo>
          </>
        )}

        {(type === 'Dine-Out' || type === 'Nightlife') && isMaxSafetyDining && (
          <>
            <Divider colorHex='#E8E8E8' />
            <BottomInfo style={{ marginTop: '0.625rem' }}>
              <MaxSafetyContainer>
                <img src={MaxSafetyDining} alt='Safe Dining' />
              </MaxSafetyContainer>
              <SafeDiningText>
                Follows all Max Safety measures for a safe dining experience
              </SafeDiningText>
            </BottomInfo>
          </>
        )}
      </Info>
    </Tile>
  );
};

export default RestaurantTile;
