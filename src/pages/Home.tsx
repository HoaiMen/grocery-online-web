import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import {
  Box,
  HStack,
  Text,
  Image,
  useColorModeValue,
  Button,
  SimpleGrid,
  AbsoluteCenter,
} from '@chakra-ui/react';
import { AiFillApple, AiFillGoogleSquare } from 'react-icons/ai';
import ProductCard from '../components/ProductCard';
import NavProduct from '../components/NavProduct';
import Paginate from '../components/Pagination';
const Home = () => {
  return (
    <DefaultLayout>
      <Box w="100%">
        <HStack justify={'space-between'} bg="green.50">
          <Box w="60%" px="4">
            <Text
              fontFamily={'sans-serif'}
              fontWeight={'bold'}
              fontSize={40}
              color={useColorModeValue('green.300', 'white')}
            >
              Fresh
            </Text>
            <Text
              fontFamily={'sans-serif'}
              fontWeight={'bold'}
              fontSize={52}
              // color={useColorModeValue('green.300', 'white')}
            >
              Online Grocery Shopping.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              a sodales lectus. In malesuada ipsum vitae lectus fermentum
              vehicula.
            </Text>
            <SimpleGrid columns={{ sm: 1, md: 2 }} pt="8">
              <Box>
                <Button
                  bg="black"
                  leftIcon={<AiFillApple size="2.5rem" color="white" />}
                  colorScheme="teal"
                  variant="solid"
                  p="8"
                >
                  <Box textAlign="left" textColor="white" padding="4">
                    <Text fontSize="xs" textColor="gray">
                      Available on the
                    </Text>
                    <Text>App Story</Text>
                  </Box>
                </Button>
              </Box>
              <Box>
                <Button
                  leftIcon={<AiFillGoogleSquare size="2.5rem" color="white" />}
                  colorScheme="teal"
                  bg="black"
                  variant="solid"
                  p="8"
                >
                  <Box textAlign="left" padding="4" textColor="white">
                    <Text fontSize="xs" textColor="gray">
                      Get it on
                    </Text>
                    <Text>Google Play</Text>
                  </Box>
                </Button>
              </Box>
            </SimpleGrid>
          </Box>
          <Box
            bgGradient="linear(to-t, green.300, orange.400)"
            rounded="xl"
            w="40%"
          >
            <Image
              objectFit="cover"
              w="100%"
              mixBlendMode={'overlay'}
              src="https://img.freepik.com/free-vector/flat-people-order-food-online-grocery-shopping-from-mobile-application-internet-purchases-with-home-delivery-from-supermarket-store-smartphone-screen-with-buy-button-basket-full-products_88138-856.jpg"
            />
          </Box>
        </HStack>
        <Box>
          <NavProduct />
        </Box>
        <SimpleGrid columns={[2, null, 3]} spacing="60px">
          <ProductCard />
        </SimpleGrid>
        <Box w="100%" py="12">
          <Box position="relative" bg="orange">
            <AbsoluteCenter bg="tomato" color="white" axis="both">
              <Paginate
                page={0}
                count={0}
                pageSize={0}
                // onPageChange={function (page: number) {
                //   throw new Error('Function not implemented.');
                // }}
                fontWeight={'bold'}
                borderRadius={'base'}
              />
            </AbsoluteCenter>
          </Box>
        </Box>
      </Box>
    </DefaultLayout>
  );
};
export default Home;
