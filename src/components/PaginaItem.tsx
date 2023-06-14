import React, { useState, useEffect } from 'react';
import { Box, Flex, Text, Spacer } from '@chakra-ui/react';
type IPaginaItem = {
  items: any;
  curPage: number;
  itemLimit: number;
};

const PaginaItem: React.FC<IPaginaItem> = ({ items, curPage, itemLimit }) => {
  const [curItems, setCurItems] = useState([]);

  useEffect(() => {
    const offset = curPage * itemLimit;
    const getList = (curPage: number, itemLimit: number) => {
      setCurItems(items.slice(offset, offset + itemLimit));
    };

    getList(curPage, itemLimit);
  }, [curPage, itemLimit, items]);

  return (
    <Box h={32} m={4} borderWidth={2}>
      {curItems.map(function (data) {
        const { name, quantity } = data;
        return (
          <Flex p={2} key={name}>
            <Text>{name}</Text>
            <Spacer />
            <Text>{quantity}</Text>
          </Flex>
        );
      })}
    </Box>
  );
};

export default PaginaItem;
