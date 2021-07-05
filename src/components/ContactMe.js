import { chakra, Stack, Heading, Text, Link, Button } from "@chakra-ui/react";
import useMediaQuery from "../hooks/useMediaQuery";
import { FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';

function ContactMe() {
  const isLargerThan800 = useMediaQuery(800);

  return (
    <>
      <Stack spacing={ 10 } h="35vh" w="100%" alignItems="center" justifyContent="center">
        <Heading fontSize={{ base: '4xl', md: '5xl'}} color="textPrimary" textAlign="center">
          Contact Me
        </Heading>
        <Text fontSize="md" color="textSecondary" textAlign="center">
          Currently open to work as a {' '}
          <chakra.span color="accentIntro" display={{ base: 'block', md: 'inline' }}>
            {' '}
            Developer  
          </chakra.span>
          <br />
          Get in touch and talk more about your Projects!
        </Text>
        <Stack isInline spacing={ 4 }>
          <Link href="https://www.linkedin.com/in/guidosp/" isExternal>
            <Button background="secondaryBackground" leftIcon={ <FaLinkedin fill="#58A4B0" /> } size={ isLargerThan800 ? 'md' : 'sm' } position="static" color="white">
              LinkedIn
            </Button>
          </Link>
          <Link href="mailto:stereopt@gmail.com" isExternal>
            <Button background="secondaryBackground" leftIcon={ <FaEnvelope fill="#58A4B0" /> } size={ isLargerThan800 ? 'md' : 'sm' } position="static" color="white">
              Email
            </Button>
          </Link>
          <Link href="#" isExternal>
            <Button background="secondaryBackground" leftIcon={ <FaFileAlt fill="#58A4B0" /> } size={ isLargerThan800 ? 'md' : 'sm' } position="static" color="white">
              Resume
            </Button>
          </Link>
        </Stack>
      </Stack>
    </>
  );
};

export default ContactMe;
