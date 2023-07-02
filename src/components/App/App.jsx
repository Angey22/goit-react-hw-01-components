import {
  Section,
  Container,
  Heading,
} from 'components';

// import data from 'data/data.json';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading marginBottom="50px" textAlign="center">
          Task 1 - Social network profile
        </Heading>

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 2 - Statistics Section
        </Heading>

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 3 - Friends list
        </Heading>

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 4 - Transaction history
        </Heading>

      </Container>
    </Section>
  );
};
