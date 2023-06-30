import React, { useContext, useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  HStack,
  Tag,
  SpaceProps,
  useColorModeValue,
  Container,
  ListItem,
  List,
  Divider,
  VStack,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { EffectCoverflow, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../style.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import DetailLayout from '../layouts/DetailLayout';
import { DetailProduct } from '../types/products.type';
import { useParams } from 'react-router-dom';
import { getProduct } from '../api/Product.api';
import Rating from '../components/Rating';
import ModalDetail from '../components/ModalDetail';
import { CartContext } from '../contexts/CartContext';
import { ModalContext, OverlayOne } from '../contexts/ModalContext';

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}
const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

const ProductDetail = () => {
  const [product, setProduct] = useState<DetailProduct>({
    name: '',
    quantity: 0,
    category: '',
    price: 0,
    id: 0,
    imageURL: [],
    content: '',
    currency: '',
    rating: 0,
    numReviews: 0,
  });

  const { handleAddCart } = useContext(CartContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [image, setImage] = useState('');
  const param = useParams();
  const { overlay, setOverlay } = useContext(ModalContext);

  const getProductDetail = async (id: string | number) => {
    try {
      const product = await getProduct(id);
      setProduct(product?.data);
      setImage(product?.data.imageURL[0]);
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
    <DetailLayout>
      <Container maxW={'full'} px="12">
        <ModalDetail
          open={isOpen}
          close={onClose}
          overlayy={overlay}
          image={product?.imageURL[0]}
          namep={product?.name}
          category={product?.category}
          numReviews={product?.numReviews}
          content={product?.content}
          rating={product?.rating}
          price={product?.price}
        />
        <Box
          marginTop={{ base: '1', sm: '5' }}
          display="flex"
          flexDirection={{ base: 'column', sm: 'row' }}
          justifyContent="space-between"
        >
          <VStack display="flex" flexDirection="column" w="50%">
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
                  onClick={() => {
                    setOverlay(<OverlayOne />);
                    onOpen();
                  }}
                >
                  <Image
                    h="330px"
                    width="650px"
                    borderRadius="lg"
                    src={image}
                    alt="some good alt text"
                    objectFit="cover"
                  />
                </Link>
              </Box>
              {/* background */}
              <Box zIndex="1" width="100%" position="absolute" height="100%">
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
            {/* SWIPER */}
            <Box
              display="flex"
              flex="1"
              marginLeft="18"
              position="relative"
              alignItems="center"
              marginTop="8"
              w="90%"
            >
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
              >
                {product &&
                  product.imageURL.map((image, index) => (
                    <SwiperSlide
                      key={index}
                      className="swiper-slide"
                      onClick={() => setImage(image)}
                    >
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
                            h="140px"
                            width="full"
                            borderRadius="lg"
                            src={image}
                            alt="some good alt text"
                            objectFit="cover"
                          />
                        </Link>
                      </Box>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </Box>
          </VStack>
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            marginTop={{ base: '3', sm: '0' }}
          >
            <BlogTags tags={['Engineering', 'Product']} />
            <Heading marginTop="1">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                {product?.name}
              </Link>
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}
            >
              {`$ ${product?.price} USD`}
            </Text>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue('gray.700', 'gray.200')}
              fontSize="lg"
            >
              {product?.content}
            </Text>
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
            <Button
              variant="solid"
              colorScheme="green"
              w="50%"
              mt="14"
              onClick={() => handleAddCart(product)}
            >
              Add to cart
            </Button>
          </Box>
        </Box>
      </Container>
    </DetailLayout>
  );
};

export default ProductDetail;
