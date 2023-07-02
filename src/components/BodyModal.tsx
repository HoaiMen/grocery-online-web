import React from 'react';
import {
  Container,
  Box,
  Image,
  useColorModeValue,
  Divider,
  Text,
  List,
  ListItem,
  Button,
} from '@chakra-ui/react';
import Rating from './Rating';
type IBodyModalProps = {
  image: string;
  namep: string;
  content: string;
  price: number;
  category: string;
  numReviews: number;
  rating: number;
};
const BodyModal = (props: IBodyModalProps) => {
  const { image, namep, price, category, content, numReviews, rating } = props;
  return (
    <Container maxW={'7xl'} p="8" bg="white" rounded="md">
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          {/* img */}
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%"
          >
            <Image
              width="full"
              height="270px"
              borderRadius="lg"
              src={image}
              alt="some good alt text"
              objectFit="cover"
            />
          </Box>
          {/* background */}
          <Box zIndex="1" width="100%" position="absolute" height="70%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          marginTop={{ base: '3', sm: '0' }}
        >
          <Divider />
          <Box>
            <Text
              fontSize={{ base: '16px', lg: '18px' }}
              color={useColorModeValue('yellow.500', 'yellow.300')}
              fontWeight={'500'}
              textTransform={'uppercase'}
              my={'4'}
            >
              Product Details
            </Text>

            <List spacing={2}>
              <ListItem>
                <Text as={'span'} fontWeight={'bold'}>
                  Name:
                </Text>{' '}
                {namep}
              </ListItem>
              <ListItem>
                <Text as={'span'} fontWeight={'bold'}>
                  Description:
                </Text>{' '}
                <Text noOfLines={2} fontSize="xs">
                  {content}
                </Text>
              </ListItem>
              <ListItem>
                <Text as={'span'} fontWeight={'bold'}>
                  Price:
                </Text>{' '}
                {`$ ${price} USD`}
              </ListItem>
              <ListItem>
                <Text as={'span'} fontWeight={'bold'}>
                  Category:
                </Text>{' '}
                {category}
              </ListItem>
              <ListItem>
                <Text as={'span'} fontWeight={'bold'}>
                  Rating:
                </Text>{' '}
                {rating && numReviews && (
                  <Rating rating={rating} numReviews={numReviews} />
                )}
              </ListItem>
            </List>
          </Box>
          <Button variant="solid" colorScheme="green" w="50%" mt="14">
            Add to cart
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
export default BodyModal;
