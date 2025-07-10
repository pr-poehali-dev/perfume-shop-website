export interface Perfume {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  description: string;
  volume: string;
  category: string;
  isFavorite: boolean;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
}

export type Section = "catalog" | "favorites" | "reviews" | "contacts";
