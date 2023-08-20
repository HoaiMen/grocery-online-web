import React, { ReactElement, useState, Dispatch, SetStateAction } from 'react';
import { Product } from '../types/products.type';
import { getProducts } from '../api/Product.api';
import { useNavigate } from 'react-router-dom';
type IProvider = {
  children: ReactElement;
};
type IListContext = {
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
  type: string;
  setType: Dispatch<React.SetStateAction<string>>;
  option: string;
  setOption: Dispatch<React.SetStateAction<string>>;
  page: number | string;
  setPage: Dispatch<React.SetStateAction<string | number>>;
  handleView: (arg: string | number) => void;
  getAllProduct: (arg: string | number, arg1: string, arg2: string) => void;
};

export const ListContext = React.createContext<IListContext>({
  products: [],
  setProducts: () => {},
  type: '',
  setType: () => {},
  option: '',
  setOption: () => {},
  page: 0,
  setPage: () => {},
  handleView: () => {},
  getAllProduct: () => {},
});
const ListContextProvider: React.FC<IProvider> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [type, setType] = useState('All');
  const [option, setOption] = useState('All Product');
  const [page, setPage] = useState<string | number>(1);
  const navigate = useNavigate();
  const handleView = (id: string | number) => {
    navigate(`/product-detail/${id}`);
  };
  const getAllProduct = async (
    page: string | number,
    status: string,
    choose: string
    // limit: string | number
  ) => {
    try {
      const products = await getProducts(page);
      let result;
      switch (status) {
        case 'New':
          result = products.data.filter((el) => el.isNew);
          setProducts(result);
          break;
        case 'Hot':
          result = products.data.filter((el) => el.isHot);
          setProducts(result);
          break;
        case 'On Sale':
          result = products.data.filter((el) => el.onSale);
          setProducts(result);
          break;
        case 'Popular':
          result = products.data.filter((el) => el.popular);
          setProducts(result);
          break;
        default:
          setProducts(products.data);
          break;
      }
      console.log('result:', result);
      let ray;
      if (choose === 'Fruit') {
        ray = products.data.filter((el) => el.category === 'fruit');
        setProducts(ray);
      } else if (choose === 'Vegetables') {
        ray = products.data.filter((el) => el.category === 'vegetables');
        setProducts(ray);
      } else {
        setProducts(products.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ListContext.Provider
      value={{
        products,
        setProducts,
        type,
        setType,
        page,
        setPage,
        handleView,
        getAllProduct,
        option,
        setOption,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
export default ListContextProvider;
