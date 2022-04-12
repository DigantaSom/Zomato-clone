export interface TileI {
  id: string;
  title: string;
  imagePath: string;
}

export interface CollectionItemI extends TileI {
  numberOfPlaces: number;
}
