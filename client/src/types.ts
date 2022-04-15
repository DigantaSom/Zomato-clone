export interface TileI {
  id: string;
  title: string;
  imagePath: string;
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
