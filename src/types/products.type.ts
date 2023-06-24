export type Product = {
  id: string | number;
  name: string;
  isNew: boolean;
  isHot: boolean;
  onSale: boolean;
  popular: boolean;
  currency: string;
  quantity: number;
  category: string;
  content: string;
  imageURL: Array<string>;
  price: number;
  rating: number;
  numReviews: number;
};
