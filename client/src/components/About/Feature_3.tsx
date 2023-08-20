import React, { ReactElement } from 'react';
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Heading,
  Container,
} from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
  background: string;
}

const Feature = ({ title, text, icon, background }: FeatureProps) => {
  return (
    <Stack bg={background} p="4">
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}
      >
        {icon}
      </Flex>
      <Text color={'white'} fontWeight={600}>
        {title}
      </Text>
      <Text color={'white'}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={4}>
      <Stack
        spacing={4}
        as={Container}
        py="4"
        maxW={'3xl'}
        textAlign={'center'}
      >
        <Heading fontSize={'3xl'}>This is the headline</Heading>
      </Stack>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          background="blue.400"
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={'Lifetime Support'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
          background="green.400"
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={'Unlimited Donations'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
          background="purple.400"
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'Instant Delivery'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
      </SimpleGrid>
    </Box>
  );
}
