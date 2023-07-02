import React, { useState, useEffect, useContext } from 'react';
import DetailLayout from '../layouts/DetailLayout';
import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useDisclosure,
  Container,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import ModalDetail from '../components/ModalDetail';
import { CartItem } from '../components/CartItem';
import { CartOrderSummary } from '../components/CartOder';
import { CartContext } from '../contexts/CartContext';
import { ModalContext, OverlayOne } from '../contexts/ModalContext';
import { Product } from '../types/products.type';
import BodyModal from '../components/BodyModal';
const Cart = () => {
  const [total, setTotal] = useState(0);
  const { cart, setCart, amountInCart, setAmountInCart } =
    useContext(CartContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { overlay, setOverlay } = useContext(ModalContext);
  const [dataProduct, setDataProduct] = useState<Pick<
    Product,
    | 'name'
    | 'imageURL'
    | 'content'
    | 'price'
    | 'category'
    | 'rating'
    | 'numReviews'
  > | null>(null);

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
      <Container maxW={'full'}>
        {dataProduct && (
          <ModalDetail open={isOpen} close={onClose} overlayy={overlay}>
            <BodyModal
              image={dataProduct?.imageURL[0]}
              namep={dataProduct?.name}
              content={dataProduct?.content}
              price={dataProduct?.price}
              category={dataProduct?.category}
              numReviews={dataProduct?.numReviews}
              rating={dataProduct?.rating}
            />
          </ModalDetail>
        )}
        <Box
          maxW={{ base: '3xl', lg: '7xl' }}
          mx="auto"
          px={{ base: '4', md: '8', lg: '4' }}
          py={{ base: '2', md: '4', lg: '4' }}
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
                    openModal={() => {
                      setOverlay(<OverlayOne />),
                        onOpen(),
                        setDataProduct(item);
                    }}
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
      </Container>
    </DetailLayout>
  );
};
export default Cart;
