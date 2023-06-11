import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import {
  Box,
  HStack,
  Text,
  Image,
  useColorModeValue,
  Stack,
  Button,
} from '@chakra-ui/react';
import { ArrowForwardIcon, EmailIcon } from '@chakra-ui/icons';
const Home = () => {
  return (
    <DefaultLayout>
      <Box w="100%">
        <HStack justify={'space-between'}>
          <Box w="60%" p="12" bg="blue.100">
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
            <Stack direction="row" spacing={4} pt="8">
              <Button
                leftIcon={<EmailIcon />}
                colorScheme="teal"
                variant="solid"
                p="8"
              >
                <Box textAlign="left" p={4}>
                  <Text>Available on the</Text>
                  <Text>App Story</Text>
                </Box>
              </Button>
              <Button
                leftIcon={<EmailIcon />}
                colorScheme="teal"
                variant="solid"
                p="8"
              >
                <Box textAlign="left" padding="4">
                  <Text>Available on the</Text>
                  <Text>App Story</Text>
                </Box>
              </Button>
            </Stack>
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
      </Box>
    </DefaultLayout>
  );
};
export default Home;
