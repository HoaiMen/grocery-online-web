import React from 'react';
import {
  Box,
  Flex,
  IconButton,
  HStack,
  Stack,
  Link,
  useColorModeValue,
  useDisclosure,
  Select,
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { NavItem, navProductItems } from '../common/NavbarItem';
import { NavLink } from 'react-router-dom';
const NavProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue('gray.200', 'gray.900')} px={4} my={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            {navProductItems.map((navProductItem: NavItem) => (
              <Box key={navProductItem.label}>
                <Link
                  as={NavLink}
                  to={navProductItem.href}
                  px={2}
                  py={1}
                  rounded={'md'}
                  _hover={{
                    textDecoration: 'none',
                    bg: useColorModeValue('gray.200', 'gray.700'),
                  }}
                  href={'#'}
                >
                  {navProductItem.label}
                </Link>
              </Box>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={'center'}>
          <Select variant="filled">
            <option value="option1">All Product</option>
            <option value="option2">Fruit</option>
            <option value="option3">Vegetables</option>
          </Select>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {navProductItems.map((navProductItem: NavItem) => (
              <Box key={navProductItem.label}>
                <Link
                  as={NavLink}
                  to={navProductItem.href}
                  px={2}
                  py={1}
                  rounded={'md'}
                  _hover={{
                    textDecoration: 'none',
                    bg: useColorModeValue('gray.200', 'gray.700'),
                  }}
                  href={'#'}
                >
                  {navProductItem.label}
                </Link>
              </Box>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};
export default NavProduct;
