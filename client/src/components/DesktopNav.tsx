import React, { useMemo } from 'react';
import { Stack, Box, Link, useColorModeValue } from '@chakra-ui/react';
import { NavItem, navbarItems } from '../common/NavbarItem';
import { NavLink, useLocation } from 'react-router-dom';

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const router = useLocation();

  const path = useMemo(() => {
    return router.pathname;
  }, [router.pathname]);
  return (
    <Stack direction={'row'} spacing={4}>
      {navbarItems.map((navItem: NavItem) => (
        <Box key={navItem.label}>
          <Link
            rounded="lg"
            px={8}
            py={2}
            as={NavLink}
            to={navItem.href}
            _activeLink={path === navItem.href ? { bg: 'orange.300' } : {}}
            fontSize={'lg'}
            fontWeight={500}
            color={linkColor}
            _hover={{
              textDecoration: 'none',
              color: linkHoverColor,
              bg: 'orange.100',
            }}
          >
            {navItem.label}
          </Link>
        </Box>
      ))}
    </Stack>
  );
};
export default DesktopNav;
