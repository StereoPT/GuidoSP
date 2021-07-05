import { Flex } from '@chakra-ui/react';

import Navbar from './Navbar';
import Footer from './Footer';

const Container = ({ enableTransition, children }) => {
  return (
    <>
      <Navbar enableTransition={ enableTransition } />
      <Flex as="main" justifyContent="center" flexDirection="column">
        { children }
      </Flex>
      <Footer />
    </>
  );
}

export default Container;