import React, { useContext, useEffect } from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import CardProduct from './Card';
import { ListContext } from '../contexts/ListProductContext';
import { CartContext } from '../contexts/CartContext';
const ListPage = () => {
  const { products, option, type, page, handleView, getAllProduct } =
    useContext(ListContext);
  const { handleAddCart } = useContext(CartContext);

  useEffect(() => {
    getAllProduct(page, type, option);
  }, [type, page]);
  return (
    <Box>
      <SimpleGrid columns={[2, null, 4]} spacing="30px">
        {products.map((item) => (
          <Box key={item.id}>
            <CardProduct
              product={item}
              handleView={() => handleView(item.id)}
              handleAdd={() => handleAddCart(item)}
            />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};
export default ListPage;
