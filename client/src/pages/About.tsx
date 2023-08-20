import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import SplitWithImage from '../components/About/Feature_1';
import { Box } from '@chakra-ui/react';
import SimpleThreeColumns from '../components/About/Feature_3';
import GridListWithHeading from '../components/About/Feature_2';
const About = () => {
  return (
    <DefaultLayout>
      <Box px="14">
        <SplitWithImage />
        <SimpleThreeColumns />
        <GridListWithHeading />
      </Box>
    </DefaultLayout>
  );
};
export default About;
