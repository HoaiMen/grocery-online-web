import React from 'react';
import { Button, CloseButton, Flex, Link, Input } from '@chakra-ui/react';
import { PriceTag } from './PriceTag';
import { CartProductMeta } from './CartProductMeta';

type CartItemProps = {
  name: string;
  category: string;
  description: string;
  quantity: number;
  count: number;
  price: number;
  totalPrice: number;
  currency: string;
  imageUrl: string;
  onClickDelete?: () => void;
  onIncreate: () => void;
  onDecreate: () => void;
};
type IQuantityProps = {
  clickIn: () => void;
  clickDis: () => void;
  value: number;
  quantity: number;
};
const QuantitySelect: React.FC<IQuantityProps> = ({
  clickDis,
  clickIn,
  value,
  quantity,
}) => {
  return (
    <Flex>
      <Button onClick={clickDis}>-</Button>
      <Input
        htmlSize={4}
        width="auto"
        value={`${value * quantity} gram`}
        readOnly
      />
      <Button onClick={clickIn}>+</Button>
    </Flex>
  );
};

export const CartItem = (props: CartItemProps) => {
  const {
    name,
    category,
    quantity,
    count,
    imageUrl,
    currency,
    price,
    onClickDelete,
    totalPrice,
    onIncreate,
    onDecreate,
  } = props;

  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        name={name}
        price={price}
        currency={currency}
        image={imageUrl}
        category={category}
        quantity={quantity}
      />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{ base: 'none', md: 'flex' }}
      >
        <QuantitySelect
          clickIn={onIncreate}
          clickDis={onDecreate}
          value={count}
          quantity={quantity}
        />
        <PriceTag price={totalPrice} currency={currency} />
        <CloseButton
          aria-label={`Delete ${name} from cart`}
          onClick={onClickDelete}
        />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{ base: 'flex', md: 'none' }}
      >
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>
        <QuantitySelect
          clickIn={onIncreate}
          clickDis={onDecreate}
          value={count}
          quantity={quantity}
        />
        {/* <QuantitySelect
          value={quantity}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value);
          }}
        /> */}
        <PriceTag price={totalPrice} currency={currency} />
      </Flex>
    </Flex>
  );
};
