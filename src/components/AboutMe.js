import { SimpleGrid, Stack, Flex, Heading, Text, Box, Image } from "@chakra-ui/react";
import useMediaQuery from '../hooks/useMediaQuery';

function AboutMe() {
  const isLargerThan800 = useMediaQuery(800);

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={ 8 }>
        <Stack spacing={ 4 }>
          <Heading color="textPrimary" fontFamily="Ubuntu" fontSize="2xl">
            ⚡ About Me
          </Heading>
          <Text color="textSecondary" fontSize={{ base: '14px', md: '16px' }} whiteSpace="pre-line">
            Hello everyone! I'm Guido Pereira and I've always been interested and passionate about computers.<br />
            <br />
            Blah Blah Blah
          </Text>
        </Stack>
        <Flex alignItems="center" justifyContent="center" position="relative">
          <Box maxW={{ base: '300px', lg: '350px' }} maxH={{ base: '300px', lg: '350px' }}>
            <Image src="https://svgsilh.com/svg/26432.svg" filter="invert(0.15)" w={{ base: '100px', md: '150px' }} position="absolute" top={ 0 } right={ 0 } zIndex={ 0 } alt="" />
            <Image src="/img/ProfileImage.png" w='100%' maxW={{ base: '300px', lg: '350px' }} maxH={{ base: '300px', lg: '350px' }} alt="Guido Pereira" zIndex={ 1 } />
          </Box>
        </Flex>
      </SimpleGrid>
    </>
  );
};

export default AboutMe;