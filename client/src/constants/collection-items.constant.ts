import { CollectionItemI } from '../types';

import LiveCricketScreeningImg from 'src/images/collections/live-cricket-screening.png';
import NewlyOpenedImg from 'src/images/collections/newly-opened.png';
import TrendingImg from 'src/images/collections/trending-this-week.png';
import BestOfKolkataImg from 'src/images/collections/best-of-kolkata.png';

import BrilliantBiryaniImg from 'src/images/collections/brilliant-biryani.png';
import AromaticCoffeeImg from 'src/images/collections/aromatic-coffee.png';
import StreetFoodImg from 'src/images/collections/street-food.png';
import RooftopImg from 'src/images/collections/rooftop.png';
import KickassBurgersImg from 'src/images/collections/kickass-burgers.png';
import SweetToothImg from 'src/images/collections/sweet-tooth.png';
import ChineseFoodFareImg from 'src/images/collections/chinese-food-fare.png';
import LegnedaryOutletsImg from 'src/images/collections/legendary-outlets.png';
import GreatBreakfastsImg from 'src/images/collections/great-breakfasts.png';
import SouthIndianSpecialsImg from 'src/images/collections/south-indian-specials.png';
import PizzaImg from 'src/images/collections/pizza.png';
import ThaliImg from 'src/images/collections/traditional-thali.png';

import MicrobreweriesImg from 'src/images/collections/microbreweries.png';
import WheresThePartyImg from 'src/images/collections/wheres-the-party.png';

const collectionItems: CollectionItemI[] = [
  {
    id: 'Collection_1',
    title: 'Live Cricket Screening',
    imagePath: LiveCricketScreeningImg,
    numberOfPlaces: 31,
    route: '/sports-screening',
    type: 'Featured',
  },
  {
    id: 'Collection_2',
    title: 'Newly Opened',
    imagePath: NewlyOpenedImg,
    numberOfPlaces: 13,
    route: '/newly-opened',
    type: 'Featured',
  },
  {
    id: 'Collection_3',
    title: 'Trending This Week',
    imagePath: TrendingImg,
    numberOfPlaces: 16,
    route: '/top-restaurants',
    type: 'Featured',
  },
  {
    id: 'Collection_4',
    title: 'Best of Kolkata',
    imagePath: BestOfKolkataImg,
    numberOfPlaces: 61,
    route: '/great-food-no-bull',
    type: 'Featured',
  },
  {
    id: 'Collection_5',
    title: 'Brilliant Biryani',
    imagePath: BrilliantBiryaniImg,
    numberOfPlaces: 30,
    route: '/biryani',
    type: 'All',
  },
  {
    id: 'Collection_6',
    title: 'Aromatic Coffee',
    imagePath: AromaticCoffeeImg,
    numberOfPlaces: 29,
    route: '/best-coffee',
    type: 'All',
  },
  {
    id: 'Collection_7',
    title: 'Street Food',
    imagePath: StreetFoodImg,
    numberOfPlaces: 25,
    route: '/street-food',
    type: 'All',
  },
  {
    id: 'Collection_8',
    title: 'Rooftop',
    imagePath: RooftopImg,
    numberOfPlaces: 30,
    route: '/rooftop',
    type: 'All',
  },
  {
    id: 'Collection_9',
    title: 'Kickass Burgers',
    imagePath: KickassBurgersImg,
    numberOfPlaces: 8,
    route: '/burger-places',
    type: 'All',
  },
  {
    id: 'Collection_10',
    title: 'Sweet Tooth',
    imagePath: SweetToothImg,
    numberOfPlaces: 30,
    route: '/dessert-places',
    type: 'All',
  },
  {
    id: 'Collection_11',
    title: 'Chinese Food Fare',
    imagePath: ChineseFoodFareImg,
    numberOfPlaces: 29,
    route: '/chinese-restaurants',
    type: 'All',
  },
  {
    id: 'Collection_12',
    title: 'Legendary Outlets',
    imagePath: LegnedaryOutletsImg,
    numberOfPlaces: 31,
    route: '/legendary-places',
    type: 'All',
  },
  {
    id: 'Collection_13',
    title: 'Great Breakfasts',
    imagePath: GreatBreakfastsImg,
    numberOfPlaces: 29,
    route: '/great-breakfasts',
    type: 'All',
  },
  {
    id: 'Collection_14',
    title: 'Microbreweries',
    imagePath: MicrobreweriesImg,
    numberOfPlaces: 8,
    route: '/microbreweries',
    type: 'Nightlife',
  },
  {
    id: 'Collection_15',
    title: "Where's The Party?",
    imagePath: WheresThePartyImg,
    numberOfPlaces: 31,
    route: '/nightclubs',
    type: 'Nightlife',
  },
  {
    id: 'Collection_16',
    title: 'South Indian Specials',
    imagePath: SouthIndianSpecialsImg,
    numberOfPlaces: 29,
    route: '/south-indian-restaurants',
    type: 'All',
  },
  {
    id: 'Collection_17',
    title: 'Best Pizza Places In Town',
    imagePath: PizzaImg,
    numberOfPlaces: 11,
    route: '/pizza-time',
    type: 'All',
  },
  {
    id: 'Collection_18',
    title: 'Traditional Thali',
    imagePath: ThaliImg,
    numberOfPlaces: 11,
    route: '/best-thali',
    type: 'All',
  },
];

export default collectionItems;
