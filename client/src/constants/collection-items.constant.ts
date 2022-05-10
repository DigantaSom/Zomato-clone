import { CollectionItemI } from '../types';

import LiveCricketScreeningImg from 'src/images/collections/live-cricket-screening.png';
import PoilaBoishakhImg from 'src/images/collections/poila-boishakh.png';
import NewlyOpenedImg from 'src/images/collections/newly-opened.png';
import TrendingImg from 'src/images/collections/trending-this-week.png';

import MicrobreweriesImg from 'src/images/collections/microbreweries.png';
import WheresThePartyImg from 'src/images/collections/wheres-the-party.png';

const collectionItems: CollectionItemI[] = [
  {
    id: '1',
    title: 'Live Cricket Screening',
    imagePath: LiveCricketScreeningImg,
    numberOfPlaces: 31,
    route: '/sports-screening',
    type: 'Top_4',
  },
  {
    id: '2',
    title: 'Poila Boishakh',
    imagePath: PoilaBoishakhImg,
    numberOfPlaces: 11,
    route: '/poila-boishakh',
    type: 'Top_4',
  },
  {
    id: '3',
    title: 'Newly Opened',
    imagePath: NewlyOpenedImg,
    numberOfPlaces: 13,
    route: '/newly-opened',
    type: 'Top_4',
  },
  {
    id: '4',
    title: 'Trending This Week',
    imagePath: TrendingImg,
    numberOfPlaces: 16,
    route: '/top-restaurants',
    type: 'Top_4',
  },
  {
    id: '5',
    title: 'Microbreweries',
    imagePath: MicrobreweriesImg,
    numberOfPlaces: 8,
    route: '/microbreweries',
    type: 'Nightlife',
  },
  {
    id: '6',
    title: "Where's The Party?",
    imagePath: WheresThePartyImg,
    numberOfPlaces: 31,
    route: '/nightclubs',
    type: 'Nightlife',
  },
];

export default collectionItems;
