import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import { Box, AbsoluteCenter } from '@chakra-ui/react';
import AllProducts from '../components/AllProducts';
import Paginate from '../components/Pagination';
import Introduce from '../components/Introduce';
const Home = () => {
  return (
    <DefaultLayout>
      <Box w="100%">
        <Introduce />
        <AllProducts />
        <Box w="100%" py="12">
          <Box position="relative" bg="orange">
            <AbsoluteCenter bg="tomato" color="white" axis="both">
              <Paginate
                page={0}
                count={0}
                pageSize={0}
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
