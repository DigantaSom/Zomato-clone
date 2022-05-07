import { IconType } from 'react-icons';

export interface TileI {
  id: string;
  title: string;
  imagePath: string;
  route: string;
}

export interface CollectionItemI extends TileI {
  numberOfPlaces: number;
}

export interface LocalityI {
  id: string;
  name: string;
  numberOfPlaces: number;
}

export type ExploreOptionsKeyType =
  | 'Popular cuisines near me'
  | 'Popular restaurant types near me'
  | 'Top Restaurant Chains'
  | 'Cities We Deliver To';

export type ExploreOptionsValueTextType = {
  id: string;
  text: string;
  url: string;
};

type ExploreOptionsValueType = {
  value: ExploreOptionsValueTextType[];
  displayType: 'dotted' | 'column';
};

export type ExploreOptionsType = Record<
  ExploreOptionsKeyType,
  ExploreOptionsValueType
>;

export interface CountryFlagI {
  id: string;
  name: string;
  flagUri: string;
}

export interface FilterOptionI {
  id: string;
  name: string;
  iconName?: string;
  isDropdown: boolean;
}

export type SlideshowType = 'order' | 'brands';

export interface SlideShowI extends TileI {
  subtitle?: string;
}

export type RestaurantKeyTypes = 'Delivery' | 'Dine-Out' | 'Nightlife';
export type RestaurantValueType = {
  id: string;
  title: string;
  subtitle: string;
  imagePath: string;
  rating: number;
  price: string;
  timeToDeliver: string;
  discount?: string;
  proDiscount?: string;
  isPromoted?: boolean;
  numOfRecentOrder: number;
  isMaxSafetyDelivery?: boolean;
  isSafeDelivery?: boolean;
};
export type RestaurantType = Record<RestaurantKeyTypes, RestaurantValueType[]>;
