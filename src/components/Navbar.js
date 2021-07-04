import { Box, Slide, Flex, Text, Button } from '@chakra-ui/react';
import NextLink from 'next/link';

// TODO:
// More Responsive
// Drawer & Hamburguer Menu
function Navbar() {
  return (
    <Box zIndex="99">
      <Slide direction="top" reverse in={ true } background="background">
        <Flex as="nav" flexDirection="row" justifyContent="space-between" alignItems="center" width="100%" px="3vw" py="3" borderBottom="0.5px solid black" background="background">
          <NextLink href="/" passHref>
            <Text cursor="pointer" color="displayColor" fontWeight="bold" fontSize="32px">
              GuidoSP
            </Text>
          </NextLink>
          <Box color="displayColor">
            <NextLink href="/" passHref>
              <Button as="a" variant="unstyled" p="4" py="2" ml="3vw" fontSize="16px">
                Home
              </Button>
            </NextLink>
            <NextLink href="/projects" passHref>
              <Button as="a" variant="unstyled" p="4" py="2" ml="3vw" fontSize="16px">
                Projects
              </Button>
            </NextLink>
            <NextLink href="/contact" passHref>
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