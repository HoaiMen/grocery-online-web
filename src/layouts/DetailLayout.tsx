import React, { ReactElement } from 'react';
import Navbar from '../components/Navbar';
import { Box } from '@chakra-ui/react';
type IDetailProps = {
  children: ReactElement;
};
const DetailLayout: React.FC<IDetailProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Box>
        <Navbar />
      </Box>
      <Box mx={14}>{children}</Box>
    </React.Fragment>
  );
};
export default DetailLayout;
