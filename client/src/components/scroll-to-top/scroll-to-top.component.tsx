import { FC, memo } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

import { Container, Button } from './scroll-to-top.styles';

interface ScrollToTopProps {
  handleClick: () => void;
}

const ScrollToTop: FC<ScrollToTopProps> = ({ handleClick }) => {
  return (
    <Container onClick={handleClick}>
      <Button>
        <IoIosArrowUp className='scroll-to-top__icon' />
      </Button>
    </Container>
  );
};

export default memo(ScrollToTop);
