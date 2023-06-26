import React, {
  Dispatch,
  ReactElement,
  SetStateAction,
  useState,
  useEffect,
} from 'react';
import { Product } from '../types/products.type';
type ICartContext = {
  quantityy: number;
  setQuantityy: Dispatch<SetStateAction<number>>;
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  cart: Product[];
  setCart: Dispatch<SetStateAction<Product[]>>;
};
export const CartContext = React.createContext<ICartContext>({
  quantityy: 1,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setQuantityy: () => {},
  count: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCount: () => {},
  cart: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCart: () => {},
});
type IAppContextProps = {
  children: ReactElement;
};

const AppContextProvider: React.FC<IAppContextProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [count, setCount] = useState(0);
  const [quantityy, setQuantityy] = useState(1);

  useEffect(() => {
    const storageCart = localStorage.getItem('cart');
    if (storageCart) {
      setCart(JSON.parse(storageCart));
    } else {
      setCart([]);
    }
  }, []);

  return (
    <CartContext.Provider
      value={{ cart, setCart, count, setCount, quantityy, setQuantityy }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default AppContextProvider;
