import React from 'react';
import { AiFillGoogleSquare, AiFillApple, AiFillAlert } from 'react-icons/ai';
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import Blob from './Blob';

const Introduce = () => {
  return (
    <Container maxW={'7xl'} bg="green.50">
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 8, md: 12 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <Text
              fontFamily={'sans-serif'}
              fontWeight={'bold'}
              fontSize={45}
              color={useColorModeValue('green.400', 'white')}
            >
              Fresh
            </Text>
            <Text fontFamily={'sans-serif'} fontWeight={'bold'}>
              Online Grocery Shopping.
            </Text>
          </Heading>
          <Text color={'gray.600'}>
            Snippy is a rich coding snippets app that lets you create your own
            code snippets, categorize them, and even sync them in the cloud so
            you can use them anywhere. All that is free!
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}
          >
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
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Blob
            w={'130%'}
            h={'130%'}
            position={'absolute'}
            top={'-12%'}
            left="-24"
            zIndex={0}
            color={useColorModeValue('orange.100', 'red.400')}
          />
          <Box
            position={'relative'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            height={'430px'}
            overflow={'hidden'}
          >
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                'https://img.freepik.com/free-vector/flat-people-order-food-online-grocery-shopping-from-mobile-application-internet-purchases-with-home-delivery-from-supermarket-store-smartphone-screen-with-buy-button-basket-full-products_88138-856.jpg'
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};
export default Introduce;
