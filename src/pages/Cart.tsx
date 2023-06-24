import React, { useState, useEffect } from 'react';
import DetailLayout from '../layouts/DetailLayout';
import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { CartItem } from '../components/CartItem';
import { CartOrderSummary } from '../components/CartOder';
import { getProducts } from '../api/Product.api';
import { Product } from '../types/products.type';
const Cart = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState<string | number>(1);
  const getAllProduct = async (page: string | number) => {
    try {
      const products = await getProducts(page);
      setProducts(products.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllProduct(page);
  }, [page]);
  return (
    <DetailLayout>
      <Box
        maxW={{ base: '3xl', lg: '7xl' }}
        mx="auto"
        px={{ base: '4', md: '8', lg: '12' }}
        py={{ base: '6', md: '8', lg: '12' }}
      >
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          align={{ lg: 'flex-start' }}
          spacing={{ base: '8', md: '16' }}
        >
          <Stack spacing={{ base: '8', md: '10' }} flex="2">
            <Heading fontSize="2xl" fontWeight="extrabold">
              Shopping Cart (3 items)
            </Heading>

            <Stack spacing="6">
              {products.map((item) => (
                <CartItem
                  key={item.id}
                  description={item.content}
                  quantity={item.quantity}
                  currency={item.currency}
                  imageUrl={item.imageURL[0]}
                  name={item.name}
                  category={item.category}
                  price={item.price}
                />
              ))}
            </Stack>
          </Stack>

          <Flex direction="column" align="center" flex="1">
            <CartOrderSummary />
            <HStack mt="6" fontWeight="semibold">
              <p>or</p>
              <Link color={mode('blue.500', 'blue.200')}>
                Continue shopping
              </Link>
            </HStack>
          </Flex>
        </Stack>
      </Box>
    </DetailLayout>
  );
};
export default Cart;
