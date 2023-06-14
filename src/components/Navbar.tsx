import React from 'react';
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
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import Logo from './Logo';
const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <React.Fragment>
      <Box bg={'orange.200'}>
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={6}
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
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
              <Logo color={useColorModeValue('gray.700', 'white')} />
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
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'#'}
            >
              Sign In
            </Button>
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
              href={'#'}
              _hover={{
                bg: 'pink.300',
              }}
            >
              Sign Up
            </Button>
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
