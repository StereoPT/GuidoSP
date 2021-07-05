import { Stack, SimpleGrid, Heading, Text, Box, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

import ProjectCards from './ProjectCards';

function FeaturedProjects() {
  return (
    <>
      <Stack spacing={ 8 } w="full">
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={ 16 }>
          <Stack spacing={ 1 }>
            <Stack isInline alignItems="center" justifyContent="space-between">
              <Heading fontSize={{ base: 'xl', md: '2xl' }} color="textPrimary" fontFamily="Ubuntu">
                🏴‍☠️ Some Projects
              </Heading>
              <NextLink href="/projects" passHref>
                <Link>
                  <Text display={{ base: 'block', md: 'none' }} color="accentIntro" fontSize={{ base: 'md', md: 'xl' }}>
                    {' '}
                    Check more Projects &rarr;
                  </Text>
                </Link>
              </NextLink>
            </Stack>
            <Text fontSize={{ base: 'md', md: 'xl' }} color="textSecondary">
              Some of the most interesting projects I have worked on.
            </Text>
            <NextLink href="/projects" passHref>
                <Link>
                  <Text display={{ base: 'none', md: 'block' }} color="accentIntro" fontSize={{ base: 'md', md: 'xl' }}>
                    Check more Projects &rarr;
                  </Text>
                </Link>
              </NextLink>
          </Stack>
          <ProjectCards title="Project Title" description="This is the Project Description" imageURL="https://techieloops.com/wp-content/uploads/2021/06/benefits-project-management-software.png" githubLink="somelink" deployLink="otherlink" />
          <Box mt={{ md: '-50%' }}>
            <ProjectCards title="Project Title" description="This is the Project Description" imageURL="https://techieloops.com/wp-content/uploads/2021/06/benefits-project-management-software.png" githubLink="somelink" deployLink="otherlink" />
          </Box>
          <ProjectCards title="Project Title" description="This is the Project Description" imageURL="https://techieloops.com/wp-content/uploads/2021/06/benefits-project-management-software.png" githubLink="somelink" deployLink="otherlink" />
        </SimpleGrid>
      </Stack>
    </>
  );
};

export default FeaturedProjects;
