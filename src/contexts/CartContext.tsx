import React, {
  Dispatch,
  ReactElement,
  SetStateAction,
  useState,
  useEffect,
} from 'react';
import { Product, DetailProduct } from '../types/products.type';
import { ProductCart } from '../types/product-cart.type';

type ICartContextProps = {
  children: ReactElement;
};
type ICartContext = {
  amountInCart: number;
  setAmountInCart: Dispatch<SetStateAction<number>>;
  cart: ProductCart[];
  setCart: React.Dispatch<React.SetStateAction<ProductCart[]>>;
  handleAddCart: (arg: Product | DetailProduct) => void;
};

export const CartContext = React.createContext<ICartContext>({
  amountInCart: 0,
  setAmountInCart: () => {},
  cart: [],
  setCart: () => {},
  handleAddCart: () => {},
});

const CartContextProvider: React.FC<ICartContextProps> = ({ children }) => {
  const [cart, setCart] = useState<ProductCart[]>([]);
  const [amountInCart, setAmountInCart] = useState(0);

  const handleAddCart = (item: Product | DetailProduct) => {
    const index = cart.findIndex((c) => c.id === item.id);
    if (index !== -1) {
      cart[index].count++;
      cart[index].totalPrice = cart[index].price * cart[index].count;
      setCart([...cart]);
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      const fakeCart = [...cart, { ...item, totalPrice: item.price, count: 1 }];
      setCart([...fakeCart]);
      localStorage.setItem('cart', JSON.stringify(fakeCart));
      setAmountInCart((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const storageCart = localStorage.getItem('cart');
    if (storageCart) {
      setCart(JSON.parse(storageCart));
      setAmountInCart(JSON.parse(storageCart).length);
    } else {
      setCart([]);
      setAmountInCart(0);
    }
  }, []);
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        amountInCart,
        setAmountInCart,
        handleAddCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
