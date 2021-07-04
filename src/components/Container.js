import { Flex } from '@chakra-ui/react';

import Navbar from './Navbar';

const Container = ({ children }) => {
  return (
    <>
      <Navbar />
      <Flex as="main" justifyContent="center" flexDirection="column">
        { children }
      </Flex>
    </>
  );
}

export default Container;