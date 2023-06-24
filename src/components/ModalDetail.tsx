import React, { ReactElement, useEffect, useState } from 'react';
import {
  Button,
  Modal,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  Text,
  ModalFooter,
  useColorModeValue,
  List,
  Divider,
  Container,
  Box,
  ListItem,
  Link,
  Image,
} from '@chakra-ui/react';
import Rating from './Rating';
import { Product } from '../types/products.type';
import { getProduct } from '../api/Product.api';
import { useParams } from 'react-router-dom';
type IModalProps = {
  open: boolean;
  close: () => void;
  overlayy: ReactElement;
};
const ModalDetail: React.FC<IModalProps> = ({ open, close, overlayy }) => {
  const [product, setProduct] = useState<Pick<
    Product,
    | 'name'
    | 'imageURL'
    | 'content'
    | 'price'
    | 'category'
    | 'rating'
    | 'numReviews'
  > | null>(null);
  const param = useParams();
  const getProductDetail = async (id: string | number) => {
    try {
      const product = await getProduct(id);
      setProduct(product?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (param.id) {
      getProductDetail(param.id);
    }
  }, [param?.id]);
  return (
    <>
      <Modal isCentered isOpen={open} onClose={close} size="4xl">
        {overlayy}
        <ModalContent>
          <ModalHeader>Stories by Chakra Templates</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Container maxW={'7xl'} p="12" bg="teal.100">
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
                    <Link
                      textDecoration="none"
                      _hover={{ textDecoration: 'none' }}
                    >
                      <Image
                        width="full"
                        borderRadius="lg"
                        src={product?.imageURL[0]}
                        alt="some good alt text"
                        objectFit="cover"
                      />
                    </Link>
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
                        {product?.name}
                      </ListItem>
                      <ListItem>
                        <Text as={'span'} fontWeight={'bold'}>
                          Description:
                        </Text>{' '}
                        <Text noOfLines={2} fontSize="xs">
                          {product?.content}
                        </Text>
                      </ListItem>
                      <ListItem>
                        <Text as={'span'} fontWeight={'bold'}>
                          Price:
                        </Text>{' '}
                        {`$ ${product?.price} USD`}
                      </ListItem>
                      <ListItem>
                        <Text as={'span'} fontWeight={'bold'}>
                          Category:
                        </Text>{' '}
                        {product?.category}
                      </ListItem>
                      <ListItem>
                        <Text as={'span'} fontWeight={'bold'}>
                          Rating:
                        </Text>{' '}
                        {product && (
                          <Rating
                            rating={product?.rating}
                            numReviews={product?.numReviews}
                          />
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
          </ModalBody>
          <ModalFooter>
            <Button onClick={close}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ModalDetail;
