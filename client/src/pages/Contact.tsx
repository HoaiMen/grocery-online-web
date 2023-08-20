import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import { Box } from '@chakra-ui/react';
import ContactPage from '../components/Contact/ContactPage';
const Contact = () => {
  return (
    <DefaultLayout>
      <Box>
        <ContactPage />
      </Box>
    </DefaultLayout>
  );
};
export default Contact;
