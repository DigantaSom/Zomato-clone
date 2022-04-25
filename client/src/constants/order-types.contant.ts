import { SlideShowI } from '../types';

import HomeStyleImg from 'src/images/order-types/home-style.png';
import BiryaniImg from 'src/images/order-types/biryani.png';
import PizzaImg from 'src/images/order-types/pizza.png';
import ChickenImg from 'src/images/order-types/chicken.png';
import DosaImg from 'src/images/order-types/dosa.png';
import ChaatImg from 'src/images/order-types/chaat.png';
import IceCreamImg from 'src/images/order-types/ice-cream.png';
import RollsImg from 'src/images/order-types/rolls.png';
import SandwichImg from 'src/images/order-types/sandwich.png';
import SaladImg from 'src/images/order-types/salad.png';
import MomosImg from 'src/images/order-types/momos.png';
import NoodlesImg from 'src/images/order-types/noodles.png';

const orderTypes: SlideShowI[] = [
  {
    id: '1',
    title: 'Home Style',
    imagePath: HomeStyleImg,
    route: '#',
  },
  {
    id: '2',
    title: 'Biryani',
    imagePath: BiryaniImg,
    route: '#',
  },
  {
    id: '3',
    title: 'Pizza',
    imagePath: PizzaImg,
    route: '#',
  },
  {
    id: '4',
    title: 'Chicken',
    imagePath: ChickenImg,
    route: '#',
  },
  {
    id: '5',
    title: 'Dosa',
    imagePath: DosaImg,
    route: '#',
  },
  {
    id: '6',
    title: 'Chaat',
    imagePath: ChaatImg,
    route: '#',
  },
  {
    id: '7',
    title: 'Ice Cream',
    imagePath: IceCreamImg,
    route: '#',
  },
  {
    id: '8',
    title: 'Rolls',
    imagePath: RollsImg,
    route: '#',
  },
  {
    id: '9',
    title: 'Sandwich',
    imagePath: SandwichImg,
    route: '#',
  },
  {
    id: '10',
    title: 'Salad',
    imagePath: SaladImg,
    route: '#',
  },
  {
    id: '11',
    title: 'Momos',
    imagePath: MomosImg,
    route: '#',
  },
  {
    id: '12',
    title: 'Noodles',
    imagePath: NoodlesImg,
    route: '#',
  },
];

export default orderTypes;
