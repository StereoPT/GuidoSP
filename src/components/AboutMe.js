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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At non saepe voluptatum sint, perferendis asperiores suscipit corrupti nam repellat recusandae quis eius sapiente porro dicta similique laborum distinctio quos doloremque.
            Deserunt magni ipsum assumenda? Odit, numquam quasi perferendis quae architecto perspiciatis nobis maxime nulla ex voluptas molestias expedita nam at alias nihil repudiandae veniam, incidunt blanditiis veritatis itaque amet saepe?
            Corrupti numquam veritatis provident placeat repellendus asperiores exercitationem id sunt optio culpa quia sed explicabo nisi, laboriosam pariatur quasi! Aspernatur labore autem eos vero doloremque distinctio eveniet ipsum laudantium totam?
            Porro corrupti architecto maxime minus est nesciunt iste obcaecati modi culpa, cupiditate repudiandae quaerat eveniet? Voluptatibus atque illo, velit hic, mollitia enim quibusdam neque ratione blanditiis dolorum commodi, repellat aspernatur?
            Eius, maiores vero, odio quia architecto minima libero atque sequi, repellendus omnis perferendis quo ut vel iure ipsam. Soluta dolorem explicabo debitis eligendi nisi id? Saepe sed sint officia excepturi!
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