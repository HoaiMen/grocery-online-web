import React, { useContext, useEffect } from 'react';
import {
  Box,
  Flex,
  SimpleGrid,
  Stack,
  Button,
  useDisclosure,
  Select,
  IconButton,
  Text,
} from '@chakra-ui/react';

import CardProduct from './Card';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { CartContext } from '../contexts/CartContext';
import { ListContext } from '../contexts/ListProductContext';

const tabs = ['New', 'Hot', 'On Sale', 'Popular'];
const options = ['All Product', 'Fruit', 'Vegetables'];
const AllProducts = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    products,
    type,
    setType,
    setOption,
    page,
    handleView,
    getAllProduct,
    option,
  } = useContext(ListContext);
  console.log('All Products: ', products);
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOption(event.target.value);
  };
  const { handleAddCart } = useContext(CartContext);
  useEffect(() => {
    getAllProduct(page, type, option);
  }, [type, page, option]);
  return (
    <Box pt={4}>
      <Flex
        h={12}
        alignItems={'center'}
        justifyContent={'space-between'}
        bg="gray.200"
        p={4}
      >
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <Flex display={{ base: 'none', md: 'flex' }}>
          {tabs.map((tab, index) => (
            <Button
              key={index}
              onClick={() => setType(tab)}
              bg={'gray.200'}
              _focus={{ bg: 'green.200' }}
            >
              {tab}
            </Button>
          ))}
        </Flex>
        <Flex alignItems={'center'}>
          <Select
            variant="filled"
            bg={'white'}
            onChange={(e) => handleChange(e)}
          >
            {options.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Select>
        </Flex>
      </Flex>
      <Box pt={4}>
        <SimpleGrid columns={[2, null, 4]} spacing="30px">
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
      </Box>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {tabs.map((tab) => (
              <Text key={tab}>{tab}</Text>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default AllProducts;
