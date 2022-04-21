import { CollectionItemI } from '../types';

const collectionItems: CollectionItemI[] = [
  {
    id: '1',
    title: 'Live Cricket Screening',
    imagePath: './collections/live-cricket-screening.png',
    numberOfPlaces: 31,
    route: '/sports-screening',
  },
  {
    id: '2',
    title: 'Poila Boishakh',
    imagePath: './collections/poila-boishakh.png',
    numberOfPlaces: 11,
    route: '/poila-boishakh',
  },
  {
    id: '3',
    title: 'Newly Opened',
    imagePath: './collections/newly-opened.png',
    numberOfPlaces: 13,
    route: '/newly-opened',
  },
  {
    id: '4',
    title: 'Trending This Week',
    imagePath: './collections/trending-this-week.png',
    numberOfPlaces: 16,
    route: '/top-restaurants',
  },
];

export default collectionItems;
