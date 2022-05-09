import { CollectionItemI } from '../types';

import LiveCricketScreeningImg from 'src/images/collections/live-cricket-screening.png';
import PoilaBoishakhImg from 'src/images/collections/poila-boishakh.png';
import NewlyOpenedImg from 'src/images/collections/newly-opened.png';
import TrendingImg from 'src/images/collections/trending-this-week.png';

const collectionItems: CollectionItemI[] = [
  {
    id: '1',
    title: 'Live Cricket Screening',
    imagePath: LiveCricketScreeningImg,
    numberOfPlaces: 31,
    route: '/sports-screening',
  },
  {
    id: '2',
    title: 'Poila Boishakh',
    imagePath: PoilaBoishakhImg,
    numberOfPlaces: 11,
    route: '/poila-boishakh',
  },
  {
    id: '3',
    title: 'Newly Opened',
    imagePath: NewlyOpenedImg,
    numberOfPlaces: 13,
    route: '/newly-opened',
  },
  {
    id: '4',
    title: 'Trending This Week',
    imagePath: TrendingImg,
    numberOfPlaces: 16,
    route: '/top-restaurants',
  },
];

export default collectionItems;
