import styled from 'styled-components';

import Colors from 'src/constants/colors.constant';

export const Container = styled.div`
  position: fixed;
  bottom: 1.8rem;
  right: 2rem;
  z-index: 40;

  @media screen and (max-width: 850px) {
    bottom: 1rem;
    right: 1rem;
  }
`;

export const Button = styled.div`
  position: relative;
  width: 4.25rem;
  height: 4.25rem;
  border-radius: 50%;
  background-color: ${Colors.zomatoSecondary};

  :hover {
    cursor: pointer;
    background-color: ${Colors.zomatoSecondary__hover};
  }

  @media screen and (max-width: 850px) {
    width: 3.5rem;
    height: 3.5rem;
  }
  @media screen and (max-width: 500px) {
    width: 3rem;
    height: 3rem;
  }

  .scroll-to-top__icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 1.9rem;
  }
`;
