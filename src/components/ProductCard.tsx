import React from 'react';
import {
  Box,
  Card,
  CardBody,
  Stack,
  Text,
  Heading,
  Image,
  Button,
  CardFooter,
  Flex,
  Circle,
  Badge,
} from '@chakra-ui/react';
import Rating from './Rating';
const data = {
  isNew: true,
  imageURL:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHYB0hjdz2Zvnn7NvJoZAK7i8J1bnaikxKMA&usqp=CAU',
  name: 'Wayfarer Classic',
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};
const ProductCard = () => {
  return (
    <Box>
      <Card maxW="sm">
        {data.isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )}
        <CardBody>
          <Image
            w="100%"
            src={data.imageURL}
            alt={`Picture of ${data.name}`}
            borderRadius="lg"
          />
          <Stack mt="4" spacing="3">
            <Box display="flex" alignItems="baseline">
              {data.isNew && (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  New
                </Badge>
              )}
            </Box>
            <Heading size="md">{data.name}</Heading>
            <Text noOfLines={2} fontSize="sm">
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design
              with a sprinkle of vintage design.
            </Text>

            <Rating rating={data.rating} numReviews={data.numReviews} />
            <Flex gap={2} alignItems="center">
              <Box color="blue.600" fontWeight="bold" fontSize="lg">
                <Box as="span">$</Box>
                {data.price.toFixed(2)}
              </Box>
              <Text fontSize="xs" textColor={'gray'}>
                / 500 gram
              </Text>
            </Flex>
          </Stack>
        </CardBody>
        <CardFooter pt={-2}>
          <Button variant="solid" colorScheme="green" w="100%">
            Add to cart
          </Button>
        </CardFooter>
      </Card>
    </Box>
  );
};
export default ProductCard;
