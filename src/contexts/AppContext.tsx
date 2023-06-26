import React, {
  Dispatch,
  ReactElement,
  SetStateAction,
  useState,
  useEffect,
} from 'react';
import { Product } from '../types/products.type';
import { ProductCart } from '../types/product-cart.type';
type ICartContext = {
  quantityy: number;
  setQuantityy: Dispatch<SetStateAction<number>>;
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  cart: ProductCart[];
  setCart: React.Dispatch<React.SetStateAction<ProductCart[]>>;
  handleAddCart: (arg: Product) => void;
};
export const CartContext = React.createContext<ICartContext>({
  quantityy: 1,
  setQuantityy: () => {},
  count: 0,
  setCount: () => {},
  cart: [],
  setCart: () => {},
  handleAddCart: (agr: Product) => {},
});

type IAppContextProps = {
  children: ReactElement;
};

const AppContextProvider: React.FC<IAppContextProps> = ({ children }) => {
  const [cart, setCart] = useState<ProductCart[]>([]);
  const [count, setCount] = useState(0);
  const [quantityy, setQuantityy] = useState(1);

  const handleAddCart = (item: Product) => {
    const index = cart.findIndex((c) => c.id === item.id);
    if (index !== -1) {
      cart[index].count++;
      cart[index].totalPrice = cart[index].price * cart[index].count;
      setCart([...cart]);
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      const carts = [...cart, { ...item, totalPrice: item.price, count: 1 }];
      setCart([...carts]);
      localStorage.setItem('cart', JSON.stringify(carts));
      setCount(count + 1);
    }
  };

  useEffect(() => {
    const storageCart = localStorage.getItem('cart');
    if (storageCart) {
      setCart(JSON.parse(storageCart));
      setCount(JSON.parse(storageCart).length);
    } else {
      setCart([]);
      setCount(0);
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        count,
        setCount,
        quantityy,
        setQuantityy,
        handleAddCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default AppContextProvider;
