import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { SlideshowType } from 'src/types';

interface TitleProps {
  slideshowType: SlideshowType;
}

export const ItemContainer = styled(Link)`
  width: 10vw; /* window = 6 */
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation-name: smooth;
  animation-duration: 1s;

  @keyframes smooth {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media screen and (max-width: 1800px) {
    /* window = 5 */
    width: 15vw;
  }
  @media screen and (max-width: 1180px) {
    /* window = 4 */
    width: 20vw;
  }
  @media screen and (max-width: 900px) {
    /* window = 3 */
    width: 25vw;
  }
  @media screen and (max-width: 475px) {
    /* window = 2 */
    width: 35vw;
  }
  @media screen and (max-width: 320px) {
    /* window = 1 */
    width: 50vw;
  }
`;

export const ImgContainer = styled.div`
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 675px) {
    height: 7rem;
    width: 7rem;
  }
  @media screen and (max-width: 475px) {
    height: 7.5rem;
    width: 7.5rem;
  }
  @media screen and (max-width: 320px) {
    height: 10rem;
    width: 10rem;
  }
`;

export const TextContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.p<TitleProps>`
  margin: 0;
  color: #363636;
  font-size: ${props =>
    props.slideshowType === 'brands' ? '1.1rem' : '1.35rem'};
  text-align: center;
`;

export const SubTitle = styled.span`
  margin-top: 0.5rem;
  color: #1c1c1c;
  font-size: 0.85rem;
`;
