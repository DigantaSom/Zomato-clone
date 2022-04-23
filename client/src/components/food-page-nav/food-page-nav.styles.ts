import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Colors from '../../constants/colors.constant';

interface Props {
  selected: boolean;
}

export const Nav = styled.div`
  margin-top: 1.6rem;
  display: flex;
  align-items: center;
  border-bottom: 0.125rem solid #e8e8e8;

  @media screen and (max-width: 850px) {
    margin-top: 0;
  }
  @media screen and (max-width: 470px) {
    flex-direction: column;
  }
`;

export const NavItem = styled(Link)<Props>`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: ${props =>
    props.selected ? 'calc(0.7rem - 0.125rem)' : '0.7rem'};
  border-bottom: ${props =>
    props.selected ? `0.125rem solid ${Colors.zomatoSecondary}` : 0};

  @media screen and (max-width: 630px) {
    padding-left: 0.65rem;
    padding-right: 0.65rem;
  }

  @media screen and (max-width: 470px) {
    width: 100%;
  }
`;

export const ImgContainer = styled.div<Props>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.selected ? '#e5f3f3' : '#f8f8f8')};

  @media screen and (max-width: 630px) {
    width: 45px;
    height: 45px;
  }
`;

export const Img = styled.img`
  width: 50%;
  height: 50%;
`;

export const Text = styled.div<Props>`
  font-size: 1.3rem;
  color: ${props => (props.selected ? Colors.zomatoSecondary : '#696969')};
  padding-left: 0.5rem;
  white-space: nowrap;

  @media screen and (max-width: 630px) {
    font-size: 1rem;
  }
`;
