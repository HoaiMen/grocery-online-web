import React, { useContext, useEffect, useState } from 'react';
import {
  Box,
  Stack,
  Flex,
  SimpleGrid,
  TabList,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  useDisclosure,
  Select,
  IconButton,
  Text,
} from '@chakra-ui/react';

import CardProduct from './Card';
import { Product } from '../types/products.type';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../api/Product.api';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { CartContext } from '../contexts/AppContext';

const tabs = ['All', 'New', 'Hot', 'On Sale', 'Popular'];

const AllProducts = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [type, setType] = useState('All');
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState<string | number>(1);
  const { cart, setCart, count, setCount } = useContext(CartContext);

  const navigate = useNavigate();
  const handleView = (id: string | number) => {
    navigate(`/product-detail/${id}`);
  };

  const getAllProduct = async (page: string | number, status: string) => {
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
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddCart = (item: Product) => {
    if (cart.indexOf(item) !== -1) return;
    setCart((prev: Product[]) => {
      const newProduct = [...prev, item];
      const jsonCart = JSON.stringify(newProduct);
      localStorage.setItem('cart', jsonCart);
      return newProduct;
    });
    setCount(count + 1);
  };

  useEffect(() => {
    getAllProduct(page, type);
  }, [type, page]);
  return (
    <Box>
      <Tabs variant="soft-rounded" colorScheme="green" my="8">
        <Flex h={12} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <TabList display={{ base: 'none', md: 'flex' }}>
            {tabs.map((tab, index) => (
              <Tab key={index} onClick={() => setType(tab)}>
                {tab}
              </Tab>
            ))}
          </TabList>
          <Flex alignItems={'center'}>
            <Select variant="filled">
              <option value="option1">All Product</option>
              <option value="option2">Fruit</option>
              <option value="option3">Vegetables</option>
            </Select>
          </Flex>
        </Flex>
        <TabPanels>
          {tabs.map((tab, index) => (
            <TabPanel key={index}>
              <SimpleGrid columns={[2, null, 3]} spacing="50px">
                {products.map((item) => (
                  <Box key={item.id}>
                    <CardProduct
                      product={item}
                      handleView={() => handleView(item.id)}
                      handleAdd={() => handleAddCart(item)}
                    />
                  </Box>
                ))}
              </SimpleGrid>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {tabs.map((tab, index) => (
              <Text key={tab}>{tab}</Text>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default AllProducts;
