export type Phone = {
  id: number;
  name: string;
  price: number;
  image: string;
  colors: string[];
  popularity: number;
  desc: string;
};
export type Phones = Phone[];

export type CartItem = {
  product: Phone;
  quantity: number;
};
