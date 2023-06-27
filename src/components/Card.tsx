import React from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Flex,
  Heading,
  Text,
  Box,
  Button,
  Badge,
  Link,
  SimpleGrid,
} from '@chakra-ui/react';
import Rating from './Rating';
import { Product } from '../types/products.type';
type ICardProp = {
  product: Product;
  handleAdd?: () => void;
  handleView?: () => void;
};
const CardProduct: React.FC<ICardProp> = ({
  product,
  handleAdd,
  handleView,
}) => {
  return (
    <Card maxW="full" bg="cyan.200">
      <CardBody>
        <Box borderRadius="lg" bg="orange.100" overflow="hidden">
          <Link
            textDecoration="none"
            _hover={{ textDecoration: 'none' }}
            onClick={handleView}
          >
            <Image
              transform="scale(1.0)"
              src={product.imageURL[0]}
              alt={`Picture of ${product.name}`}
              objectFit="cover"
              h={{ base: '150px', md: '230px' }}
              width="100%"
              transition="0.3s ease-in-out"
              _hover={{
                transform: 'scale(1.05)',
              }}
            />
          </Link>
        </Box>
        <Stack mt="4" spacing="3">
          <Box w={{ base: '50%', md: '100%' }}>
            {product.isNew && <Status color="blue" lable="New" />}
            {product.isHot && <Status color="red" lable="Hot" />}
            {product.onSale && <Status color="green" lable="On Sale" />}
            {product.popular && <Status color="gray" lable="Popular" />}
          </Box>
          <Heading size="md">{product.name}</Heading>
          <Text noOfLines={2} fontSize="sm">
            {product.content}
          </Text>

          <Rating rating={product.rating} numReviews={product.numReviews} />
          <Flex gap={2} alignItems="center">
            <Box color="blue.600" fontWeight="bold" fontSize="lg">
              <Box as="span">$</Box>
              {product.price.toFixed(2)}
            </Box>
            <Text fontSize="xs" textColor={'gray'}>
              / 500 gram
            </Text>
          </Flex>
        </Stack>
      </CardBody>
      <CardFooter pt={-2}>
        <SimpleGrid columns={[1, null, 2]} spacing={8} w="full">
          <Button
            variant="solid"
            colorScheme="green"
            w="100%"
            onClick={handleAdd}
          >
            Add to cart
          </Button>
          <Button
            variant="solid"
            colorScheme="green"
            w="100%"
            onClick={handleView}
          >
            View detail
          </Button>
        </SimpleGrid>
      </CardFooter>
    </Card>
  );
};

type IStatusProps = {
  lable: string;
  color: string;
};
const Status: React.FC<IStatusProps> = ({ lable, color }) => {
  return (
    <Badge rounded="full" px="2" mr="2" fontSize="0.8em" colorScheme={color}>
      {lable}
    </Badge>
  );
};
export default CardProduct;
