import React, { ReactElement } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Box } from '@chakra-ui/react';
type IDefaultProps = {
  children: ReactElement;
};
const DefaultLayout: React.FC<IDefaultProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Box w="full" position="fixed" zIndex="2">
        <Navbar />
      </Box>
      <Box mx={{ base: '0', md: '20' }} py="20" position="sticky">
        {children}
      </Box>
      <Box>
        <Footer />
      </Box>
    </React.Fragment>
  );
};
export default DefaultLayout;
