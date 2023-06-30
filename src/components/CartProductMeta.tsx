import React, { useContext } from 'react';
import {
  Box,
  Image,
  Stack,
  Text,
  Link,
  HStack,
  useDisclosure,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { PriceTag } from './PriceTag';
import { ModalContext, OverlayOne } from '../contexts/ModalContext';

export type CartProductMetaProps = {
  name: string;
  image: string;
  category: string;
  price: number;
  currency: string;
  quantity: number;
};

export const CartProductMeta = (props: CartProductMetaProps) => {
  const { image, name, price, currency, category, quantity } = props;
  const { onOpen } = useDisclosure();
  const { setOverlay } = useContext(ModalContext);
  return (
    <Stack direction="row" spacing="5" width="full">
      <Link
        onClick={() => {
          setOverlay(<OverlayOne />), onOpen();
        }}
      >
        <Image
          rounded="lg"
          width="120px"
          height="120px"
          fit="cover"
          src={image}
          alt={name}
          draggable="false"
          loading="lazy"
        />
      </Link>

      <Box pt="4">
        <Stack spacing="0.5">
          <Text fontWeight="medium">{name}</Text>
          <Text color={mode('gray.600', 'gray.400')} fontSize="sm">
            {category}
          </Text>
          <HStack>
            <PriceTag price={price} currency={currency} colorr="gray" />
            <Text>/{quantity}gram</Text>
          </HStack>
        </Stack>
      </Box>
    </Stack>
  );
};
