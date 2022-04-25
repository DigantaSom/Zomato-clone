import { SlideShowI } from 'src/types';

import DominosPizzaImg from 'src/images/top-brands/dominos-pizza.png';
import WowMomoImg from 'src/images/top-brands/wow-momo.png';
import SubwayImg from 'src/images/top-brands/subway.png';
import ChowmanImg from 'src/images/top-brands/chowman.png';
import ArsalanImg from 'src/images/top-brands/arsalan.png';
import KFCImg from 'src/images/top-brands/kfc.png';
import MamaMiaImg from 'src/images/top-brands/mama-mia.png';
import AminiaImg from 'src/images/top-brands/aminia.png';
import EdabbaImg from 'src/images/top-brands/edabba.png';
import KwalityWallsImg from 'src/images/top-brands/kwality-walls.png';

const topBrands: SlideShowI[] = [
  {
    id: '1',
    title: "Domino's Pizza",
    imagePath: DominosPizzaImg,
    route: '#',
    subtitle: '30 min',
  },
  {
    id: '2',
    title: 'WOW! Momo',
    imagePath: WowMomoImg,
    route: '#',
    subtitle: '25 min',
  },
  {
    id: '3',
    title: 'Subway',
    imagePath: SubwayImg,
    route: '#',
    subtitle: '27 min',
  },
  {
    id: '4',
    title: 'Chowman',
    imagePath: ChowmanImg,
    route: '#',
    subtitle: '30 min',
  },
  {
    id: '5',
    title: 'Arsalan',
    imagePath: ArsalanImg,
    route: '#',
    subtitle: '28 min',
  },
  {
    id: '6',
    title: 'KFC',
    imagePath: KFCImg,
    route: '#',
    subtitle: '26 min',
  },
  {
    id: '7',
    title: 'Mama Mia!',
    imagePath: MamaMiaImg,
    route: '#',
    subtitle: '28 min',
  },
  {
    id: '8',
    title: 'Aminia',
    imagePath: AminiaImg,
    route: '#',
    subtitle: '30 min',
  },
  {
    id: '9',
    title: 'edabba',
    imagePath: EdabbaImg,
    route: '#',
    subtitle: '32 min',
  },
  {
    id: '10',
    title: "Kwality Wall's",
    imagePath: KwalityWallsImg,
    route: '#',
    subtitle: '31 min',
  },
];

export default topBrands;
