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
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { CartContext } from '../contexts/CartContext';
import { ListContext } from '../contexts/ListProductContext';

const tabs = ['All', 'New', 'Hot', 'On Sale', 'Popular'];
const options = ['All Product', 'Fruit', 'Vegetables'];
const AllProducts = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { products, type, setType, page, handleView, getAllProduct } =
    useContext(ListContext);
  const [choose, setChoose] = useState('All Product');
  const { handleAddCart } = useContext(CartContext);
  useEffect(() => {
    getAllProduct(page, type);
  }, [type, page]);
  return (
    <Box>
      <Tabs variant="soft-rounded" colorScheme="green" my="8">
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
          <TabList display={{ base: 'none', md: 'flex' }}>
            {tabs.map((tab, index) => (
              <Tab key={index} onClick={() => setType(tab)}>
                {tab}
              </Tab>
            ))}
          </TabList>
          <Flex alignItems={'center'}>
            <Select variant="filled" bg={'white'}>
              {options.map((option, index) => (
                <option
                  key={index}
                  onClick={() => setChoose(option)}
                  value="option1"
                >
                  {option}
                </option>
              ))}
            </Select>
          </Flex>
        </Flex>
        <TabPanels>
          {tabs.map((tab, index) => (
            <TabPanel key={index}>
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
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>

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
