import { SimpleGrid, Stack, Flex, Heading, Text } from "@chakra-ui/react";

function AboutMe() {
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
          This is a Flex
        </Flex>
      </SimpleGrid>
    </>
  );
};

export default AboutMe;