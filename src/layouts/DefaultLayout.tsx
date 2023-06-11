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
      <Box>
        <Navbar />
      </Box>
      <Box px={14} py={4}>
        {children}
      </Box>
      <Box>
        <Footer />
      </Box>
    </React.Fragment>
  );
};
export default DefaultLayout;
