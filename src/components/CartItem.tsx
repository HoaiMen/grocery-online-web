import React, { useContext } from 'react';
import { Button, CloseButton, Flex, Link, Input } from '@chakra-ui/react';
import { PriceTag } from './PriceTag';
import { CartProductMeta } from './CartProductMeta';
import { CartContext } from '../contexts/AppContext';

type CartItemProps = {
  name: string;
  category: string;
  description: string;
  quantity: number;
  price: number;
  currency: string;
  imageUrl: string;
  onChangeQuantity?: (quantity: number) => void;
  onClickGiftWrapping?: () => void;
  onClickDelete?: () => void;
};
type IQuantityProps = {
  clickIn: () => void;
  clickDis: () => void;
  value: number;
};
const QuantitySelect: React.FC<IQuantityProps> = ({
  clickDis,
  clickIn,
  value,
}) => {
  return (
    <Flex>
      <Button onClick={clickDis}>-</Button>
      <Input htmlSize={4} width="auto" value={value} readOnly />
      <Button onClick={clickIn}>+</Button>
    </Flex>
  );
};

export const CartItem = (props: CartItemProps) => {
  const {
    name,
    category,
    quantity,
    imageUrl,
    currency,
    price,
    onChangeQuantity,
    onClickDelete,
  } = props;

  const { quantityy, setQuantityy } = useContext(CartContext);
  console.log(quantityy);
  const handleInc = () => {
    setQuantityy(quantityy + 1);
  };
  const handleDic = () => {
    setQuantityy(quantityy - 1);
  };
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
          clickIn={() => handleDic}
          clickDis={() => onChangeQuantity}
          value={quantityy}
        />
        <PriceTag price={price * quantityy} currency={currency} />
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
          clickIn={() => handleDic}
          clickDis={() => handleInc}
          value={quantityy}
        />
        {/* <QuantitySelect
          value={quantity}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value);
          }}
        /> */}
        <PriceTag price={price * quantityy} currency={currency} />
      </Flex>
    </Flex>
  );
};
