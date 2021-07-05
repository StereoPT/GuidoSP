import { Stack, SimpleGrid, Heading, Text, Box } from '@chakra-ui/react';
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
              
            </Stack>
            <Text fontSize={{ base: 'md', md: 'xl' }} color="textSecondary">
              Blah Blah Blah
            </Text>
          </Stack>
          <ProjectCards title="Project Title" description="This is the Project Description" githubLink="somelink" deployLink="otherlink" />
          <Box mt={{ md: '-50%' }}>
            <ProjectCards title="Project Title" description="This is the Project Description" githubLink="somelink" deployLink="otherlink" />
          </Box>
          <ProjectCards title="Project Title" description="This is the Project Description" githubLink="somelink" deployLink="otherlink" />
        </SimpleGrid>
      </Stack>
    </>
  );
};

export default FeaturedProjects;
