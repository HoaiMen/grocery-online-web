import {
  HStack,
  StackProps,
  Text,
  TextProps,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface PriceTagProps {
  currency: string;
  price: number;
  salePrice?: number;
  rootProps?: StackProps;
  priceProps?: TextProps;
  salePriceProps?: TextProps;
  colorr?: string;
}

export type FormatPriceOptions = { locale?: string; currency?: string };

export function formatPrice(
  value: number,
  opts: { locale?: string; currency?: string } = {}
) {
  const { locale = 'en-US', currency = 'USD' } = opts;
  const formatter = new Intl.NumberFormat(locale, {
    currency,
    style: 'currency',
    maximumFractionDigits: 2,
  });
  return formatter.format(value);
}

export const PriceTag = (props: PriceTagProps) => {
  const { price, currency, salePrice, rootProps, priceProps, colorr } = props;
  return (
    <HStack spacing="1" {...rootProps}>
      <Price isOnSale={!!salePrice} textProps={priceProps} colorz={colorr}>
        {formatPrice(price, { currency })}
      </Price>
    </HStack>
  );
};

interface PriceProps {
  children?: ReactNode;
  isOnSale?: boolean;
  textProps?: TextProps;
  colorz?: string;
}

const Price = (props: PriceProps) => {
  const { isOnSale, children, textProps, colorz } = props;
  return (
    <Text
      as="span"
      fontWeight="medium"
      color={colorz}
      textDecoration={isOnSale ? 'line-through' : 'none'}
      {...textProps}
    >
      {children}
    </Text>
  );
};
