import React from 'react';
import {
  Box,
  Image,
  Stack,
  Text,
  HStack,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { PriceTag } from './PriceTag';

export type CartProductMetaProps = {
  name: string;
  image: string;
  category: string;
  price: number;
  currency: string;
  quantity: number;
  handleOpenModal: () => void;
};

export const CartProductMeta = (props: CartProductMetaProps) => {
  const { image, name, price, currency, category, quantity, handleOpenModal } =
    props;

  return (
    <Stack direction="row" spacing="5" width="full">
      <Image
        rounded="lg"
        width="120px"
        height="120px"
        fit="cover"
        src={image}
        alt={name}
        draggable="false"
        loading="lazy"
        onClick={handleOpenModal}
      />

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
