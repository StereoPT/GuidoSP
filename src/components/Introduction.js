import { Stack, SlideFade, Box, Text, Heading, Link, Button, Image } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Introduction() {
  return (
    <>
      <Stack spacing={ 10 } justifyContent="flex-start" alignItems="flex-start">
        <SlideFade direction="top" in={ true } transition={{ enter: { duration: 0.4, delay: 0.7 } }}>
          <Box position="relative">
            <Image src="https://svgsilh.com/svg/26432.svg" filter="invert(0.15)" w={{ base: '70px', md: '150px' }} position="absolute" top={{ base: '0', md: '-15' }} left={{ base: '-5', md: '-10' }} zIndex={ 0 } alt=""></Image>
            <Text color="accentIntro" fontSize="display2" fontWeight="medium" position="relative" zIndex={ 1 }>
              Welcome!, my name is-
            </Text>
          </Box>
          <Heading color="textPrimary" fontSize="display" lineHeight={ '95%' } /*color="displayColor"*/ letterSpacing={{ sm: '-1.2px', md: '-1.8px' }} position="relative" zIndex={1}>
            Guido Pereira.
          </Heading>
        </SlideFade>
        <SlideFade direction="top" in={ true } transition={{ enter: { duration: 0.4, delay: 0.8 } }}>
          <Heading color="textSecondary" fontSize="display2" fontWeight="medium" whiteSpace="pre-wrap" letterSpacing="-1.6px">
            <Box color="textPrimary" as="span">
              Software Developer
            </Box>{' '}
            Something something{' '}
          </Heading>
        </SlideFade>
        <SlideFade direction="top" in={ true } transition={{ enter: { duration: 0.4, delay: 0.9 } }}>
          <Text fontSize="display3" color="textSecondary">
            🚀 Looking for Opportunities & Side Projects.
            <br />
          </Text>
          <Stack fontSize="display3" color="textSecondary" isInline spacing={ 1 }>
            <Box>🎓</Box>
            <Box>Currently an Informatics Student at IPLeiria</Box>
          </Stack>
        </SlideFade>
        <SlideFade direction="top" in={true} transition={{ enter: { duration: 0.4, delay: 1.0 } }}>
          <Stack isInline spacing={ 4 }>
            <Link href="https://github.com/StereoPT" isExternal>
              <Button background="#373F51" leftIcon={ <FaGithub color="#58A4B0"/> } position="static" size="md" color="white">
                Github
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/guido-pereira-1a35b0152/" isExternal>
              <Button background="#373F51" leftIcon={ <FaLinkedin color="#58A4B0"/> } position="static" size="md" color="white">
                LinkedIn
              </Button>
            </Link>
            <Link href="mailto:stereopt@gmail.com" isExternal>
              <Button background="#373F51" leftIcon={ <FaEnvelope color="#58A4B0"/> } position="static" size="md" color="white">
                Email
              </Button>
            </Link>
          </Stack>
        </SlideFade>
      </Stack>
    </>
  );
}

export default Introduction;