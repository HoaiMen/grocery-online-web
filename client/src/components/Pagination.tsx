import React from 'react';
import { HStack, IconButton, Stack } from '@chakra-ui/react';

import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons';
import { PaginateProps } from '../types/Paginate';

const Paginate = (props: PaginateProps) => {
  const {
    totalRows,
    limit,
    page,
    onPageChange,
    previousIcon = <ChevronLeftIcon />,
    nextIcon = <ChevronRightIcon />,
    colorScheme = 'gray',
  } = props;
  const totalPages = Math.ceil(totalRows / limit);
  const handlePageClick = (newPage: number) => {
    if (onPageChange) {
      onPageChange(newPage);
    }
  };

  return (
    <Stack p={3} bg="purple.50" border="1px" borderColor="gray.200" shadow="lg">
      <HStack w="100%">
        <IconButton
          disabled={page <= 1}
          aria-label="previous"
          icon={previousIcon}
          onClick={(e) => {
            e.preventDefault();
            handlePageClick(page - 1);
          }}
          colorScheme={colorScheme}
        />

        <IconButton
          disabled={page >= totalPages}
          aria-label="next"
          icon={nextIcon}
          onClick={(e) => {
            e.preventDefault();
            handlePageClick(page + 1);
          }}
          colorScheme={colorScheme}
        />
      </HStack>
    </Stack>
  );
};
export default Paginate;
