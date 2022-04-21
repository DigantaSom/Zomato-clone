import { TileI } from '../types';

const tileOptions: TileI[] = [
  {
    id: '1',
    title: 'Order Online',
    imagePath: './zomato-tiles/order-online.png',
    route: '/food/order-food-online',
  },
  {
    id: '2',
    title: 'Dining Out',
    imagePath: './zomato-tiles/dining-out.png',
    route: '/food/dining-out',
  },
  {
    id: '3',
    title: 'Pro and Pro Plus',
    imagePath: './zomato-tiles/pro-and-pro-plus.png',
    route: '/pro',
  },
  {
    id: '4',
    title: 'Nightlife and Clubs',
    imagePath: './zomato-tiles/nightlife-and-clubs.png',
    route: '/food/drinks-and-nightlife',
  },
];

export default tileOptions;
