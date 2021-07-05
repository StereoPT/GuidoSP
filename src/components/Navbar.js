import React, { useRef } from 'react';
import {
  Box, Slide, Flex, Text, Button, Icon, Stack,
  Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody,
  useDisclosure
} from '@chakra-ui/react';
import NextLink from 'next/link';
import useMediaQuery from '../hooks/useMediaQuery';
import { GiTriforce } from 'react-icons/gi';
import { AiOutlineMenu } from 'react-icons/ai';

function Navbar({ enableTransition }) {
  const isLargerThan768 = useMediaQuery(768);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();

  const GuidoSPLogo = () => (
    <NextLink href="/" passHref>
      <Flex color="accentIntro" flexDirection="row" alignItems="center">
        <Text cursor="pointer" color="logoColor" fontWeight="bold" fontSize="32px" mr="2">
          GuidoSP
        </Text>
        <GiTriforce fontWeight="bold" fontSize="32px"/>
      </Flex>
    </NextLink>
  );

  const NavbarDrawer = () => (
    <Drawer isOpen={ isOpen } placement="left" initialFocusRef={ firstField } onClose={ onClose }>
      <DrawerOverlay />
      <DrawerContent backgroundColor="background">
        <DrawerHeader shadow="dark-lg" py="1">
          <GuidoSPLogo />
        </DrawerHeader>
        <DrawerBody>
          <Stack spacing="24px" color="navLinks">
            <NextLink href="/" passHref>
              <Button textAlign="center" as="a" variant="ghost" fontSize="16px">
                Home
              </Button>
            </NextLink>
            <NextLink href="/" passHref>
              <Button textAlign="center" as="a" variant="ghost" fontSize="16px">
                Projects
              </Button>
            </NextLink>
            <NextLink href="/" passHref>
              <Button textAlign="center" as="a" variant="ghost" fontSize="16px">
                Contact
              </Button>
            </NextLink>
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );

  return (
    <Box zIndex="99">
      <Slide direction="top" reverse in={ true }
        transition={ enableTransition ? { enter: { duration: 0.5, delay: 0.01 } } : { enter: { duration: 0, delay: 0 } } } background="background"
        >
        <Flex as="nav" flexDirection="row" justifyContent="space-between" alignItems="center" width="100%" px="3vw" py="1" shadow="dark-lg" background="background">          
          <GuidoSPLogo />
          { isLargerThan768 ? (
            <Box color="navLinks">
              <NextLink href="/" passHref>
                <Button as="a" variant="unstyled" p="4" py="2" ml="3vw" fontSize="16px">
                  Home
                </Button>
              </NextLink>
              <NextLink href="/" passHref>
                <Button as="a" variant="unstyled" p="4" py="2" ml="3vw" fontSize="16px">
                  Projects
                </Button>
              </NextLink>
              <NextLink href="/" passHref>
                <Button as="a" variant="unstyled" p="4" py="2" ml="3vw" fontSize="16px">
                  Contact
                </Button>
              </NextLink>{' '}
            </Box>
          ) : (
            <Icon cursor="pointer" color="navLinks" as={ AiOutlineMenu } w={ 7 } h={ 7 } onClick={ onOpen } />
          ) }
        </Flex>
      </Slide>
      <NavbarDrawer />
    </Box>
  );
}

export default Navbar;