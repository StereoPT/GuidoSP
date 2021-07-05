import { ScaleFade, Stack, Text, Image, Link, Divider, Tag } from '@chakra-ui/react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

function ProjectCards({ title, description, imageURL, githubLink, deployLink }) {

  return (
    <Stack bg="secondaryBackground" borderRadius="10px" minH="320px" maxH="800px" border="1px" borderColor={{ base: '#333', md: 'borderColor'}}>
      <ScaleFade in={ true } transition={{ duration: 1 }}>
        <Image width={ 1250 } height={ 600 } w="auto" h="auto" src={ imageURL } transition="0.3s" borderRadius="10px 10px 0 0" alt="Project Image" />
        <Stack px={ 4 } py={ 2 }>
          <Stack isInline justifyContent="space-between" alignItems="center">
            <Text fontFamily="Ubuntu" fontSize="2xl" color="textPrimary">
              { title }
            </Text>
            <Stack isInline justifyContent="flex-end" alignItems="center" spacing={ 4 }>
              { githubLink && (
                <Link href={ githubLink } color="textPrimary" isExternal>
                  <FaGithub size={ 24 } />
                </Link>
              ) }
              { deployLink && (
                <Link href={ deployLink } color="textPrimary" isExternal>
                  <FaExternalLinkAlt size={ 21 } />
                </Link>
              ) }
            </Stack>
          </Stack>
          <Stack isInline></Stack>
          <Divider />
          <Text color="textSecondary" fontSize={[ 'sm', 'md' ]}>
            { description }
          </Text>
        </Stack>
      </ScaleFade>
    </Stack>
  );
};

export default ProjectCards;
