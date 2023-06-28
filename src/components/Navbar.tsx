import React, { useContext } from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs';
import {
  Box,
  Flex,
  Grid,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
  Center,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { amountInCart } = useContext(CartContext);
  return (
    <React.Fragment>
      <Box w="full">
        <Grid
          w="full"
          templateColumns="repeat(3, 1fr)"
          gap={6}
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'90px'}
          py={{ base: 2 }}
          px={{ base: 12 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
        >
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex
            flex={{ base: 1, md: 0 }}
            justify={{ base: 'center', md: 'start' }}
          >
            <Center>
              <Logo textSize={36} iconSize={38} />
            </Center>
          </Flex>
          <Flex display={{ base: 'none', md: 'flex' }}>
            <Center>
              <DesktopNav />
            </Center>
          </Flex>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}
          >
            <Center>
              <Flex px="4" display={{ base: 'none', md: 'inline-flex' }}>
                <IconButton
                  zIndex="1"
                  size={'md'}
                  icon={<BsFillCartPlusFill />}
                  aria-label={'Open Cart'}
                  as={NavLink}
                  to={'/cart'}
                  // onClick={navigator}
                />
                <Box ml="-1.5" mt="-1.5" zIndex="2">
                  <Text
                    bg="green.400"
                    rounded={'full'}
                    w="5"
                    h="6"
                    align="center"
                    textColor="white"
                  >
                    {amountInCart}
                  </Text>
                </Box>
              </Flex>
              <Button
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'pink.400'}
                as={NavLink}
                to={'/signIn'}
                _hover={{ bg: 'pink.300' }}
                _activeLink={{ bg: 'green.400' }}
              >
                Sign In
              </Button>
            </Center>
          </Stack>
        </Grid>
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </React.Fragment>
  );
};
export default Navbar;
