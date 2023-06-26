import React, { useState, useEffect, useContext } from 'react';
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
// import { Product } from '../types/products.type';
import { CartContext } from '../contexts/AppContext';
const Cart = () => {
  const [total, setTotal] = useState(0);
  const { cart, setCart, quantityy, count, setCount } = useContext(CartContext);
  console.log('cart: ', cart);

  const handleRemove = (id: string | number) => {
    console.log('cart: ', cart);

    const arr = cart.filter((item) => item.id !== id);
    console.log('arr:', arr);
    setCart(arr);
    setCount(count - 1);
    handleTotal();
  };

  const handleTotal = () => {
    let ans = 0;
    cart.map((item) => (ans += quantityy * item.price));
    setTotal(ans);
  };

  // const handleChange = (item: Product, d: number) => {
  //   const ind = cart.indexOf(item);
  //   const arr = cart;
  //   arr[ind].quantity += d;

  //   if (arr[ind].quantity === 0) {
  //     arr[ind].quantity = 1;
  //   }
  //   setCart([...cart]);
  // };

  useEffect(() => {
    handleTotal();
  });
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
              Shopping Cart ({count} items)
            </Heading>

            <Stack spacing="6">
              {cart.map((item, index) => (
                <CartItem
                  key={index}
                  description={item.content}
                  quantity={item.quantity}
                  currency={item.currency}
                  imageUrl={item.imageURL[0]}
                  name={item.name}
                  category={item.category}
                  price={item.price}
                  onClickDelete={() => handleRemove(item.id)}
                  // onChangeQuantity={() => handleChange}
                />
              ))}
            </Stack>
          </Stack>

          <Flex direction="column" align="center" flex="1">
            <CartOrderSummary value={total} />
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
