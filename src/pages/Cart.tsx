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
import { CartContext } from '../contexts/AppContext';
const Cart = () => {
  const [total, setTotal] = useState(0);
  const { cart, setCart, amountInCart, setAmountInCart } =
    useContext(CartContext);

  const handleRemove = (id: string | number) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    localStorage.setItem('cart', JSON.stringify(arr));
    setAmountInCart(amountInCart - 1);
    handleTotal();
  };

  const handleTotal = () => {
    let ans = 0;
    for (const item of cart) {
      ans += item.totalPrice;
    }
    setTotal(ans);
  };

  const increateMountProduct = (index: number) => {
    const fakeCart = [...cart];
    fakeCart[index].count++;
    fakeCart[index].totalPrice = fakeCart[index].price * fakeCart[index].count;
    setCart([...fakeCart]);
    localStorage.setItem('cart', JSON.stringify(fakeCart));
  };

  const decreateMountProduct = (index: number) => {
    const fakeCart = [...cart];
    fakeCart[index].count--;
    if (fakeCart[index].count === 0) {
      fakeCart.splice(index, 1);
      setAmountInCart((prev) => prev - 1);
      setCart([...fakeCart]);
    } else {
      fakeCart[index].totalPrice =
        fakeCart[index].price * fakeCart[index].count;
      setCart([...fakeCart]);
    }
    localStorage.setItem('cart', JSON.stringify(fakeCart));
  };

  useEffect(() => {
    handleTotal();
  }, [cart]);

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
              Shopping Cart ({amountInCart} items)
            </Heading>

            <Stack spacing="6">
              {cart.map((item, index) => (
                <CartItem
                  key={index}
                  description={item.content}
                  quantity={item.quantity}
                  count={item.count}
                  currency={item.currency}
                  imageUrl={item.imageURL[0]}
                  name={item.name}
                  category={item.category}
                  totalPrice={item.totalPrice}
                  price={item.price}
                  onClickDelete={() => handleRemove(item.id)}
                  onIncreate={() => increateMountProduct(index)}
                  onDecreate={() => decreateMountProduct(index)}
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
