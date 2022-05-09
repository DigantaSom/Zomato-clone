import { RestaurantType } from 'src/types';

import BirayniByKiloImg from 'src/images/restaurants/delivery/biryani-by-kilo.png';
import WowMomoImg from 'src/images/restaurants/delivery/wow-momo.png';
import BalleBalleDhabaImg from 'src/images/restaurants/delivery/balle-balle-dhaba.png';
import DominosPizzaImg from 'src/images/restaurants/delivery/dominos-pizza.png';
import FabelleChocolatesImg from 'src/images/restaurants/delivery/fabelle-chocolates-itc-sonar.png';
import KFCImg from 'src/images/restaurants/delivery/kfc.png';
import Oudh1590Img from 'src/images/restaurants/delivery/oudh-1590.png';
import MonginisImg from 'src/images/restaurants/delivery/monginis.png';
import BurgerKingImg from 'src/images/restaurants/delivery/burger-king.png';
import MomoIAmImg from 'src/images/restaurants/delivery/momo-i-am.png';
import StarbucksCoffeeImg from 'src/images/restaurants/delivery/starbucks-coffee.png';
import BaskinRobinsImg from 'src/images/restaurants/delivery/baskin-robins.png';

import UN0PizzeriaAndGrillImg from 'src/images/restaurants/dining-out/uno-pizzeria-and-grill.png';
import ChennaiSquareImg from 'src/images/restaurants/dining-out/chennai-square.png';
import WatersideCafeImg from 'src/images/restaurants/dining-out/waterside-cafe.png';
import BeansAndRootsImg from 'src/images/restaurants/dining-out/beans-and-roots.png';
import BiggiesBurgerImg from 'src/images/restaurants/dining-out/biggies-burger.png';
import JungleSafariImg from 'src/images/restaurants/dining-out/jungle-safari.png';
import AsiaAsiAsiaImg from 'src/images/restaurants/dining-out/asia-asia-asia.png';
import FlameAndGrillImg from 'src/images/restaurants/dining-out/flame-and-grill.png';
import _4thStreetDiningHallImg from 'src/images/restaurants/dining-out/4th-street-dining-hall.png';

const restaurants: RestaurantType = {
  Delivery: [
    {
      id: 'Delivery_1',
      type: 'Delivery',
      title: 'Biryani By Kilo',
      subtitle: 'Biryani, Mughlai, Kebab, Hyderabadi',
      imagePath: BirayniByKiloImg,
      rating: 4.1,
      price: '400 for one',
      timeToDeliver: '90 mins',
      discount: '50% OFF',
      numOfRecentOrder: 2400,
      isMaxSafetyDelivery: true,
    },
    {
      id: 'Delivery_2',
      type: 'Delivery',
      title: 'WOW! Momo',
      subtitle: 'Momos, Fast Food, Tibetan',
      imagePath: WowMomoImg,
      rating: 4.0,
      price: '400 for one',
      timeToDeliver: '26 mins',
      discount: '50% OFF',
      numOfRecentOrder: 975,
      isMaxSafetyDelivery: true,
    },
    {
      id: 'Delivery_3',
      type: 'Delivery',
      title: 'Balle Balle Dhaba',
      subtitle: 'North Indian, Mughlai, Kebab',
      imagePath: BalleBalleDhabaImg,
      rating: 3.9,
      price: '400 for one',
      timeToDeliver: '29 mins',
      discount: '40% OFF',
      proDiscount: 'Pro extra 15% OFF',
      isPromoted: true,
      numOfRecentOrder: 3225,
      isMaxSafetyDelivery: true,
    },
    {
      id: 'Delivery_4',
      type: 'Delivery',
      title: "Domino's Pizza",
      subtitle: 'Pizza, Fast Food, Beverages, Desserts',
      imagePath: DominosPizzaImg,
      rating: 4.4,
      price: '400 for one',
      timeToDeliver: '30 mins',
      discount: '30% OFF',
      numOfRecentOrder: 3800,
      isMaxSafetyDelivery: true,
    },
    {
      id: 'Delivery_5',
      type: 'Delivery',
      title: 'Fabelle Chocolates - ITC Sonar',
      subtitle: 'Desserts, Bakery',
      imagePath: FabelleChocolatesImg,
      rating: 4.5,
      price: '400 for one',
      timeToDeliver: '35 mins',
      discount: '50% OFF',
      numOfRecentOrder: 900,
      isPromoted: true,
      isMaxSafetyDelivery: true,
    },
    {
      id: 'Delivery_6',
      type: 'Delivery',
      title: 'KFC',
      subtitle: 'Burger, Fast Food, Biryani, Desserts, Beverages',
      imagePath: KFCImg,
      rating: 4.5,
      price: '400 for one',
      timeToDeliver: '35 mins',
      numOfRecentOrder: 4200,
      isMaxSafetyDelivery: true,
    },
    {
      id: 'Delivery_7',
      type: 'Delivery',
      title: 'Oudh 1590',
      subtitle: 'Biryani, Kebab, Awadhi, Mughlai',
      imagePath: Oudh1590Img,
      rating: 4.2,
      price: '400 for one',
      timeToDeliver: '31 mins',
      discount: '50% OFF',
      numOfRecentOrder: 6300,
      isMaxSafetyDelivery: true,
    },
    {
      id: 'Delivery_8',
      type: 'Delivery',
      title: 'Monginis',
      subtitle: 'Bakery, Desserts, Fast Food',
      imagePath: MonginisImg,
      rating: 3.6,
      price: '100 for one',
      timeToDeliver: '21 mins',
      discount: 'Flat 10% OFF',
      numOfRecentOrder: 725,
      isSafeDelivery: true,
    },
    {
      id: 'Delivery_9',
      type: 'Delivery',
      title: 'Burger King',
      subtitle: 'Burger, Fast Food, Beverages',
      imagePath: BurgerKingImg,
      rating: 3.8,
      price: '100 for one',
      timeToDeliver: '45 mins',
      numOfRecentOrder: 7400,
      isMaxSafetyDelivery: true,
    },
    {
      id: 'Delivery_10',
      type: 'Delivery',
      title: 'Momo I Am',
      subtitle: 'Finger Food, Momos, Tibetan, Asian, Chinese',
      imagePath: MomoIAmImg,
      rating: 4.2,
      price: '100 for one',
      timeToDeliver: '39 mins',
      discount: '30% OFF',
      numOfRecentOrder: 1725,
      isMaxSafetyDelivery: true,
    },
    {
      id: 'Delivery_11',
      type: 'Delivery',
      title: 'Starbucks Coffee',
      subtitle: 'Cafe, Beverages, Fast Food, Desserts',
      imagePath: StarbucksCoffeeImg,
      rating: 4.3,
      price: '150 for one',
      timeToDeliver: '36 mins',
      discount: '50% OFF',
      proDiscount: 'Pro extra 15% OFF',
      isPromoted: true,
      numOfRecentOrder: 700,
      isMaxSafetyDelivery: true,
    },
    {
      id: 'Delivery_12',
      type: 'Delivery',
      title: 'Baskin Robins',
      subtitle: 'Ice Cream, Desserts, Beverages, Shake',
      imagePath: BaskinRobinsImg,
      rating: 4.2,
      price: '50 for one',
      timeToDeliver: '16 mins',
      discount: '20% OFF',
      numOfRecentOrder: 550,
      isMaxSafetyDelivery: true,
    },
  ],
  'Dine-Out': [
    {
      id: 'DineOut_1',
      type: 'Dine-Out',
      title: 'UNI Pizzeria & Grill',
      subtitle: 'Pizza, Italian, Mexican, Continental, Beverages',
      location: 'Kankurgachi, Kolkata',
      imagePath: UN0PizzeriaAndGrillImg,
      rating: 4.4,
      price: '1,200 for two',
      distance: '1.3 km',
      proDiscount: 'Pro - Get 20% off',
      opensAt: '12 noon',
      isMaxSafetyDining: true,
    },
    {
      id: 'DineOut_2',
      type: 'Dine-Out',
      title: 'Chennai Square',
      subtitle: 'South Indian, Beverages',
      location: 'Broadway Mall, Sector 3, Salt Lake, Kolkata',
      imagePath: ChennaiSquareImg,
      rating: 4.5,
      price: '400 for two',
      distance: '285 m',
      proDiscount: 'Pro - Get 15% off',
      isMaxSafetyDining: true,
    },
    {
      id: 'DineOut_3',
      type: 'Dine-Out',
      title: 'Waterside Cafe - Hyatt Regency',
      subtitle: 'North Indian, Continental, Italian, Asian',
      location: 'Hyatt Regency, Sector 3, Salt Lake, Kolkata',
      imagePath: WatersideCafeImg,
      rating: 4.2,
      price: '2,800 for two',
      distance: '957 m',
      opensAt: '12 noon',
    },
    {
      id: 'DineOut_4',
      type: 'Dine-Out',
      title: 'Beans & Roots',
      subtitle: 'Continental, Italian, Chinese, Beverages, Cafe, Shake',
      location: 'Sector 3, Salt Lake, Kolkata',
      imagePath: BeansAndRootsImg,
      rating: 3.9,
      price: '800 for two',
      distance: '692 m',
      opensAt: '12 noon',
    },
    {
      id: 'DineOut_5',
      type: 'Dine-Out',
      title: 'Biggies Burger',
      subtitle: 'Burger, Fast Food, Beverages',
      location: 'Sector 3, Salt Lake, Kolkata',
      imagePath: BiggiesBurgerImg,
      rating: 4.0,
      price: '300 for two',
      distance: '294 m',
      proDiscount: 'Pro - Get 20% off',
    },
    {
      id: 'DineOut_6',
      type: 'Dine-Out',
      title: 'Jungle Safari',
      subtitle: 'North Indian, Mughlai, Biryani, Continental, Desserts',
      location: 'Mani Square Mall, Kankurgachi, Kolkata',
      imagePath: JungleSafariImg,
      rating: 4.3,
      price: '1,000 for two',
      distance: '1.4 km',
      proDiscount: 'Pro - Get 15% off',
      opensAt: '12 noon',
    },
    {
      id: 'DineOut_7',
      type: 'Dine-Out',
      title: 'Asia! Asia! Asia! - Street BBQ & Buffet',
      subtitle: 'Asian, Beverages, Desserts',
      location: 'Sector 5, Salt Lake, Kolkata',
      imagePath: AsiaAsiAsiaImg,
      rating: 4.2,
      price: '1,500 for two',
      distance: '1.9 km',
      proDiscount: 'Pro - Get 15% off',
      opensAt: '12 noon',
    },
    {
      id: 'DineOut_8',
      type: 'Dine-Out',
      title: 'Flame & Grill',
      subtitle: 'North Indian, Bengali, Fast Food',
      location: 'Mani Square Mall, Kankurgachi, Kolkata',
      imagePath: FlameAndGrillImg,
      rating: 4.3,
      price: '2,100 for two',
      distance: '1.4 km',
      proDiscount: 'Pro - Get 15% off',
      opensAt: '12:30 noon',
    },
    {
      id: 'DineOut_9',
      type: 'Dine-Out',
      title: '4th Street Dining Hall',
      subtitle: 'Bengali, Fast Food',
      location: 'Sector 3, Salt Lake, Kolkata',
      imagePath: _4thStreetDiningHallImg,
      rating: 3.9,
      price: '1,000 for two',
      distance: '222 m',
      opensAt: '12 noon',
    },
  ],
  Nightlife: [],
};

export default restaurants;