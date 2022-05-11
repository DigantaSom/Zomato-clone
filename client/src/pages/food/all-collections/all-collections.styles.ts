import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Colors from 'src/constants/colors.constant';

interface TabProps {
  isSelected: boolean;
}

export const AllCollectionsContainer = styled.div`
  margin-top: 2rem;
`;

export const Heading = styled.h3`
  font-size: 1.9rem;
  margin: 0 0 0.5rem;
  color: #1c1c1c;
  opacity: 0.8;
`;

export const SubHeading = styled.h6`
  font-size: 1rem;
  margin: 0;
  color: #4f4f4f;
  opacity: 0.8;
`;

export const Tabs = styled.div`
  margin-top: 1.6rem;
  display: flex;
  align-items: center;
  border-bottom: 0.125rem solid #e8e8e8;

  @media screen and (max-width: 850px) {
    margin-top: 1rem;
  }
  @media screen and (max-width: 470px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Tab = styled(Link)<TabProps>`
  padding: 1rem 1.5rem;
  padding-bottom: ${props =>
    props.isSelected ? 'calc(1rem - 0.125rem)' : '1rem'};
  border-bottom: ${props =>
    props.isSelected ? `0.125rem solid ${Colors.zomatoSecondary}` : 0};

  h6 {
    margin: 0;
    font-size: 1.125rem;
    color: ${props => (props.isSelected ? Colors.zomatoSecondary : '#696969')};
  }

  @media screen and (max-width: 470px) {
    padding-left: 0;
  }
`;
