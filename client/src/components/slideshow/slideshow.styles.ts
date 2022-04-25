import styled, { css } from 'styled-components';

import { SlideshowType } from 'src/types';

interface SlideshowContainerProps {
  slideshowType: SlideshowType;
}

interface ArrowProps {
  isItemLeft: boolean;
}

export const SlideshowContainer = styled.section<SlideshowContainerProps>`
  background-color: ${props =>
    props.slideshowType === 'order' ? '#f8f8f8' : '#fff'};
  padding: 2.5rem 0;
`;

export const ItemsOuter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ItemsInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const arrowStyles = css`
  margin-top: -3rem;
  background-color: #fff;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  position: absolute;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
    0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
  user-select: none;

  :hover {
    cursor: pointer;
    background-color: #e9e9e9;
  }
`;

export const LeftArrow = styled.div<ArrowProps>`
  ${arrowStyles}

  left: 0;
`;

export const RightArrow = styled.div<ArrowProps>`
  ${arrowStyles}

  right: 0;
`;
