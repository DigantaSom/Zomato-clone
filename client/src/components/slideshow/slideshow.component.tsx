import { FC, useEffect, useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import SlideshowItem from './slideshow-item/slideshow-item.component';

import useMediaQuery from 'src/hooks/useMediaQuery';

import { SlideShowI, SlideshowType } from 'src/types';
import orderTypes from 'src/constants/order-types.contant';
import topBrands from 'src/constants/top-brands.constant';

import {
  SlideshowContainer,
  ItemsOuter,
  ItemsInner,
  LeftArrow,
  RightArrow,
} from './slideshow.styles';

interface SlideshowProps {
  slideshowType: SlideshowType;
}

const Slideshow: FC<SlideshowProps> = ({ slideshowType }) => {
  const [slideshowContent, setSlideshowContent] = useState<SlideShowI[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const [window, setWindow] = useState(6);

  useEffect(() => {
    if (slideshowType === 'order') {
      setSlideshowContent(orderTypes);
    } else if (slideshowType === 'brands') {
      setSlideshowContent(topBrands);
    }
  }, [slideshowType]);

  const width_1800 = useMediaQuery('(max-width: 1800px)');
  const width_1180 = useMediaQuery('(max-width: 1180px)');
  const width_900 = useMediaQuery('(max-width: 900px)');
  const width_475 = useMediaQuery('(max-width: 475px)');
  const width_320 = useMediaQuery('(max-width: 320px)');

  useEffect(() => {
    if (width_1800 && !width_1180) {
      setWindow(5);
    } else if (width_1180 && !width_900) {
      setWindow(4);
    } else if (width_900 && !width_475) {
      setWindow(3);
    } else if (width_475 && !width_320) {
      setWindow(2);
    } else if (width_320) {
      setWindow(1);
    } else {
      setWindow(6);
    }
  }, [width_1800, width_1180, width_900, width_475, width_320]);

  const showLeftArrow = startIndex > 0;
  const showRightArrow = startIndex < slideshowContent.length - window;

  const handleClickLeftArrow = () => {
    if (showLeftArrow) {
      setStartIndex(prevState => prevState - 1);
    }
  };
  const handleClickRightArrow = () => {
    if (showRightArrow) {
      setStartIndex(prevState => prevState + 1);
    }
  };

  const displayHeading = () => {
    if (slideshowType === 'order') {
      return 'Inspiration for your first order';
    } else if (slideshowType === 'brands') {
      return 'Top brands for you';
    }
  };

  return (
    <SlideshowContainer slideshowType={slideshowType}>
      <div className='app__container'>
        <h2 className='food-page__heading'>{displayHeading()}</h2>

        <ItemsOuter>
          {showLeftArrow && (
            <LeftArrow
              isItemLeft={showLeftArrow}
              onClick={handleClickLeftArrow}
            >
              <AiOutlineLeft />
            </LeftArrow>
          )}

          <ItemsInner>
            {slideshowContent
              .slice(startIndex, startIndex + window)
              .map(item => (
                <SlideshowItem
                  key={item.id}
                  item={item}
                  slideshowType={slideshowType}
                />
              ))}
          </ItemsInner>

          {showRightArrow && (
            <RightArrow
              isItemLeft={showRightArrow}
              onClick={handleClickRightArrow}
            >
              <AiOutlineRight />
            </RightArrow>
          )}
        </ItemsOuter>
      </div>
    </SlideshowContainer>
  );
};

export default Slideshow;
