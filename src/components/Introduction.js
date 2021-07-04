import { Stack, SlideFade, Box, Text, Heading, Link, Button } from '@chakra-ui/react';

function Introduction() {
  return (
    <>
      <Stack spacing={ 10 } justifyContent="flex-start" alignItems="flex-start">
        <SlideFade direction="top" in={ true } transition={{ enter: { duration: 0.4, delay: 0.7 } }}>
          <Box position="relative">
            {/* Image Here */}
            <Text color="button1" fontSize="display2" fontWeight="medium" position="relative" zIndex={ 1 }>
              Welcome!, my name is-
            </Text>
          </Box>
          <Heading color="textPrimary" fontSize="display" lineHeight={ '95%' } /*color="displayColor"*/ letterSpacing={{ sm: '-1.2px', md: '-1.8px' }} position="relative" zIndex={1}>
            Guido Pereira.
          </Heading>
        </SlideFade>
        <SlideFade direction="top" in={ true } transition={{ enter: { duration: 0.4, delay: 0.8 } }}>
          <Heading color="textSecundary" fontSize="display2" fontWeight="medium" whiteSpace="pre-wrap" letterSpacing="-1.6px">
            <Box color="displayColor" as="span">
              Developer
            </Box>{' '}
            Something something{' '}
          </Heading>
        </SlideFade>
        <SlideFade direction="top" in={ true } transition={{ enter: { duration: 0.4, delay: 0.9 } }}>
          <Text fontSize="display3" color="textSecundary">
            🚀 Looking for Opportunities & Side Projects.
            <br />
          </Text>
          <Stack isInline spacing={ 1 }>
            <Box>🎓</Box>
            <Box>Currently an Informatics Student at IPLeiria</Box>
          </Stack>
        </SlideFade>
        <SlideFade direction="top" in={true} transition={{ enter: { duration: 0.4, delay: 1.0 } }}>
          <Stack isInline spacing={4}>
            <Link href="https://github.com/StereoPT" isExternal>
              <Button position="static" size="md" color="white">
                Github
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/guido-pereira-1a35b0152/" isExternal>
              <Button position="static" size="md" color="white">
                LinkedIn
              </Button>
            </Link>
            <Link href="mailto:stereopt@gmail.com" isExternal>
              <Button position="static" size="md" color="white">
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