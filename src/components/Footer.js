import { chakra, Stack, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <Stack alignItems="center" mt={ 10 } mb={ 5 }>
      <Text textAlign="center" fontSize="sm" color="textSecondary">
        Built with {' '}
        <chakra.span fontWeight="semibold" color="accentIntro">
          Next.js
        </chakra.span>{' '}&{' '}
        <chakra.span fontWeight="semibold" color="accentIntro">
          ChakraUI
        </chakra.span>. Hosted on{' '}
        <chakra.span fontWeight="semibold" color="accentIntro">
          Vercel
        </chakra.span>.
      </Text>
    </Stack>
  );
};

export default Footer;
