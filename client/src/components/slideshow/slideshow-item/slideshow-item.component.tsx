import { FC, memo } from 'react';

import { SlideShowI, SlideshowType } from 'src/types';

import {
  ItemContainer,
  ImgContainer,
  TextContainer,
  SubTitle,
  Title,
} from './slideshow-item.styles';

interface SlideshowItemProps {
  item: SlideShowI;
  slideshowType: SlideshowType;
}

const SlideshowItem: FC<SlideshowItemProps> = ({ item, slideshowType }) => {
  return (
    <ItemContainer to={item.route}>
      <ImgContainer>
        <img src={item.imagePath} alt={item.title} />
      </ImgContainer>
      <TextContainer>
        <Title slideshowType={slideshowType}>{item.title}</Title>
        {item.subtitle && <SubTitle>{item.subtitle}</SubTitle>}
      </TextContainer>
    </ItemContainer>
  );
};

export default memo(SlideshowItem);
