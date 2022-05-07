import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Colors from 'src/constants/colors.constant';

interface ImgContainerProps {
  imagePath: string;
}

export const Tile = styled(Link)`
  height: 23.75rem;
  max-width: 90%;
  padding: 10px;
  border-radius: 0.8rem;
  transition: 200ms all ease-in-out;

  :hover {
    cursor: pointer;
    box-shadow: 0 0 0.7rem rgb(0 0 0 / 20%);
  }
`;

export const ImgContainer = styled.div<ImgContainerProps>`
  height: 15.5rem;
  width: 100%;
  background-image: ${props => `url(${props.imagePath})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 0.8rem;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 1180px) {
    height: 12rem;
  }
`;

export const Promoted = styled.div`
  position: absolute;
  top: 0.6rem;
  left: 0.8rem;
  background-color: #0000004d;
  border-radius: 0.2rem;
  color: #fff;
  padding: 0.07rem 0.31rem;
  font-size: 0.7rem;
`;

export const DiscountContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #fff;
  font-size: 0.85rem;
`;

export const Discount = styled.div`
  background-color: #256fef;
  padding: 0.1rem 0.3rem;
  margin-top: 0.55rem;
  border-radius: 0 0.2rem 0.2rem 0;
`;

export const ProDiscount = styled.div`
  background-color: #d92662;
  padding: 0.1rem 0.3rem;
  border-radius: 0 0.2rem 0.2rem 0;
`;

export const ETAcontainer = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background-color: #ffffffcc; /* rgba(255, 255, 255, 0.8) */
  color: #363636;
  border-radius: 0.3rem;
  font-size: 0.85rem;
  padding: 0.2rem 0.3rem;
`;

export const Info = styled.div`
  margin-top: 0.8rem;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.6rem;
`;

export const Title = styled.p`
  margin: 0;
  color: #1c1c1c;
  font-weight: 1.2rem;
  font-weight: bold;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  background-color: ${Colors.ratingGreen};
  color: white;
  padding: 0.15rem 0.3rem;
  border-radius: 0.3rem;
  font-size: 0.85rem;

  .restaurant-tile__rating-icon {
    font-size: 0.7rem;
    padding-left: 0.12rem;
  }
`;

export const SubTitle = styled.p`
  margin: 0 0 0.6rem;
  font-size: 0.875rem;
  color: #696969;
  opacity: 0.9;
  width: 65%;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Price = styled.p`
  margin: 0 0 0.6rem;
  font-size: 0.875rem;
  color: #696969;
  opacity: 0.85;
`;

export const BottomInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OrdersPlacedContainer = styled.div`
  width: 78%;
  display: flex;
  align-items: center;

  img {
    width: 1.125rem;
    height: 1.125rem;
  }

  p {
    color: #828282;
    font-size: 0.8rem;
    margin-left: 0.5rem;
  }
`;

export const MaxSafetyContainer = styled.div`
  width: 3rem;
  height: 1.125rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const SafetyContainer = styled.div`
  width: 2.3rem;
  height: 1.125rem;

  img {
    width: 100%;
    height: 100%;
  }
`;
