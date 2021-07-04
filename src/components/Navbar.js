import { Box, Slide, Flex, Text, Button } from '@chakra-ui/react';
import { GiTriforce } from 'react-icons/gi';
import NextLink from 'next/link';

// TODO:
// More Responsive
// Drawer & Hamburguer Menu
function Navbar() {
  return (
    <Box zIndex="99">
      <Slide direction="top" reverse in={ true } background="background">
        <Flex as="nav" flexDirection="row" justifyContent="space-between" alignItems="center" width="100%" px="3vw" py="1" shadow="dark-lg" background="background">          
          <NextLink href="/" passHref>
            <Flex color="accentIntro" flexDirection="row" alignItems="center">
              <Text cursor="pointer" color="logoColor" fontWeight="bold" fontSize="32px" mr="2">
                GuidoSP
              </Text>
              <GiTriforce fontWeight="bold" fontSize="32px"/>
            </Flex>
          </NextLink>
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
        </Flex>
      </Slide>
    </Box>
  );
}

export default Navbar;