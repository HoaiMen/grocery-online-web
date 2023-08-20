export interface Product {
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
}

export type DetailProduct = Pick<
  Product,
  | 'name'
  | 'id'
  | 'imageURL'
  | 'content'
  | 'price'
  | 'category'
  | 'quantity'
  | 'currency'
  | 'rating'
  | 'numReviews'
>;

//export type BodyPost = Pick<Post, 'body' | 'title'>;
// => {
//     title: string;
//      body: string;
// }
