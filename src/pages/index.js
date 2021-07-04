import { Stack } from '@chakra-ui/react';

import Head from 'next/head';

import Container from '../components/Container';
import Introduction from '../components/Introduction';
import AboutMe from '../components/AboutMe';

function Index() {
  return (
    <>
      <Container>
        <Head>
          <title>GuidoSP | Front-end Developer</title>
        </Head>
        <Stack as="main" spacing="144px" justifyContent="center" alignItems="flex-start" px={{ base: '0.5vw', md: '10vw' }} mt={{ base: '15vh', md: '22.5vh' }}>
          <Introduction />
          <AboutMe />
        </Stack>
      </Container>
    </>
  );
}

export default Index;
